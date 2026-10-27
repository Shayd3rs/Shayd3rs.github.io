document.addEventListener("DOMContentLoaded", () => {
  console.log("Personal portfolio website loaded!");

  const year = document.querySelector("footer p");

  if (year) {
    year.textContent = year.textContent.replace(
      /© \d{4}/,
      © ${new Date().getFullYear()}
    );
  }
});
