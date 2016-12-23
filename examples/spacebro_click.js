const spacebroClient = require('spacebro-client')
var Gpio = require('onoff').Gpio
var button = new Gpio(4, 'in', 'both')

spacebroClient.connect('127.0.0.1', 8888, {
  clientName: 'click',
  channelName: 'toctoc'
})

button.watch(function () {
  spacebroClient.emit('Button clicked')
})
