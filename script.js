// Anti-bot Detection
function isBot() {
  return (
    navigator.webdriver || // Headless browser
    /HeadlessChrome/.test(navigator.userAgent) ||
    !navigator.plugins.length || // No plugins (likely bot)
    !window.outerWidth || // No outerWidth (likely bot)
    /PhantomJS|SlimerJS|Trident|puppeteer|Selenium/i.test(navigator.userAgent) // Bot keywords
  );
}

if (isBot()) {
  window.location.replace("https://google.com");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);

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

    // Send click data to Google Apps Script webhook for EPC logging
    fetch("https://script.google.com/macros/s/AKfycbxVVeEUGlJSjMBveRDKOH_S5AUUDAL5SMEAT1Xgq4Vn4DIxh8pu-sFmD1Sjk97L7MX-XA/exec?" + new URLSearchParams(tokens))
      .catch(() => {});

    // Build Monetizer redirect URL
    const monetizerURL = "https://aff.monymakers.online/?" +
      "utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95" +
      "&utm_campaign=ZeroP-PH-Mainstream" +
      "&subid=" + encodeURIComponent(tokens.cid) +
      "&clickid=" + encodeURIComponent(tokens.clickid) +
      "&keyword=" + encodeURIComponent(tokens.keyword) +
      "&target=" + encodeURIComponent(tokens.target) +
      "&source=" + encodeURIComponent(tokens.source) +
      "&geo=" + encodeURIComponent(tokens.geo) +
      "&device=" + encodeURIComponent(tokens.device) +
      "&os=" + encodeURIComponent(tokens.os) +
      "&browser=" + encodeURIComponent(tokens.browser) +
      "&carrier=" + encodeURIComponent(tokens.carrier) +
      "&region=" + encodeURIComponent(tokens.region) +
      "&traffic_type=" + encodeURIComponent(tokens.traffic_type) +
      "&visit_cost=" + encodeURIComponent(tokens.visit_cost);

    console.log("Redirecting to Monetizer URL:", monetizerURL);

    setTimeout(() => {
      window.location.replace(monetizerURL);
    }, 3000);
  });
}
