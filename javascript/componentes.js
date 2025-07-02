function includeHTML(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const isIndex = location.pathname.endsWith("index.html") || location.pathname === "/" || location.pathname === "/index.html";

  const headerPath = isIndex ? "paginas/header.html" : "header.html";
  const footerPath = isIndex ? "paginas/footer.html" : "footer.html";

  includeHTML("header", headerPath);
  includeHTML("footer", footerPath);
});
