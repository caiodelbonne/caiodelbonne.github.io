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

seta.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
