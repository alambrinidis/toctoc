const spacebroClient = require('spacebro-client')

spacebroClient.connect('127.0.0.1', 8888, {
  clientName: 'click_listener',
  channelName: 'toctoc'
})

spacebroClient.on('Button clicked', function () { console.log('Button clicked!') })
