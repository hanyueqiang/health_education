
// ref: https://umijs.org/config/
import { resolve } from "path";
export default {
  treeShaking: true,
  hash: true, // 生成hash文件名
  targets: { ie: 11 },
  theme: {
    "primary-color": "#1ECBB0",
  },
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '健康宣教',
      dll: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    '@components': resolve(__dirname, "./src/components"),
    '@utils': resolve(__dirname, "./src/utils"),
  },
  proxy: {
    "/api": {
      target: "",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
}
