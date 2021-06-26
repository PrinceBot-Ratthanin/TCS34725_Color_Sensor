Blockly.Blocks['TCS34725_Color_Sensor_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup TCS34725 I2C0")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup TCS34725 I2C0");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['TCS34725_Color_Sensor_getRGB'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS34725_getRGB"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("TCS34725_getRGB");
 this.setHelpUrl("");
  }
};
/*Blockly.Blocks['TCS34725_Color_Sensor_getRGB'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS34725_getRGB"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};*/
Blockly.Blocks['TCS34725_Color_Sensor_Read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS34725_ReadColor")
        .appendField(new Blockly.FieldDropdown([["R","0"],["G","1"], ["B","2"]]), "_Color");
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("TCS34725_ReadColor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DFPlayerMini_Fast_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("volume")
        .setCheck("Number")
        .appendField("Set Volume:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DFPlayerMini_Fast_play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("DFPlayer Play:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("DFPlayer loop:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_playFolder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("folderNum")
        .setCheck("Number")
        .appendField("DFPlayer playFolder:");
    this.appendValueInput("trackNum")
        .setCheck("Number")
        .appendField("trackNum:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_playNext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer playNext"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DFPlayerMini_Fast_playPrevious'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer playPrevious"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer stop"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer reset"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer resume"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer pause"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer sleep"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_wakeUp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer wakeUp"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
