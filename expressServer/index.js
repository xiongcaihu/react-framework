const express = require("express");
const path = require("path");
var request = require("superagent");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var proxy = require("http-proxy-middleware");

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.use(
  "/baseApi",
  proxy({
    target: "http://assettest.zte.com.cn/zte-erp-iasset-api",
    changeOrigin: true,
    pathRewrite: {
      "^/baseApi": ""
    }
  })
);
app.use(
  "/hrApi",
  proxy({
    target: "http://hrapi.zte.com.cn",
    changeOrigin: true,
    pathRewrite: {
      "^/hrApi": ""
    }
  })
);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port);

console.log(`express server is running in ${port}`);
