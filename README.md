# OPC UA WORKSTATION (ENERGY MES SERVER) with NodeOPCUA
A simple server that represents a work station with the follow structure:
<img align="right" width="580" height="420" src="https://github.com/Engineering-Research-and-Development/energy-mes-opc-ua-server/blob/master/img/Workstation_EnergyMes.png">
* Energy (obj)
    * ActivePowerL1 (attr)
    * Flow (attr)
    * Pressure (attr)
* MES (obj)
    * Busy (attr)
    * RFIDTagPresent (attr)
    * Done (attr)
    * StationEntryxBG5 (attr)
    * ReadyAtStationxBG1 (attr)
    * StationExitxBG6 (attr)
    * OrderNo (attr)
    * OrderPosition (attr)
    * CarrierID (attr)   
    * WorkPlanNo (attr)
    * StepNo (attr)
    * OperationNo (attr)
    * PartNumber (attr)


### Install from source

    $ git clone "address"
    $ cd opc-ua-energy-mes-opc-ua-server
    $ npm install
    $ node energy.js


### Edit config
  In the folder config, you can find the config.js in which there are the following parameters to be set:

```
var exports = module.exports = {};

var port = 4334;
var api_port = 8082;
var read_timeout = 2000;
var resourcePath = "UA/EnergyMESServer";
var columnNames = ["timeStamp","ResourceID","Pressure","Flow","ActivePowerL1","Busy","RFIDTagPresent","Done","StationEntryxBG5","ReadyAtStationxBG1","StationExitxBG6","OrderNo","OrderPosition","CarrierID","WorkPlanNo","StepNo","OperationNo"," PartNumber"]; 

var readTimestamp = true;
var scaleFactor= 1;

exports.port = port;
exports.read_timeout = read_timeout;
exports.resourcePath = resourcePath;
exports.columnNames = columnNames;
exports.readTimestamp = readTimestamp;
exports.api_port = api_port;
exports.scaleFactor = scaleFactor;
```
      
### Administration Services
Administration services are reachable at port specified by api_port property (config.json).

|     |    Service    |                          Description                          |
|-----|:-------------:|:-------------------------------------------------------------:|
| GET | /version      | Returns information about version, name and server description |
| GET | /status      | Returns information about server status |

