import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const root = process.cwd();
const sourceDirectory = path.join(root, 'pictures');
const publicDirectory = path.join(root, 'public');
const imageDirectory = path.join(publicDirectory, 'images');
const projectDirectory = path.join(imageDirectory, 'projects');
const ogDirectory = path.join(publicDirectory, 'og');

await Promise.all([
  mkdir(projectDirectory, { recursive: true }),
  mkdir(ogDirectory, { recursive: true }),
]);

const heroSource = path.join(sourceDirectory, 'guilherme.png');
await sharp(heroSource)
  .resize({ width: 1000, withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(imageDirectory, 'guilherme.png'));

for (const width of [640, 1000]) {
  const pipeline = sharp(heroSource).resize({ width, withoutEnlargement: true });
  const suffix = width === 1000 ? '' : `-${width}`;
  await Promise.all([
    pipeline.clone().webp({ quality: 84, effort: 5 }).toFile(path.join(imageDirectory, `guilherme${suffix}.webp`)),
    pipeline.clone().avif({ quality: 62, effort: 5 }).toFile(path.join(imageDirectory, `guilherme${suffix}.avif`)),
  ]);
}

const projects = [
  ['donateka.png', 'donateka'],
  ['ramirestech.png', 'ramirestech'],
  ['fjmclean.png', 'fjm-clean'],
  ['mini-ecommerce.png', 'mercadinho-delivery'],
];

for (const [sourceName, outputName] of projects) {
  const source = path.join(sourceDirectory, sourceName);
  await sharp(source)
    .resize({ width: 1440, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(projectDirectory, `${outputName}.png`));
  for (const width of [720, 1440]) {
    const pipeline = sharp(source).resize({ width, withoutEnlargement: true });
    const suffix = width === 1440 ? '' : `-${width}`;
    await Promise.all([
      pipeline.clone().webp({ quality: 82, effort: 5 }).toFile(path.join(projectDirectory, `${outputName}${suffix}.webp`)),
      pipeline.clone().avif({ quality: 58, effort: 5 }).toFile(path.join(projectDirectory, `${outputName}${suffix}.avif`)),
    ]);
  }
}

const portrait = await sharp(heroSource)
  .resize(460, 460, { fit: 'cover', position: 'attention' })
  .composite([{
    input: Buffer.from('<svg width="460" height="460"><rect width="460" height="460" rx="34" fill="white"/></svg>'),
    blend: 'dest-in',
  }])
  .png()
  .toBuffer();

const socialCard = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#080b12"/>
        <stop offset="1" stop-color="#172231"/>
      </linearGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M48 0H0V48" fill="none" stroke="#80a7ff" stroke-opacity=".08"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <text x="72" y="112" fill="#68e2b9" font-family="monospace" font-size="21">identity.py / build.complete</text>
    <text x="72" y="224" fill="#f5f7fa" font-family="Arial, sans-serif" font-size="62" font-weight="700">Guilherme</text>
    <text x="72" y="292" fill="#f5f7fa" font-family="Arial, sans-serif" font-size="62" font-weight="700">Ramires</text>
    <text x="72" y="360" fill="#cad3df" font-family="Arial, sans-serif" font-size="29">Python Software Engineer</text>
    <text x="72" y="414" fill="#8e9bad" font-family="Arial, sans-serif" font-size="23">Full-Stack · APIs · Automação · IA</text>
    <rect x="72" y="488" width="330" height="58" rx="12" fill="#111925" stroke="#293548"/>
    <text x="96" y="525" fill="#68e2b9" font-family="monospace" font-size="20">status: ready_to_ship</text>
  </svg>
`);

await sharp(socialCard)
  .composite([{ input: portrait, left: 682, top: 86 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(ogDirectory, 'portfolio-og.png'));

await copyFile(
  path.join(root, 'docs', 'Guilherme_Ramires_Python_Backend_Engineer.pdf'),
  path.join(publicDirectory, 'Guilherme_Ramires_Python_Software_Engineer_Resume.pdf'),
);

console.log('Generated responsive portfolio images, social card, and resume asset.');
