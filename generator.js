const htmlGenerator = new Blockly.Generator('HTML');

// This is the CRITICAL function that allows blocks to connect to each other
htmlGenerator.scrub_ = function(block, code, opt_thisOnly) {
  const nextBlock = block.getNextBlock();
  const nextCode = opt_thisOnly ? '' : htmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

htmlGenerator['html_main'] = function(block) {
  const content = htmlGenerator.statementToCode(block, 'CONTENT');
  return `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Preview</title>\n</head>\n<body style="font-family: sans-serif; padding: 20px;">\n${content}</body>\n</html>`;
};

htmlGenerator['html_text'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const styles = htmlGenerator.statementToCode(block, 'STYLE').trim();
  const styleAttr = styles ? ` style="${styles}"` : '';
  return `  <p${styleAttr}>${text}</p>\n`;
};

htmlGenerator['html_button'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const js = htmlGenerator.statementToCode(block, 'JS').trim();
  const clickAttr = js ? ` onclick="${js}"` : '';
  return `  <button${clickAttr} style="padding: 10px 20px; cursor: pointer;">${text}</button>\n`;
};

// CSS
htmlGenerator['css_color'] = function(block) {
  return `color: ${block.getFieldValue('COL')}; `;
};

htmlGenerator['css_font_size'] = function(block) {
  return `font-size: ${block.getFieldValue('SIZE')}; `;
};

// JS
htmlGenerator['js_alert'] = function(block) {
  return `alert('${block.getFieldValue('MSG')}'); `;
};

htmlGenerator['js_console'] = function(block) {
  return `console.log('${block.getFieldValue('MSG')}'); `;
};
