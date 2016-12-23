'use strict'

const spacebroClient = require('spacebro-client')
var config = require('../config/config.json')
var Gpio = require('onoff').Gpio
var button = new Gpio(4, 'in', 'both')
var led = new Gpio(14, 'out')
var iv

spacebroClient.connect(config.spacebro.server.address, config.spacebro.server.port, {
  clientName: config.spacebro.clientName,
  channelName: config.spacebro.channelName
})

led.writeSync(0)

spacebroClient.on('toctoc', function () {
  iv = setInterval(function () {
    led.writeSync(led.readSync() ^ 1)
  }, 700)
})

button.watch(function () {
  clearInterval(iv)

  led.writeSync(0)
})
