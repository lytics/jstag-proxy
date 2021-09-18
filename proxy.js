// require("https").globalAgent.options.ca = require("ssl-root-cas").create();

const httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "https://c.lytics.io",
    secure: true,
    changeOrigin: true,
  })
  .listen(8080); // See (†)
