var Gpio = require('onoff').Gpio
var button = new Gpio(4, 'in', 'both')
var led = new Gpio(14, 'out')
var iv

led.writeSync(0)

iv = setInterval(function () {
  led.writeSync(led.readSync() ^ 1)
}, 700)

button.watch(function () {
  clearInterval(iv)

  led.writeSync(0)
})
