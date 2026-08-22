const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const header = document.querySelector(".site-header");

const savedTheme = localStorage.getItem("ward-theme");
if (savedTheme === "light" || savedTheme === "dark") {
  root.dataset.theme = savedTheme;
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.dataset.theme = "light";
}

themeToggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("ward-theme", next);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const setHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 8);
};
setHeader();
window.addEventListener("scroll", setHeader, { passive: true });
