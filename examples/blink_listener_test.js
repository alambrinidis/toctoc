const spacebroClient = require('spacebro-client')
var Gpio = require('onoff').Gpio
var led = new Gpio(14, 'out')
var iv

spacebroClient.connect('127.0.0.1', 8888, {
  clientName: 'blink_listener',
  channelName: 'toctoc'
})

spacebroClient.on('Que la lumière soit!', function () {
  iv = setInterval(function () {
    led.writeSync(led.readSync() ^ 1)
  }, 200)
})

spacebroClient.on('Et la lumière fût', function () {
  clearInterval(iv)

  led.writeSync(0)

  led.unexport()
})
