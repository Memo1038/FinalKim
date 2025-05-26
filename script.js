
// Anti-bot detection
if (
  navigator.webdriver ||
  /HeadlessChrome/.test(navigator.userAgent) ||
  !navigator.plugins.length ||
  !window.outerWidth
) {
  window.location.href = "https://google.com";
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("claimBtn");
  const params = new URLSearchParams(window.location.search);
  const subid = params.get("subid") || "defaultsubid";
  const clickid = params.get("clickid") || "noclickid";
  const keyword = params.get("keyword") || "nokeyword";

  // Log click (optional - use your webhook or logging endpoint if needed)
  fetch("https://script.google.com/macros/s/AKfycbxSDzy_RbX2D6Akr_Y5X0mtOfKi1F4ENxOtoH_b92VqSofEvLPJEJhXu0pH6EbAVPBl9g/exec?" +
    new URLSearchParams({
      subid: subid,
      clickid: clickid,
      keyword: keyword
    })
  );

  // Redirect to Monetizer
  const monetizerURL = "https://aff.monymakers.online/?utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95&utm_campaign=ZeroP-PH-Mainstream&utm_term=" + encodeURIComponent(subid);
  btn.addEventListener("click", function () {
    window.location.href = monetizerURL;
  });
});
