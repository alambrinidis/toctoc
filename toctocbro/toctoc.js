/* jslint node: true */
'use strict'

var Twitter = require('twitter')
var play = require('play').Play()
var config = require('../config/config.json')
const spacebroClient = require('spacebro-client')

spacebroClient.connect(config.spacebro.server.address, config.spacebro.server.port, {
  clientName: config.spacebro.twitterClientName,
  channelName: config.spacebro.channelName
})

var client = new Twitter({
  consumer_key: config.twitter.auth.consumer_key,
  consumer_secret: config.twitter.auth.consumer_secret,
  access_token_key: config.twitter.auth.access_token_key,
  access_token_secret: config.twitter.auth.access_token_secret
})

client.stream('statuses/filter', {
  track: config.track,
  lang: 'fr'
}, function (stream) {
  stream.on('data', function (tweet) {
    console.log(tweet)
    spacebroClient.emit('toctoc')
    play.sound(config.sound.path, function () {})
  })

  stream.on('error', function (error) {
    console.log(error)
  })
})
