// Basic Anti-bot Detection
if (
  navigator.webdriver ||
  /HeadlessChrome/.test(navigator.userAgent) ||
  !navigator.plugins.length ||
  !window.outerWidth
) {
  window.location.href = "https://google.com";
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("claimBtn");

  // Collect URL parameters
  const params = new URLSearchParams(window.location.search);
  const subid = params.get("subid") || "defaultsubid";
  const clickid = params.get("clickid") || "noclickid";
  const keyword = params.get("keyword") || "nokeyword";
  const target = params.get("target") || "notarget";
  const source = params.get("source") || "nosource";
  const geo = params.get("geo") || "nogeo";
  const device = params.get("device") || "nodevice";
  const os = params.get("os") || "noos";

  // Create Monetizer URL
  const monetizerURL = "https://aff.monymakers.online/?" +
    "utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95" +
    "&utm_campaign=ZeroP-PH-Mainstream" +
    "&utm_term=" + encodeURIComponent(subid) +
    "&clickid=" + encodeURIComponent(clickid) +
    "&keyword=" + encodeURIComponent(keyword) +
    "&target=" + encodeURIComponent(target) +
    "&source=" + encodeURIComponent(source) +
    "&geo=" + encodeURIComponent(geo) +
    "&device=" + encodeURIComponent(device) +
    "&os=" + encodeURIComponent(os);

  // Log click via webhook (optional)
  function logClick() {
    fetch("https://script.google.com/macros/s/AKfycbxSDzy_RbX2D6Akr_Y5X0mtOfKi1F4ENxOtoH_b92VqSofEvLPJEJhXu0pH6EbAVPBl9g/exec?" +
      new URLSearchParams({
        subid,
        clickid,
        keyword,
        target,
        source,
        geo,
        device,
        os
      })
    ).catch(err => {
      console.error("Logging failed", err);
    });
  }

  // Button click event
  if (btn) {
    btn.addEventListener("click", function () {
      logClick();
      setTimeout(() => {
        window.location.href = monetizerURL;
      }, 300);
    });
  }

  // ⏱️ Auto-redirect fallback after 3 seconds
  setTimeout(() => {
    window.location.href = monetizerURL;
  }, 3000);
});
