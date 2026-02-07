// HTML
Blockly.Blocks['html_main'] = {
  init: function() {
    this.appendDummyInput().appendField("HTML5 Document");
    this.appendStatementInput("CONTENT").setCheck(null).appendField("body");
    this.setColour(160);
  }
};

Blockly.Blocks['html_text'] = {
  init: function() {
    this.appendDummyInput().appendField("Text").appendField(new Blockly.FieldTextInput("Hello"), "TEXT");
    this.appendStatementInput("STYLE").setCheck(null).appendField("style");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput().appendField("Button").appendField(new Blockly.FieldTextInput("Click Me"), "TEXT");
    this.appendStatementInput("JS").setCheck(null).appendField("when clicked");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

// CSS
Blockly.Blocks['css_color'] = {
  init: function() {
    this.appendDummyInput().appendField("Text Color").appendField(new Blockly.FieldColour("#ff0000"), "COL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

Blockly.Blocks['css_font_size'] = {
  init: function() {
    this.appendDummyInput().appendField("Font Size").appendField(new Blockly.FieldTextInput("20px"), "SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

// JS
Blockly.Blocks['js_alert'] = {
  init: function() {
    this.appendDummyInput().appendField("Alert Box").appendField(new Blockly.FieldTextInput("Hi!"), "MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};

Blockly.Blocks['js_console'] = {
  init: function() {
    this.appendDummyInput().appendField("Log to Console").appendField(new Blockly.FieldTextInput("Working..."), "MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};
