const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = __dirname;
const folder = path.join(root, 'video-parts');
const manifest = JSON.parse(fs.readFileSync(path.join(folder, 'manifest.json'), 'utf8'));
const video = Buffer.concat(manifest.parts.map(name => fs.readFileSync(path.join(folder, name))));
if (video.length !== manifest.length || crypto.createHash('sha256').update(video).digest('hex') !== manifest.sha256) {
  throw new Error('Video parts are incomplete or changed. The original file was not written.');
}
const target = path.join(root, manifest.name);
if (!fs.existsSync(target) || !fs.readFileSync(target).equals(video)) fs.writeFileSync(target, video);
console.log(`${manifest.name} verified (${video.length} bytes)`);
