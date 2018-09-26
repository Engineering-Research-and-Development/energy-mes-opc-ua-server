var opcua = require("node-opcua");
var sensor_obj = require("./Sensors/Sensors");

module.exports ={

  
  construct_my_address_space: function (server,data_matrix,read_timeout,columnNames,readTimestamp, scaleFactor) {
    
    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }
    
    var addressSpace = server.engine.addressSpace;

    objectsfolder = addressSpace.rootFolder.objects;

    var EnergyObjects=[];

    var row=data_matrix[1].length;
    var servers_name = data_matrix[1].filter( onlyUnique ); 
    servers_name.forEach(function(server_name) { 
      //console.log("server_name="+server_name);
      var EnergyObject = addressSpace.addObject({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: server_name.replace(/:/g , "|")//server_name
      });
      EnergyObjects.push(EnergyObject);
    });

    sensor_obj.Sensors(server,addressSpace,EnergyObjects,data_matrix,read_timeout,columnNames,readTimestamp, scaleFactor);
    }
}
