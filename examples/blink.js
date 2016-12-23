var Gpio = require('onoff').Gpio
var led = new Gpio(14, 'out')
var iv

iv = setInterval(function () {
  led.writeSync(led.readSync() ^ 1)

  console.log('Pin-Pon')
}, 200)
