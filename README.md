# liri-node-app

LIRI uses API calls from command line input to give you information about: movies, concerts, and music. It does this using OMBD, Spotify, and Bands in Town APIs.

# Spotify
From the command line using node the user will search Spotify using "spotify-this-song" along with an artist and return:

- Artist(s)
- The song's name
- The album that the song is from
- A preview link of the song from Spotify
- If no artist search is provided LIRI will return searches for "The Sign".


![spotify](https://user-images.githubusercontent.com/43361200/50544334-ed012100-0bae-11e9-80b6-92f234243666.gif)



# Movie
From the command line using node the user will search OMBD using "movie-this" along with a the title and return:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

![movie](https://user-images.githubusercontent.com/43361200/50544282-7dd6fd00-0bad-11e9-8e58-db137ab14ea6.gif)

# Concert
From the command line using node the user will search Bands in Town using "concert-this" along with a the singer/group and return:

- Name of the venue
- Venue location
- Date of the Event

![concert](https://user-images.githubusercontent.com/43361200/50544281-79aadf80-0bad-11e9-8ce5-4873a595b087.gif)




# Random
From the command line using node the user will search a txt file using "do-what-it-says" will return "I want it that way" songs from Spotify. It pulls the input from a random.txt file and can be changed to any of the other command line promts with a search query.

![do-what](https://user-images.githubusercontent.com/43361200/50544333-eb375d80-0bae-11e9-8bb9-23f6aaf6e319.gif)

# Technology Used

- Node.js
- NPM packages
  - Axios
  - SpotifyAPI
  - OMBD API
  - BandsInTownAPI
  - request
  - dotenv (for password security for Spotify)
  - fs (for file manipulations — including opening, reading, appending)

# Author

Michael Singarayar


