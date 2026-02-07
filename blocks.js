/** HTML BLOCKS **/
Blockly.Blocks['html_main'] = {
  init: function() {
    this.appendDummyInput().appendField("HTML5 Document");
    this.appendStatementInput("CONTENT").setCheck(null).appendField("body content:");
    this.setColour(160);
    this.setTooltip("The root of your website.");
  }
};

Blockly.Blocks['html_text'] = {
  init: function() {
    this.appendDummyInput().appendField("Paragraph Text").appendField(new Blockly.FieldTextInput("Hello World"), "TEXT");
    this.appendStatementInput("STYLE").setCheck(null).appendField("css styles:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput().appendField("Button").appendField(new Blockly.FieldTextInput("Click Me"), "TEXT");
    this.appendStatementInput("JS").setCheck(null).appendField("when clicked (js):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

/** CSS BLOCKS **/
Blockly.Blocks['css_color'] = {
  init: function() {
    const colorField = Blockly.FieldColour ? new Blockly.FieldColour("#4a90e2") : new Blockly.FieldTextInput("#4a90e2");
    this.appendDummyInput().appendField("text color:").appendField(colorField, "COL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

Blockly.Blocks['css_font_size'] = {
  init: function() {
    this.appendDummyInput().appendField("font size:").appendField(new Blockly.FieldTextInput("24px"), "SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

/** JS BLOCKS **/
Blockly.Blocks['js_alert'] = {
  init: function() {
    this.appendDummyInput().appendField("show alert:").appendField(new Blockly.FieldTextInput("Button Clicked!"), "MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};

Blockly.Blocks['js_console'] = {
  init: function() {
    this.appendDummyInput().appendField("log to console:").appendField(new Blockly.FieldTextInput("Hello Console"), "MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};
