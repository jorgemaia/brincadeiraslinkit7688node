const mqtt = require('mqtt');
const client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt');

/**
* The state of the garage, defaults to closed
* Possible states : closed, opening, open, closing
*/

var state = 'closed';

client.on('connect', () => {  
  // Inform controllers that garage is connected
  client.publish('crazytechabs/meetup', 'Estou Vivo')
});
