var exports = module.exports = {};

var port = 4334;
var api_port = 8082;
var read_timeout = 2000;
var resourcePath = "UA/EnergyMESServer";
//var columnNames = ["ResourceID","Timestamp","ActivePowerL1","Flow","Pressure"];
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