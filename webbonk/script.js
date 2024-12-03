let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;

// Function to open Discord invite link
function openDiscordLink() {
  window.open("https://discord.gg/RSnmkVbW", "_blank");
}

// Add event listeners to all the links in the navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent the default anchor action
    openDiscordLink();       // Open the Discord link
  });
});
