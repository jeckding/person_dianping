// 引入路由和vue
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import Home from '../components/Home.vue';
import G_list from '../components/G_list.vue';
import G_detail from '../components/G_detail.vue';
import Like from '../components/Like.vue';
import Pay from '../components/Pay.vue';
import Item from '../components/Item.vue'; 
import Detail from '../components/Detail.vue';
import List from '../components/List.vue'; 
import Comment from '../components/Comment.vue'
import Advertisement from '../components/Advertisement.vue'

// 引入Place组件
import Place from '../components/Place.vue';
import Detailad from '../components/Detailad.vue';

// 引入Self组件
import Self from '../components/Self.vue';
// 第一步 安装路由
Vue.use(VueRouter);
// 第三步 定义组件

// 第四步 定义规则
var routes = [
	{path: '/G_list/:id', component: G_list},
	{path: '/G_detail/:id', component: G_detail},
	{path: '/place', component: Place},
	{path: '/self', component: Self},
	{path: '*', component: Home},
	{ path: '/Pay/:shopId', component: Pay },
	{ path: '/Item/:shopId', component: Item },
	{ path: '/Detailad/:id', component: Detailad },
	{ path: '/Like/:shopId', component: Like },
	{ path: '/List/:shopId', component: List },
	{ path: '/Detail/:shopId', component: Detail },
	{ path:'/comment/:id',component: Comment },
    { path:'/advertisement/',component: Advertisement },
]
// 第五步 实例化路由 并返回
export default new VueRouter({routes})
