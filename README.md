# OPC UA ENERGY SERVER with NodeOPCUA
A simple server that represents an energy station with the follow structure:
<img align="right" width="680" height="500" src="https://github.com/Engineering-Research-and-Development/energy-mes-opc-ua-server/blob/master/img/Workstation_EnergyMes.png">
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
    $ cd opc-ua-energy-server
    $ npm install
    $ node energy.js


### Edit config
  In the folder config, you can find the config.js in which there are the following parameters to be set:

      $ port = 4334;                         -> Server Port
      $ read_timeout = 10000;                -> Set a regular interval to read data from csv file
      $ resourcePath = "UA/EnergyServer";    -> Server resource path
      $ columnNames = ["ResourceID","Timestamp","ActivePowerL1","Flow","Pressure"]; -> Set variable names
      $ readTimestamp = false;               -> (If  true) Set an interval, computed from Timestamp column in csv file, to read data
      
### Administration Services
Administration services are reachable at port specified by api_port property (config.json).

|     |    Service    |                          Description                          |
|-----|:-------------:|:-------------------------------------------------------------:|
| GET | /version      | Returns information about version, name and server description |
| GET | /status      | Returns information about server status |

