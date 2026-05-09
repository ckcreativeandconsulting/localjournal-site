(function () {
  var measurementId = "G-ZTQS9F6ERB";
  var analyticsHosts = ["localjournal.app", "www.localjournal.app"];

  if (analyticsHosts.indexOf(window.location.hostname) === -1) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
  document.head.appendChild(script);
})();
