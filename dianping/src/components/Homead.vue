<template>
	<!-- 超值特惠模块 -->
	<div class="favourable">
		<div class="top-area">
			<div class="title"></div>
			<div class="more" @click="gomore">更多优惠</div>
			<div class="gomore">
				<span class="arrow">
					<span class="arrow green"></span>
				</span>
			</div>
		</div>
		<ul class="home-ad">
			<router-link v-for="(item,index) in ad" :key="index" :to="'/detail/'+item.shopId" tag="li">
				<img :src="'/img/ad/' + item.url" alt="">
				<div class="small_title">{{item.title}}</div>
				<div class="price">
					<span class="now_price">{{item.price}}</span>
					<span class="old_price">{{item.originPrice}}</span>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
		// 引入样式
		@import '../base.scss';
		*{
		margin: 0;
		padding: 0;
		list-style: none;
		}
		html,body{
		background-color: #ccc;
		}
		.favourable{
		background-color: #fff;
		padding: 7px 10px 10px;
		height:193px;

		}
		.top-area{
		display: flex;
		padding:10px;
		position:relative;


		}
		.top-area .title{
		height: 30px;
		width: 75px;
		background-size: 200px;
		background-repeat: no-repeat;
		background-position: 0 -29px;
		background-image: url('/img/ad/ad.png')
		}
		.top-area .more{
		position:absolute;
		right:26px;
		color: #bbb;
		font-family: Hiragino Sans GB, Arial,Helvetica, "宋体", sans-serif;
		text-align: center;
		line-height: 30px;
		font-size: 13px;
		}
		.top-area .gomore{
		position:absolute;
		right:0;
		.arrow {

		@include arrow(10px, #ccc, left);
		position: relative;
		top: 0px;
		right: 0px;
		.green {
		position: absolute;
		top: -10px;
		right: -7px;
		border-left-color: #fff;
		}
		}
		}
		.home-ad {
		display: flex;
		width:100%;
		background: #fff;
		li {
		flex: 1;
		width:100%;
		margin-left:8px;
		&:first-child {
		margin-left:0;
		}
		}
		img {
		height:94px;
		width: 100%;
		}
		}	

		.home-ad .small_title{
		font-size: 14px;
		color: #333;
		font-size: 14px;
		padding-top: 3px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-family: Hiragino Sans GB, Arial,Helvetica, "宋体", sans-serif;
		}
		.home-ad .price{

		}
		.home-ad .price .now_price{
		color: #f63;
		font-size: 20px;

		}
		.home-ad .price .now_price::before{
		content: '\A5';
		font-size: 14px;
		}
		.home-ad .price .old_price{
		color: #999;
		font-size:12px;
		text-decoration: line-through;
		}
		.home-ad .price .old_price::before{
		content: '\A5';
		font-size: 14px;
		}
</style>
<script type="text/javascript">
	export default {
		data(){
			return{
				// 预定义数据
				ad:[],
				list:[],
				id:''
			}
		},
		// 定义方法
		methods:{
			gomore() {
				this.$router.push('/list/'+1);
			}
		},
		// 组件创建完成发送数据请求
		created(){
			// 请求数据
			this.$http
			.get("/data/homead.json")
			.then(({data})=>{
				this.ad=data.ad;
				console.log(this.ad,0)
				this.list=data.list;
				
			})
		}
	}
</script>