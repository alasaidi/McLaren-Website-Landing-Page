// toggle menu button
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}
function changeVideo(name) {
  const bgVideoList = document.querySelectorAll(".bg-video");
  const models = document.querySelectorAll(".model");

  // javascript higher order array function for each
  // this is easier to do data mapping
  bgVideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });

  models.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });
}

// change the play and pause button on click event
function togglePlay() {
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  play.classList.toggle("active");
  pause.classList.toggle("active");
}
function pauseVideo() {
  const bgVideoList = document.querySelectorAll(".bg-video");
  bgVideoList.forEach((video) => {
    video.pause();
  });
  togglePlay();
}
function playVideo() {
  const bgVideoList = document.querySelectorAll(".bg-video");
  bgVideoList.forEach((video) => {
    video.play();
  });
  togglePlay();
}
