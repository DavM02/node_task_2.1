import express from 'express';
import cors from 'cors';
import { setupFolder } from './setup/setupFolder.js';
import { getVideos } from './controllers/getVideos.js';
import { deleteVideo } from './controllers/deleteVideo.js';
import { uploadVideo } from './controllers/uploadVideo.js';
import { upload } from './setup/setupStorage.js';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

setupFolder();

app.get("/api/videos", getVideos);

app.post("/api/videos", upload.single("video"), uploadVideo);

app.delete("/api/videos/:name", deleteVideo);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
