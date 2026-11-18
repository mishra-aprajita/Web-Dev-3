var EventEmitter = require('events')

var ee = new EventEmitter()

//Hnadling/recieving
//on => method , message => event name3
ee.on('message', function (text) {
  console.log(text)
})

//emit => trigger/sending
ee.emit('message', 'hello world')