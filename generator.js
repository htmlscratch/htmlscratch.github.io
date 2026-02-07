// Initialize the Generator
const htmlGenerator = new Blockly.Generator('HTML');

// PRECISION FIX: This function is required for the generator to move through blocks
htmlGenerator.scrub_ = function(block, code, opt_thisOnly) {
  const nextBlock = block.getNextBlock();
  const nextCode = opt_thisOnly ? '' : htmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

// HTML Main Block Logic
htmlGenerator['html_main'] = function(block) {
  const content = htmlGenerator.statementToCode(block, 'CONTENT');
  return `<!DOCTYPE html>\n<html>\n<head><meta charset="utf-8"></head>\n<body>\n${content}</body>\n</html>`;
};

// HTML Text
htmlGenerator['html_text'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const styles = htmlGenerator.statementToCode(block, 'STYLE').trim();
  const styleAttr = styles ? ` style="${styles}"` : '';
  return `<p${styleAttr}>${text}</p>\n`;
};

// HTML Button
htmlGenerator['html_button'] = function(block) {
  const text = block.getFieldValue('TEXT');
  const js = htmlGenerator.statementToCode(block, 'JS').trim();
  const clickAttr = js ? ` onclick="${js}"` : '';
  return `<button${clickAttr}>${text}</button>\n`;
};

// CSS Logic
htmlGenerator['css_color'] = function(block) {
  return `color: ${block.getFieldValue('COL')}; `;
};

htmlGenerator['css_font_size'] = function(block) {
  return `font-size: ${block.getFieldValue('SIZE')}; `;
};

// JS Logic
htmlGenerator['js_alert'] = function(block) {
  return `alert('${block.getFieldValue('MSG')}'); `;
};
