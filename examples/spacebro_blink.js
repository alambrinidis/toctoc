const spacebroClient = require('spacebro-client')

spacebroClient.connect('127.0.0.1', 8888, {
  clientName: 'blink',
  channelName: 'toctoc'
})

setTimeout(function () {
  spacebroClient.emit('Que la lumière soit!')
}, 500)

setTimeout(function () {
  spacebroClient.emit('Et la lumière fût')
}, 10000)
