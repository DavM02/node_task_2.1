import fs from 'fs';
import path from 'path';

 
const rootDir = path.resolve();

export const videosFolder = path.join(rootDir, "public", "videos");

export function setupFolder() {
    if (!fs.existsSync(videosFolder)) {
        fs.mkdirSync(videosFolder, { recursive: true });
    }
}
