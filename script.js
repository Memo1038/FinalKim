// Basic Anti-bot Detection
if (
  navigator.webdriver ||
  /HeadlessChrome/.test(navigator.userAgent) ||
  !navigator.plugins.length ||
  !window.outerWidth
) {
  window.location.replace("https://google.com");
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("claimBtn");
  const params = new URLSearchParams(window.location.search);

  // Zeropark tokens
  const tokens = {
    subid: params.get("subid") || "defaultsubid",
    clickid: params.get("clickid") || "noclickid",
    keyword: params.get("keyword") || "nokeyword",
    target: params.get("target") || "notarget",
    source: params.get("source") || "nosource",
    geo: params.get("geo") || "nogeo",
    device: params.get("device") || "nodevice",
    os: params.get("os") || "noos",
    browser: params.get("browser") || "nobrowser",
    carrier: params.get("carrier") || "nocarrier",
    cid: params.get("cid") || "nocid",
    region: params.get("region") || "noregion",
    traffic_type: params.get("traffic_type") || "notraffictype",
    visit_cost: params.get("visit_cost") || "novisitcost"
  };

  // Full Monetizer Smartlink with all tokens
  const monetizerURL = "https://aff.monymakers.online/?" +
    "utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95" +
    "&utm_campaign=ZeroP-PH-Mainstream" +
    "&utm_term=" + encodeURIComponent(tokens.subid) +
    "&clickid=" + encodeURIComponent(tokens.clickid) +
    "&keyword=" + encodeURIComponent(tokens.keyword) +
    "&target=" + encodeURIComponent(tokens.target) +
    "&source=" + encodeURIComponent(tokens.source) +
    "&geo=" + encodeURIComponent(tokens.geo) +
    "&device=" + encodeURIComponent(tokens.device) +
    "&os=" + encodeURIComponent(tokens.os) +
    "&browser=" + encodeURIComponent(tokens.browser) +
    "&carrier=" + encodeURIComponent(tokens.carrier) +
    "&cid=" + encodeURIComponent(tokens.cid) +
    "&region=" + encodeURIComponent(tokens.region) +
    "&traffic_type=" + encodeURIComponent(tokens.traffic_type) +
    "&visit_cost=" + encodeURIComponent(tokens.visit_cost);

  // Optional: log click to Google Sheet or tracker
  /*
  fetch("https://your-logging-url/?" + new URLSearchParams(tokens))
    .catch(() => {});
  */

  // Auto redirect after 3 seconds
  setTimeout(() => {
    window.location.replace(monetizerURL);
  }, 3000);

  // Button click redirect
  if (btn) {
    btn.addEventListener("click", function () {
      window.location.replace(monetizerURL);
    });
  }
});
