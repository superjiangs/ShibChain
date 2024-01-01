
// https://umijs.org/config/
import { defineConfig } from 'umi';
export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  manifest: {
    basePath:'/',
  },
  theme: require('./theme.js'),
});
