document.body.classList.add("splash-active");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("splash-active");
    const splashScreen = document.getElementById("custom-splash-screen");
    if (splashScreen) {
      splashScreen.style.display = "none";
    }
  }, 3600); 
});
