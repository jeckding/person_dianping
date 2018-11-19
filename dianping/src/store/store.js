// 引入vue 和vuex
import Vue from 'vue';
// 解构出store
import Vuex, {Store} from 'vuex';
// 安装store
Vue.use(Vuex)
// 创建store 并暴露 因为需要在main.js中注册
export default new Store({
	// 数据
	state: {},
	// 同步消息
	mutations: {}
})