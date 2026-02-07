# My WebBlock Engine

### How to add a new function:
1. **Define it in `blocks.js`**: Create a new `Blockly.Blocks['name']`.
2. **Generate it in `generator.js`**: Create `htmlGenerator['name']`.
3. **Show it in `index.html`**: Add `<block type="name"></block>` inside the `<xml>` toolbox.

### Deploying:
Simply push these files to the `main` branch and enable **GitHub Pages** in settings!
