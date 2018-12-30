# liri-node-app

LIRI uses API calls from command line input to give you information about: movies, concerts, and music. It does this using OMBD, Spotify, and Bands in Town APIs.

# Spotify
From the command line using node the user will search Spotify using "spotify-this-song" along with an artist and return:

- Artist(s)
- The song's name
- The album that the song is from
- A preview link of the song from Spotify
- If no artist search is provided LIRI will return searches for "The Sign".

![spotify](https://user-images.githubusercontent.com/43361200/50544269-0acd8680-0bad-11e9-8cff-8dba2c8309dd.gif)


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

# Concert
From the command line using node the user will search Bands in Town using "concert-this" along with a the singer/group and return:

- Name of the venue
- Venue location
- Date of the Event


# Random
From the command line using node the user will search a txt file using "do-what-it-says" will return a random song from Spotify


