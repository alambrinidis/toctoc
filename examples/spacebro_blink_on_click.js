const spacebroClient = require('spacebro-client')
var Gpio = require('onoff').Gpio
var button = new Gpio(4, 'in', 'both')

spacebroClient.connect('127.0.0.1', 8888, {
  clientName: 'blink_on_click',
  channelName: 'toctoc'
})

setTimeout(function () {
  spacebroClient.emit('Que la lumière soit!')
}, 500)

button.watch(function () {
  spacebroClient.emit('Et la lumière fût')
})
