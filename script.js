/* =============================================================
   SOCIAL HANDLES
   Add your real links below — everything else updates itself.
   Leave a value as "#" to hide that icon's link (it'll still
   show, just won't go anywhere until you fill it in).
============================================================= */
const socialLinks = {
  linkedin: "#", // e.g. "https://www.linkedin.com/in/your-handle"
  github: "#", // e.g. "https://github.com/your-handle"
  instagram: "#", // e.g. "https://instagram.com/your-handle"
  twitter: "#", // e.g. "https://x.com/your-handle"
  // email is already wired to jefferykibet@gmail.com in index.html
};

document.querySelectorAll("[data-social]").forEach((link) => {
  const key = link.getAttribute("data-social");
  if (socialLinks[key] && socialLinks[key] !== "#") {
    link.href = socialLinks[key];
  }
});

/* =============================================================
   LENS TOGGLE
   Switches the page's framing between "Engineer" and
   "Psychologist" — swaps accent color and paired copy blocks.
============================================================= */
const lensButtons = document.querySelectorAll("[data-lens-btn]");
const engineerCopy = document.querySelectorAll("[data-copy-engineer]");
const psychologistCopy = document.querySelectorAll("[data-copy-psychologist]");

function setLens(lens) {
  document.documentElement.setAttribute("data-lens", lens);

  lensButtons.forEach((btn) => {
    const isActive = btn.getAttribute("data-lens-btn") === lens;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  engineerCopy.forEach((el) => {
    el.hidden = lens !== "engineer";
  });
  psychologistCopy.forEach((el) => {
    el.hidden = lens !== "psychologist";
  });
}

lensButtons.forEach((btn) => {
  btn.addEventListener("click", () =>
    setLens(btn.getAttribute("data-lens-btn")),
  );
});
