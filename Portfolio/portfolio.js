const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  status.classList.remove("error");

  if (!name || !email || !message) {
    status.textContent = "Fill in your name, email, and message.";
    status.classList.add("error");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = "Enter a valid email address.";
    status.classList.add("error");
    return;
  }

  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\nReply to: " + email);
  window.location.href = "mailto:you@example.com?subject=" + subject + "&body=" + body;

  status.textContent = "Opening your email app. Thanks for reaching out.";
  form.reset();
});
