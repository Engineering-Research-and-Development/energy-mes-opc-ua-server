
var sensors = require("./Sensors_datagenerator");

module.exports = {
  Sensors: function(server,addressSpace,EnergyObjects,data_matrix,read_timeout,columnNames,readTimestamp,scaleFactor) {

    var sensors_objects=[];
    EnergyObjects.forEach(function(EnergyObject) { 
      

      /*var Sensors = addressSpace.addObject({
        componentOf: EnergyObject,
        browseName: "Sensors"
    });
    sensors_objects.push(Sensors);*/

    });
    sensors.Sensors_datagenerator(addressSpace, EnergyObjects,data_matrix,read_timeout,columnNames,readTimestamp,scaleFactor);

    

  }
}
