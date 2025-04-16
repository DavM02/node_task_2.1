export const videos = new Map();

export function uploadVideo(req, res) {
    if (!req.file) return res.status(400).json({ error: "File is not uploaded" });
    console.log(req.file)
    const { originalname, size } = req.file;
    const filePath = `/videos/${originalname}`;

    videos.set(originalname, { name: originalname, size, filePath });

    res.json({ message: "The video was successfully uploaded", video: videos.get(originalname) });
}


 