// 本文件用来配置devServer的代理，仅适用于开发模式
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');
const CUSTOM_HOST = null; // 用于指定和某个开发来联调用，填写对方主机ip
const IASSET_HOST = CUSTOM_HOST || 'xx.xx.xx';
const HR_HOST = 'xx.xx.xx';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/baseApi', {
      target: `http://${IASSET_HOST}/zte-erp-iasset-api`,
      changeOrigin: true,
      pathRewrite: {
        '^/baseApi': '',
      },
    }),
  );
  app.use(
    createProxyMiddleware('/hrApi', {
      target: `http://${HR_HOST}`,
      changeOrigin: true,
      pathRewrite: {
        '^/hrApi': '',
      },
    }),
  );
};
