# Moviedex API

![express](https://camo.githubusercontent.com/0a95585d6b3a07028298a45d60b85a1331358bc336549d64dbbc27977f1495f3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d)
![nodemon](https://camo.githubusercontent.com/545fe69962105279d6b4a0c4a354a921fbc2e97403f8d9a05e4f1d98d74ccbff/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64656d6f6e26636f6c6f723d323232323232266c6f676f3d4e6f64656d6f6e266c6f676f436f6c6f723d373644303442266c6162656c3d)

## Requirements

Users can search for Movies by genre, country or avg_vote

- The endpoint is GET /movie
- The search options for genre, country, and/or average
  vote are provided in query string parameters.
- When searching by genre, users are searching for
  whether the Movie’s genre includes a specified string.
  The search should be case insensitive.
- When searching by country, users are searching for
  whether the Movie’s country includes a specified
  string. The search should be case insensitive.
- When searching by average vote, users are searching
  for Movies with an `avg_vote` that is greater than or
  equal to the supplied number.
- The API responds with an array of full movie entries
  for the search results
- The endpoint only responds when given a
  valid Authorization header with a Bearer API token value.
- The endpoint should have general security in place such
  as best practice headers and support for CORS.
