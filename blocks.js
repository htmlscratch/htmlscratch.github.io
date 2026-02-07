// --- HTML BLOCKS ---
Blockly.Blocks['html_main'] = {
  init: function() {
    this.appendDummyInput().appendField("HTML5 Document");
    this.appendStatementInput("CONTENT").setCheck(null).appendField("body");
    this.setColour(160);
  }
};

Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput().appendField("Button: ").appendField(new Blockly.FieldTextInput("Click Me"), "TEXT");
    this.appendStatementInput("ATTRS").setCheck(null).appendField("attributes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

Blockly.Blocks['html_text'] = {
  init: function() {
    this.appendDummyInput().appendField("Text: ").appendField(new Blockly.FieldTextInput("Hello"), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

// --- CSS BLOCKS ---
Blockly.Blocks['css_bg_color'] = {
  init: function() {
    this.appendDummyInput().appendField("Background Color:").appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

// --- JS BLOCKS ---
Blockly.Blocks['js_alert'] = {
  init: function() {
    this.appendDummyInput().appendField("Alert: ").appendField(new Blockly.FieldTextInput("Hello!"), "MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};
