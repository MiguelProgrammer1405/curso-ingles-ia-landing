const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = __dirname;
const input = path.join(root, 'Curso_IA_Promocional.mp4');
const folder = path.join(root, 'video-parts');
const chunkSize = 2_097_150; // Divisible by three for reliable base64 transfers.
const video = fs.readFileSync(input);
fs.mkdirSync(folder, { recursive: true });
const parts = [];
for (let start = 0, index = 0; start < video.length; start += chunkSize, index++) {
  const name = `curso-video-${String(index).padStart(2, '0')}.part`;
  fs.writeFileSync(path.join(folder, name), video.subarray(start, start + chunkSize));
  parts.push(name);
}
for (const name of fs.readdirSync(folder)) {
  if (/^curso-video-\d+\.part$/.test(name) && !parts.includes(name)) fs.unlinkSync(path.join(folder, name));
}
fs.writeFileSync(path.join(folder, 'manifest.json'), JSON.stringify({
  name: 'Curso_IA_Promocional.mp4',
  length: video.length,
  sha256: crypto.createHash('sha256').update(video).digest('hex'),
  parts,
}, null, 2) + '\n');
console.log(`${parts.length} parts created; ${video.length} bytes`);
