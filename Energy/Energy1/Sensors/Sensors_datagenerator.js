var opcua = require("node-opcua");

module.exports = {
  Sensors_datagenerator: function(addressSpace, EnergyObjects, data_matrix, read_timeout,columnNames,readTimestamp, scaleFactor) {


    var col1;
    var col2=[];
    var col3=[];
    var col4=[];
    var col5=[];
    var col6=[];
    var col7=[];
    var col8=[];
    var col9=[];
    var col10=[];
    var col11=[];
    var col12=[];
    var col13=[];
    var col14=[];
    var col15=[];
    var col16=[];
    

    var tempCol1 = 1;
    var tempCol2 = 1;
    var tempCol3 = 1;
    var tempCol4 = 1;
    var tempCol5 = 1;
    var tempCol6 = 1;
    var tempCol7 = 1;
    var tempCol8 = 1;
    var tempCol9 = 1;
    var tempCol10 = 1;
    var tempCol11 = 1;
    var tempCol12 = 1;
    var tempCol13 = 1;
    var tempCol14 = 1;
    var tempCol15 = 1;
    var tempCol16 = 1;
    var tempCol17 = 1;

    var timestampCol = 1;


      if(readTimestamp==true)
          var time = 0;
      else
          var time = read_timeout;



function periodicall() {  
      if(tempCol1 == data_matrix[1].length){
        tempCol1 = 1;
      }
      if(tempCol2 == data_matrix[2].length){
        tempCol2 = 1;
      }
      if(tempCol3 == data_matrix[3].length){
        tempCol3 = 1;
      }
      if(tempCol4 == data_matrix[4].length){
        tempCol4 = 1;
      }
      if(tempCol5 == data_matrix[5].length){
        tempCol5 = 1;
      }
      if(tempCol6 == data_matrix[6].length){
        tempCol6 = 1;
      }
      if(tempCol7 == data_matrix[7].length){
        tempCol7 = 1;
      }
      if(tempCol8 == data_matrix[8].length){
        tempCol8 = 1;
      }
      if(tempCol9 == data_matrix[9].length){
        tempCol9 = 1;
      }
      if(tempCol10 == data_matrix[10].length){
        tempCol10 = 1;
      }
      if(tempCol11 == data_matrix[11].length){
        tempCol11 = 1;
      }
      if(tempCol12 == data_matrix[12].length){
        tempCol12 = 1;
      }
      if(tempCol13 == data_matrix[13].length){
        tempCol13 = 1;
      }
      if(tempCol14 == data_matrix[14].length){
        tempCol14 = 1;
      }
      if(tempCol15 == data_matrix[15].length){
        tempCol15 = 1;
      }
      if(tempCol16 == data_matrix[16].length){
        tempCol16 = 1;
      }
      /*if(tempCol17 == data_matrix[17].length){
        tempCol17 = 1;
      }*/
      if(timestampCol == data_matrix[0].length){
        timestampCol = 1;
      }

      if(readTimestamp==true)
        time = (data_matrix[0][timestampCol+1] - data_matrix[0][timestampCol])*scaleFactor;
      else
        time = read_timeout;



      col1 = data_matrix[1][tempCol1].replace(/:/g , "|");
      //console.log("col1="+col1);
      col2[col1] = data_matrix[2][tempCol2];
      //console.log(" col2[col1]="+ col2[col1]);
      col3[col1] = data_matrix[3][tempCol3];
      col4[col1] = data_matrix[4][tempCol4];
      col5[col1] = data_matrix[5][tempCol5]=="t"?true:false;
      col6[col1] = data_matrix[6][tempCol6]=="t"?true:false;
      col7[col1] = data_matrix[7][tempCol7]=="t"?true:false;
      col8[col1] = data_matrix[8][tempCol8]=="t"?true:false;
      col9[col1] = data_matrix[9][tempCol9]=="t"?true:false;
      col10[col1] = data_matrix[10][tempCol10]=="t"?true:false;


      col11[col1] = data_matrix[11][tempCol11];
      col12[col1] = data_matrix[12][tempCol12];
      col13[col1] = data_matrix[13][tempCol13];
      col14[col1] = data_matrix[14][tempCol14];
      col15[col1] = data_matrix[15][tempCol15];
      col16[col1] = data_matrix[16][tempCol16];
      //col17[col1] = data_matrix[17][tempCol17];


      tempCol1+=1;
      tempCol2 +=1;
      tempCol3 +=1;
      tempCol4 +=1;
      tempCol5+=1;
      tempCol6 +=1;
      tempCol7 +=1;
      tempCol8 +=1;
      tempCol9+=1;
      tempCol10 +=1;
      tempCol11 +=1;
      tempCol12 +=1;
      tempCol13+=1;
      tempCol14 +=1;
      tempCol15 +=1;
      tempCol16 +=1;
      //tempCol17 +=1;
      timestampCol +=1;
      console.log("row="+tempCol1);
      //time=2000;
      setTimeout(periodicall, time);
    }
    periodicall();


    /*addressSpace.addVariable({
      componentOf: Sensors,
      nodeId: "ns=1;s="+columnNames[0], // some opaque NodeId in namespace 4
      browseName: columnNames[0],
      dataType: "String",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.String, value: String(col1) });
        }
      }
    });
*/
EnergyObjects.forEach(function(EnergyObject) { 
if (EnergyObject.browseName.name.indexOf("ene")>-1){
    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[2], // some opaque NodeId in namespace 4
      browseName: columnNames[2],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col2[EnergyObject.browseName.name] });
        }
      }
    });

    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[3], // some opaque NodeId in namespace 4
      browseName: columnNames[3],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col3[EnergyObject.browseName.name]   });
        }
      }
    });

    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[4], // some opaque NodeId in namespace 4
      browseName: columnNames[4],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col4[EnergyObject.browseName.name]   });
        }
      }
    });
  }


  if (EnergyObject.browseName.name.indexOf("mes")>-1){
    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[5], // some opaque NodeId in namespace 4
      browseName: columnNames[5],
      dataType: "Boolean",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Boolean, value: Boolean(col5[EnergyObject.browseName.name]) });
        }
      }
    });

    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[6], // some opaque NodeId in namespace 4
      browseName: columnNames[6],
      dataType: "Boolean",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Boolean, value:  Boolean(col6[EnergyObject.browseName.name]) });
        }
      }
    });

 
    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[7], // some opaque NodeId in namespace 4
      browseName: columnNames[7],
      dataType: "Boolean",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Boolean, value:  Boolean(col7[EnergyObject.browseName.name]) });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[8], // some opaque NodeId in namespace 4
      browseName: columnNames[8],
      dataType: "Boolean",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Boolean, value:  Boolean(col8[EnergyObject.browseName.name]) });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[9], // some opaque NodeId in namespace 4
      browseName: columnNames[9],
      dataType: "Boolean",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Boolean, value:  Boolean(col9[EnergyObject.browseName.name]) });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[10], // some opaque NodeId in namespace 4
      browseName: columnNames[10],
      dataType: "Boolean",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Boolean, value:  Boolean(col10[EnergyObject.browseName.name]) });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[11], // some opaque NodeId in namespace 4
      browseName: columnNames[11],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col11[EnergyObject.browseName.name] });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[12], // some opaque NodeId in namespace 4
      browseName: columnNames[12],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col12[EnergyObject.browseName.name] });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[13], // some opaque NodeId in namespace 4
      browseName: columnNames[13],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col13[EnergyObject.browseName.name] });
        }
      }
    });



    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[14], // some opaque NodeId in namespace 4
      browseName: columnNames[14],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col14[EnergyObject.browseName.name] });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[15], // some opaque NodeId in namespace 4
      browseName: columnNames[15],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col15[EnergyObject.browseName.name] });
        }
      }
    });


    addressSpace.addVariable({
      componentOf: EnergyObject,
      nodeId: "ns=1;s="+EnergyObject.browseName.name+"_"+columnNames[16], // some opaque NodeId in namespace 4
      browseName: columnNames[16],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col16[EnergyObject.browseName.name] });
        }
      }
    });


    



  }

  });
  }
}
