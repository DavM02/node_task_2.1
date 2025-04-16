import fs from 'fs';
import path from 'path';
import { videosFolder } from '../setup/setupFolder.js';
import { videos } from './uploadVideo.js';

export function deleteVideo(req, res) {
    const name = req.params.name;
    if (!videos.has(name)) return res.status(404).json({ error: "File doesn't exist" });

    const filePath = path.join(videosFolder, name);

    fs.unlink(filePath, (err) => {
        if (err) return res.status(500).json({ error: "An error occured while deleting the file" });

        videos.delete(name);
        res.json({ message: "The video was successfully deleted" });
    });
}
