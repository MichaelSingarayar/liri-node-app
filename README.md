# liri-node-app

LIRI uses API calls from command line input to give you information about: movies, concerts, and music. It does this using OMBD, Spotify, and Bands in Town APIs.

Spotify From the command line using node the user will search Spotify using "spotify-this-song" along with an artist and return:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
In future states if no artist search is provided LIRI will return Swedish supergroup Ace of Base.

Movie From the command line using node the user will search OMBD using "movie-this" along with a the title and return:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Concert From the command line using node the user will search Bands in Town using "concert-this" along with a the singer/group and return:

Name of the venue
Venue location
Date of the Event, this will be updated in a future to be formatted using moment.
Wild Card From the command line using node the user will search a txt file using "do-what-it-says" along with Spotify to return:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Because this is reading the file, the user can change the txtfile, and LIRI will read whatever is inputted.

