const interno = document.querySelectorAll(".js-menu a[href^='#']");

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const sessao = document.querySelector(href);

  sessao.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

interno.forEach((link) => {
  link.addEventListener("click", scrollSection);
});

const seta = document.querySelector(".seta");

function mostrarSeta() {
  if (window.scrollY < 1300) {
    document.querySelector(".seta").style.display = "none";
  } else {
    document.querySelector(".seta").style.display = "block";
  }
}
window.addEventListener("scroll", mostrarSeta);

seta.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
