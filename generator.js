const htmlGenerator = new Blockly.Generator('HTML');

htmlGenerator['html_main'] = function(block) {
  const content = htmlGenerator.statementToCode(block, 'CONTENT');
  return `<!DOCTYPE html>\n<html>\n<head><meta charset="utf-8"></head>\n<body>\n${content}</body>\n</html>`;
};

htmlGenerator['html_text'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const styles = htmlGenerator.statementToCode(block, 'STYLE').trim();
  return `<p style="${styles}">${text}</p>\n`;
};

htmlGenerator['html_button'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const js = htmlGenerator.statementToCode(block, 'JS').trim();
  return `<button onclick="${js}">${text}</button>\n`;
};

// CSS Generators
htmlGenerator['css_color'] = function(block) {
  return `color: ${block.getFieldValue('COL')}; `;
};

htmlGenerator['css_font_size'] = function(block) {
  return `font-size: ${block.getFieldValue('SIZE')}; `;
};

// JS Generators
htmlGenerator['js_alert'] = function(block) {
  return `alert('${block.getFieldValue('MSG')}'); `;
};

htmlGenerator['js_console'] = function(block) {
  return `console.log('${block.getFieldValue('MSG')}'); `;
};
