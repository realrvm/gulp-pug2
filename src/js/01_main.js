document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.createElement("h2");
  const btn = document.querySelector(".change");
  const hidden = document.querySelector("template");
  const clone = hidden.content.cloneNode(true);

  h2.textContent = "Проверка подключения js";
  document.querySelector("header").append(h2);

  btn.addEventListener("click", () => {
    document.querySelector("header").append(clone);
  });
});
