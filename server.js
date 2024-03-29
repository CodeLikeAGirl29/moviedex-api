require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const MOVIES = require("./movies-data.json");

const app = express();

const morganSetting = process.env.NODE_ENV === "production" ? "tiny" : "common";
app.use(morgan(morganSetting));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});

app.use(function validateBearerToken(req, res, next) {
	const apiToken = process.env.API_TOKEN;
	const authToken = req.get("Authorization");

	if (!authToken || authToken.split(" ")[1] !== apiToken) {
		return res.status(401).json({ error: "Unauthorized request" });
	}
	// move to the next middleware
	next();
});

app.get("/", (req, res) => {
	res.send("go to /movie to see the movies!");
});

app.get("/movie", function handleGetMovie(req, res) {
	let response = MOVIES;

	const { genre, country, avg_vote } = req.query;

	if (genre) {
		response = response.filter((movie) =>
			movie.genre.toLowerCase().includes(genre.toLowerCase())
		);
	}

	if (country) {
		response = response.filter((movie) =>
			movie.country.toLowerCase().includes(country.toLowerCase())
		);
	}

	if (avg_vote) {
		const numAvgVote = parseFloat(avg_vote);
		if (Number.isNaN(numAvgVote)) {
			return res.status(400).send("avg_vote must be a #");
		}
		response = response.filter((movie) => movie.avg_vote >= numAvgVote);
	}

	res.json(response);
});

app.use((error, req, res, next) => {
	let response;
	if (process.env.NODE_ENV === "production") {
		response = { error: { message: "server error" } };
	} else {
		response = { error };
	}
	res.status(500).json(response);
});
