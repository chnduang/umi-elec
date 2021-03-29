import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  devServer: {
    port: 9009
  },
  theme: {
    '@primary-color': '#69c0ff',
  },
  layout: {
    name: 'qd-electron',
    locale: true,
    logo: '',
    layout: 'side',
  },
  antd: {},
});
