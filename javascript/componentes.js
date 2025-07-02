function includeHTML(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const isIndex = path === "/" || 
                  path.endsWith("/index.html") || 
                  path === "/GrupoC.github.io/" || 
                  path.endsWith("/GrupoC.github.io/index.html");

  const headerPath = isIndex ? "paginas/header.html" : "paginas/header.html";
  const footerPath = isIndex ? "paginas/footer.html" : "paginas/footer.html";

  includeHTML("header", headerPath);
  includeHTML("footer", footerPath);
});
