const messages = []; // the storage unit for messages //up up down down

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  // if(messages.length === 0){
  //   console.log('nothing in messages');
  //   return undefined;
  // }
  console.log('Dequeuing message');
  return messages.shift();
};