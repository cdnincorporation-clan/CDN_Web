// Configuration
const DISCORD_INVITE = "https://discord.gg/h4GZaQdRaZ";

// Open discord on click
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-discord");
  if(btn){
    btn.addEventListener("click", () => {
      window.open(DISCORD_INVITE, "_blank", "noopener");
    });
  }
  // set year
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
});
