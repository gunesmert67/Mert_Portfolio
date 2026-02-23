const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(process.cwd(), 'public', 'mert.jpg');
const outputPath = path.join(process.cwd(), 'public', 'mert_optimized.webp');

async function optimizeImage() {
    try {
        if (!fs.existsSync(inputPath)) {
            console.error('Input image (mert.jpg) not found in public folder');
            return;
        }

        console.log('Optimizing personal image (mert.jpg)...');
        await sharp(inputPath)
            .resize(800)
            .webp({ quality: 75 })
            .toFile(outputPath);

        const statsOrig = fs.statSync(inputPath);
        const statsNew = fs.statSync(outputPath);

        console.log(`Original size: ${(statsOrig.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Optimized size: ${(statsNew.size / 1024).toFixed(2)} KB`);
        console.log('Success! Optimized image saved as mert_optimized.webp');
    } catch (err) {
        console.error('Error optimizing image:', err);
    }
}

optimizeImage();
