const button = document.getElementById("hideBtn");
const video = document.getElementById("wildlifeVideo");

button.addEventListener("click", function () {

    if (!video.paused) {
        alert("Pause the video before hiding it.");
        return;
    }

    video.style.display = "none";
});
