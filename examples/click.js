var Gpio = require('onoff').Gpio
var button = new Gpio(4, 'in', 'both')

button.watch(function () {
  console.log('Button Pressed!')
})
