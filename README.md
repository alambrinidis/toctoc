#Toctoc-mesh ✨

A simple tool to get tweets from a specific hashtag in order to play a sound and emit en event on a network using spacebro.

This event will light up a LED which will be disabled upon pressing a button.

## Goal

Create an extension to a doorbell which publishes a tweet when ringing it and broadcast an event to say you are getting the door.

## 🌍 Installation

clone the repository

change directory into the repo

Use:
`$> npm install`

## 👋  Usage

toctoc and toctoc listener work using a config.json, you will find a config.example.json file in the config directory,
you have to

`cp config.example.json config.json` in the config directory and enter your access tokens for default use.

You can also change the tracked hashtag, the sound played or the spacebro client configuration.

Run `node ./toctocbro/toctoc.js` in another window

Run `node ./listen-toctoc/toctoc-listener.js` in yet another terminal window

## 📦 Dependencies

[spacebro-client](https://github.com/spacebro/spacebro-client)

[play.js](https://github.com/Marak/play.js)

## 🕳 Troubleshooting

**Make sure you have a command-line music player installed** Such as the ones mentioned below:
  * mplayer

  * afplay

  * mpg123

  * mpg321

  * play

  * omxplayer

  * aplay

  * cmdmp3

## ❤️ Contribute

Please follow standard-style conventions. You can modify the sources in the root directory and `button-led/`

Inside the button-led directory are very simple javascript files I used to test the GPIO pins on the Raspberry Pi :

   * GPIO 4 (7th physical pin) is used alongside the first ground pin (6th physical pin) for the LED tests

   * GPIO 14 (8th physical pin) is used alongside the first ground pin (6th physical pin) for the button tests

   * All three (GPIO 4, 14 and First ground) are used for the button and led tests
