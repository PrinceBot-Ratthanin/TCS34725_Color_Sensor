Blockly.JavaScript['TCS34725_Color_Sensor_init'] = function(block) {
  /*var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var number_RX = block.getFieldValue('RX');
  var number_TX = block.getFieldValue('TX');*/
  var code = `#EXTINC #include <Adafruit_TCS34725.h>\n#END
#VARIABLE Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);
  float TCS34725_red, TCS34725_green, TCS34725_blue;#END
tcs.begin();`;
  return code;
};
Blockly.JavaScript['TCS34725_Color_Sensor_Read'] = function(block) {  
  var code = 'Serial.read();\n';
  return code;
};
Blockly.JavaScript['TCS34725_Color_Sensor_getRGB'] = function(block) {
  var code = 'tcs.getRGB(&TCS34725_red,&TCS34725_green,&TCS34725_blue);\n';
  return code;
};
Blockly.JavaScript['TCS34725_Color_Sensor_Read'] = function(block) {
  var dropdown_color = block.getFieldValue('_Color');
  var code = '';
  if(dropdown_color == 0){
    code += `TCS34725_red`;
  }
  else if(dropdown_color == 1){
    code += `TCS34725_green`;
  }
  else if(dropdown_color == 2){
    code += `TCS34725_blue`;
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

