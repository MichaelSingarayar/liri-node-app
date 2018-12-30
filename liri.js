require("dotenv").config();

var keys = require("./keys");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);

var input = process.argv[2];
var arg = process.argv;






var moviethis = function (movie) {
    var url = "https://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy";
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var results = JSON.parse(body);

            console.log("---------------")
            console.log("Title: " + results.Title);
            console.log("Year: " + results.Year);
            console.log("IMDB Rating: " + results.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + results.Ratings[1].Value);
            console.log("Country: " + results.Country);
            console.log("Language: " + results.Language);
            console.log("Plot: " + results.Plot);
            console.log("Actors: " + results.Actors);

            var info = "movie-this " + movie + "\r\n" + "--------------------------------------------" + "\r\n" + "Title: " + results.Title + "\r\n" + "Year: " + results.Year + "\r\n" +
                "IMDB Rating: " + results.Ratings[0].Value + "\r\n" + "Rotten Tomatoes Score: " + results.Ratings[1].Value + "\r\n" +
                "Country: " + results.Country + "\r\n" + "Language: " + results.Language + "\r\n" + "Plot: " + results.Plot + "\r\n" +
                "Actors: " + results.Actors + "\r\n" + "--------------------------------------------" + "\r\n"
            appendthis(info);
        }
    })
}

var artistthis = function (artist) {
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(url, function (err, response, body) {
        if (err) {
            console.log("Artist not on tour");


        } else {
            var results = JSON.parse(body);

            var textInfo = "\r\n" + "concert-this " + artist + "\r\n";
            for (var i in results) {


                console.log("---------------")
                console.log(results[i].lineup);
                console.log(results[i].venue.name);
                console.log(results[i].venue.city);
                var time = moment(results[i].datetime).format("MM/DD/YYYY");
                console.log(time)

                textInfo += "---------------\r\n" + results[i].lineup + "\r\n" + results[i].venue.name + "\r\n" + results[i].venue.city + "\r\n" + time + "\r\n"
            }
            textInfo += "\r\n" + "-------------------------------" + "\r\n"
            appendthis(textInfo)

        }
    })
}

var spotifythis = function (song) {
    spotify.search({
        type: 'track',
        query: song,
        market: "US"
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var textResult = "\r\n" + "spotify-this-song " + song + "\r\n";
        for (var j in data.tracks.items) {
            var artists_arr = data.tracks.items[j].artists
            var artists = "Artists: "
            for (var i in artists_arr) {
                if (i == 0) {
                    artists += artists_arr[i].name
                } else {
                    artists += ", " + artists_arr[i].name
                }
            }
            var newLine = "---------------------\r\n";
            var title = "Song: " + data.tracks.items[j].name;
            if (data.tracks.items[j].preview_url == null) {
                var link = "No Preview Link Available"
            } else {
                var link = "Link: " + data.tracks.items[j].preview_url;
            }
            var album = "Album: " + data.tracks.items[j].album.name
            var text = newLine + artists + "\r\n" + title + "\r\n" + album + "\r\n" + link;
            console.log(text);
            textResult += "\r\n" + text + "\r\n";
        }
        textResult += "-----------------------------------" + "\r\n";
        appendthis(textResult);
    })
}

var appendthis = function (file) {
    fs.appendFile("log.txt", file, function (err) {
        if (err) {
            return console.log("There was an error")
        }
    })
}

if (input === "concert-this") {
    var info = arg.slice(3, arg.length)
    var artist = ""
    for (var i in info) {
        if (i == info.length - 1) {
            artist = artist + info[i]

        } else {
            artist += info[i] + " "
        }

    }
    artistthis(artist);

} else if (input === "spotify-this-song") {
    if (typeof (process.argv[3]) == "undefined") {
        var song = "The Sign"
    } else {
        var stuff = arg.slice(3, arg.length)
        var song = ""
        for (var i in stuff) {
            if (i == stuff.length - 1) {
                song = song + stuff[i]
            } else {
                song += stuff[i] + " "
            }
        }
    }
    spotifythis(song);

} else if (input === "movie-this") {
    if (typeof (process.argv[3]) == "undefined") {
        var movie = "Mr. Nobody"
    } else {
        var info = arg.slice(3, arg.length)
        var movie = ""
        for (var i in info) {
            if (i == info.length - 1) {
                movie = movie + info[i]
            } else {
                movie += info[i] + " "
            }
        }
    }
    moviethis(movie);

} else if (input === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var arr = data.split(",")
        var sec = arr;




        if (sec[0].trim() == "concert-this") {
            artistthis(sec[1])



        } else if (sec[0].trim() == "spotify-this-song") {
            spotifythis(sec[1])
        } else if (sec[0].trim() == "movie-this") {
            moviethis(sec[1])

        }
    })
}