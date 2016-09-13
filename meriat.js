var mqtt = require('mqtt');

var mqttClient = mqtt.connect('ws://test.mosquitto.org:8080/mqtt');
// Credenciais do Cloud MQTT
//var mqttClient = mqtt.connect('mqtt://qrpqgwrh:r5hxz2Nh8mzF@m11.cloudmqtt.com:18244');

setInterval(function(){ 
	var mensagem1 = ((Math.random() * 100) + 1).toFixed(3);
	var mensagem2 = ((Math.random() * 100) + 1).toFixed(3);
	var mensagem3 = ((Math.random() * 30) + 1).toFixed(3);
	
	if(~~(Math.random() * 3) == 0) {
		mqttClient.publish('vm/teste/meriat', mensagem1, function () {
			console.log("Publicado no Cloud MQTT: " + mensagem1);
		}); 
	}
	
	if(~~(Math.random() * 3) == 1) {
		mqttClient.publish('vm/teste/jorge', mensagem2, function () {
			console.log("Publicado no Cloud MQTT: " + mensagem2);
		}); 
	}
	
	if(~~(Math.random() * 3) == 2) {
		mqttClient.publish('vm/teste/will', mensagem3, function () {
			console.log("Publicado no Cloud MQTT: " + mensagem3);
		});
	}	
}, 500);
