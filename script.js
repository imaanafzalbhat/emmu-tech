// DARK MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// REMEMBER THEME
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

// SEARCH
const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".searchable");

searchBox.addEventListener("input", () => {
  const search = searchBox.value.toLowerCase().trim();

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();

    if (text.includes(search)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// MESSAGE
function showMessage(message) {
  const box = document.getElementById("messageBox");
  const text = document.getElementById("messageText");

  text.textContent = message;
  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 3000);
}

function closeMessage() {
  document.getElementById("messageBox").classList.remove("show");
}

// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// NAVIGATION
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector(link.getAttribute("href")).offsetTop - 70,
      behavior: "smooth"
    });
  });
});
