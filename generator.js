const htmlGenerator = new Blockly.Generator('HTML');

htmlGenerator['html_main'] = function(block) {
  const content = htmlGenerator.statementToCode(block, 'CONTENT');
  return `<!DOCTYPE html>\n<html>\n<body>\n${content}</body>\n</html>`;
};

htmlGenerator['html_button'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const attrs = htmlGenerator.statementToCode(block, 'ATTRS').trim();
  return `<button ${attrs}>${text}</button>\n`;
};

htmlGenerator['html_text'] = function(block) {
  return `<p>${block.getFieldValue('TEXT')}</p>\n`;
};

htmlGenerator['css_bg_color'] = function(block) {
  const color = block.getFieldValue('COLOUR');
  return `style="background-color: ${color};" `;
};

htmlGenerator['js_alert'] = function(block) {
  const msg = block.getFieldValue('MSG');
  return `onclick="alert('${msg}')" `;
};
