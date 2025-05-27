// Improved Anti-bot Detection
function isBot() {
  return (
    navigator.webdriver || // Headless browser
    /HeadlessChrome/.test(navigator.userAgent) ||
    !navigator.plugins.length || // No plugins (likely bot)
    !window.outerWidth || // No outerWidth (likely bot)
    /PhantomJS|SlimerJS|Trident|puppeteer|Selenium/i.test(navigator.userAgent) // Common bot user agent keywords
  );
}

if (isBot()) {
  // Redirect bots away immediately
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
    fetch("https://script.google.com/macros/s/YOUR-GOOGLE-APPS-SCRIPT-ID/exec?" + new URLSearchParams(tokens))
      .catch(() => {}); // Ignore any fetch errors silently

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

    console.log("Redirecting to Monetizer URL:", monetizerURL);

    // Redirect after 3 seconds (to allow logging and user to see page briefly)
    setTimeout(() => {
      window.location.replace(monetizerURL);
    }, 3000);
  });
}
