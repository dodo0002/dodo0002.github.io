const loading = document.querySelector(".loading-page-container");

console.log(loading);

// 網頁載入時假載入頁延時關閉
window.addEventListener("load", function () {
  setTimeout('loading.style.display = "none"', 2100);
});
