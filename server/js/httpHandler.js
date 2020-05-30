const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
// const queue = require('./messageQueue');
// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
let messageQueue = null;//has dequeue method.
module.exports.initialize = (queue) => {

  messageQueue = queue;
};

const randomCommand = () => {
  let arr = ['up','down', 'left', 'right'];
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  //127.0.0.0.1:3000  <---commands
  if (req.method === 'GET') {
    console.log('received GET request')
//respond with 200

//respond with 'dequeue'

    if (messageQueue) {
      res.writeHead(200, headers);
      var command = messageQueue.dequeue()
      console.log('command from router', command);
      res.end(command);
    }
  }
  next(); // invoke next() at the end of a request to help with testing!
//127.0.0.1:3000/background.jpg
if(req.method === 'GET' && req.url === 'http://127.0.0.1:3000/background.jpg') {

}
};
