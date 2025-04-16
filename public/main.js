const apiUrl = "http://localhost:3000/api/videos";

async function fetchVideos() {
    const res = await fetch(apiUrl);
    const videos = await res.json();
    const list = document.getElementById("videoList");
    const videoPlayer = document.getElementById("videoPlayer");


    list.innerHTML = "";

    if (videos.length === 0) {
        videoPlayer.style.display = "none";
    } else {
        videoPlayer.style.display = "block";
    }

    videos.forEach(video => {
        const li = document.createElement("li");
        li.setAttribute("data-name", video.name);
        li.innerHTML = `
                <span>▶ ${video.name}</span>
                <button>X</button>
            `;
        list.appendChild(li);
    });
}

async function uploadVideo() {
    const fileInput = document.getElementById("videoUpload");
    if (!fileInput.files[0]) return alert("Select a file first");

    const formData = new FormData();
    formData.append("video", fileInput.files[0]);

    await fetch(apiUrl, { method: "POST", body: formData });
    fetchVideos();
}

async function deleteVideo(name) {
    await fetch(`${apiUrl}/${name}`, { method: "DELETE" });
    fetchVideos();
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = "";
    videoPlayer.pause();   
}

function playVideo(name) {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = `./videos/${name}`;
    videoPlayer.play();
}

document.getElementById("videoList").addEventListener("click", function (event) {
    const li = event.target.closest("li");
    if (!li) return;

    const name = li.getAttribute("data-name");

    if (event.target.tagName === "SPAN") {
        playVideo(name);
    } else if (event.target.tagName === "BUTTON") {
        deleteVideo(name);
    }
});

 
fetchVideos();
 