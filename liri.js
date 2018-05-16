require("dotenv").config();

var keys = require("./keys.js");

var request = require("request");

var fs = require('fs');

var moment = require('moment')

var nodeArgs = process.argv;

var command = []


    for (var i = 2; i < nodeArgs.length; i++) {

        command.push(nodeArgs[i])
      }
      
      switch(command[0]){

        case "my-tweets":
        var twitterapi = require('./twitterapi.js');
        twitterapi.twitterLoad();
        log();
        break;

        case "spotify-this-song":
        var spotifyapi = require('./spotifyapi.js');
        spotifyapi.spotifySearchSong(command[1]);
        log();
        break;

        case "movie-this":
        var omdb = require('./omdbapi.js');
        omdb.movieSearch(command[1]);
        log();
        break;
      }


      function log() {
        var info;
     var date = Date.now() 
      date = moment().format('MMMM Do YYYY, h:mm:ss a') 
      if (command[1] === undefined){

        info = ` ${command[0]}  ${date} `
      } else {


        info = ` ${command[0]} ${command[1]}  ${date} `
      }

              fs.appendFile('log.txt', info, function(err){
                if(err){return console.log(err)}
                console.log("saved")
            });
      }