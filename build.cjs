const { copyFileSync, mkdirSync, readdirSync } = require('node:fs');
const path = require('node:path');

require('./assemble-video.cjs');

const output = path.join(__dirname, 'dist');
mkdirSync(output, { recursive: true });
for (const file of readdirSync(__dirname, { withFileTypes: true })) {
  if (file.isFile() && /\.(?:html|css|png|jpg|mp4)$/.test(file.name)) {
    copyFileSync(path.join(__dirname, file.name), path.join(output, file.name));
  }
}
