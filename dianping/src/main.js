import Vue from 'vue'
// 引入路由
import router from './router/router.js';
// 引入store
import store from './store/store.js';
// 引入axios
import axios from 'axios';
// 安装axios
Vue.prototype.$http = axios;
import App from './App.vue';
// 引入mint-ui
import Mint from 'mint-ui';
// 安装mint-ui
Vue.use(Mint);
// 引入全局样式文件
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false

new Vue({
	// 注册路由
	router,
	// 注册store
	store,
	render: h => h(App)
}).$mount('#app')
