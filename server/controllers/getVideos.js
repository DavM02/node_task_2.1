import { videos } from './uploadVideo.js';

export function getVideos(req, res) {
    res.json(Array.from(videos.values()));
}
