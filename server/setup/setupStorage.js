import multer from 'multer';
import { videosFolder } from './setupFolder.js';

export const storage = multer.diskStorage({
    destination: videosFolder,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
export const upload = multer({ storage });
