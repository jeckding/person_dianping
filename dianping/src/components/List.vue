<template>
	<div class="box">
		<!-- 全部分类 全部商区部分 -->
		<ul class="orders">
			<li v-for="(item,index) in orders" :key="index">
				<span class="title">{{item.text}}</span>
				<span class="arrow">

				</span>
			</li>
		</ul>
		<Item></Item>	
		<div class="aside">
			<h4>老冷削面馆</h4>
			<h5>低至7.6折西红柿炒鸡蛋盖饭1份</h5>
			<div class="footer">
				<div class="price">
					<span class="now_price">&nbsp;9.9</span>
					<span class="old_price">13</span>
					<span class="num">已售2</span>
				</div>
			</div>
		</div>
		<div class="gift">
			
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	html,body{
		background-color:#F5F5F5;
		font-family: Hiragino Sans GB,Arial,Helvetica,"宋体",sans-serif;
	}
	.box{
		background-color: #fff;
		box-sizing: border-box;
		position:relative;
	}
	@import '../base.scss';
	.orders {
		box-sizing: border-box;
		display: flex;
		text-align: center;
		background: #fff;
		li {
			box-sizing: border-box;
			flex: 1;
			text-align:center;
			font-family: Hiragino Sans GB,Arial,Helvetica,"宋体",sans-serif;
			border-bottom: 1px solid #F5F5F5;
			border-right: 1px solid #F5F5F5;
			height: 40px;
			line-height: 40px;
			&:last-child {
				border-right: none;
			}
		}
		.title {
			font-size: 13px;
			color: #646464;
		}
		.arrow {
				display: inline-block;
				width: 13px;
				height: 7px;
				background: url("/img/list/pull-down.png") no-repeat -66px -57px;;
				background-size: 91px auto;
				margin-left: 10px;
			}
	}
	.food{
		box-sizing: border-box;
		// display:flex;
		height:100%;
		background-color: #fff;
		padding: 10px 10px 10px 0px;
		margin-left: 10px;
	}
	.food .img {
				position: relative;
				height: 82px;
				display:flex;
				overflow: hidden;
				margin-right: 10px;
	}
	.food .img .tag{
				position:absolute;
				width: 44px;
				height: 18px;
				font-size: 10px;
				line-height: 18px;
				color: #FFF;
				margin-top:5px;
				padding-left: 3px;
				vertical-align: middle;
				background:url("/img/list/tag.png") no-repeat;
				background-size: 44px auto;
				font-family: Hiragino Sans GB,Arial,Helvetica,"宋体",sans-serif;
	}
	.food .img  img{
			width: 110px;
			height: 82px;
		
	}
	.box .aside{
		position:absolute;
		top:50px;
		right:116px;

	}
	.box .aside h4{
		font-size: 16px;
		line-height: 18px;
		color: #333;
		overflow: hidden;
		margin-top: 3px;
		font-weight: 400;
	}
	.box .aside h5{
		line-height: 15px;
		overflow: hidden;
		font-weight: 400;
		color: #666;
		font-size: 12px;
		margin-top: 5px;
		margin-bottom: 4px;
			}
			.box .aside .footer .price .now_price{
			color: #f63;
			font-size: 20px;
			}
			.box .aside .footer .now_price::before{
			content: '\A5';
			font-size: 14px;
			}
			.box .aside .footer .price{
			position:relative;
			}
			.box .aside .footer .price .old_price{
			margin-left:5px;		
			color: #999;
			font-size:12px;
			text-decoration: line-through;
			}
			.box .aside .footer .price .old_price::before{
			content: '\A5';
			font-size: 14px;
			}
			.box .aside .footer .price .num{
			position:absolute;
			right:-105px;
			font-size: 12px;
			font-family: Hiragino Sans GB,Arial,Helvetica,"\5B8B\4F53",sans-serif;
			top:5px;
			color: #999;
			}
			.gift{
			background:url('/img/list/gift.png') #ff6e3d no-repeat center center;
			background-size: 33px;
			width: 60px;
			height: 60px;
			border-radius: 30px;
			position: fixed;
			bottom: 120px;
			right: 10px;
			box-shadow: 0 0 2px #ff6e3d;
			display: block;
	}
</style>
<script type="text/javascript">
	// 引入组件
	import 	Item from "./Item.vue";
	// 组件
	export default{
		// 注册组件
	components: { Item },
		data(){
			return{
				// 排序按钮
				orders: [
					{ text: '全部分类', id: 'classify' },
					{ text: '全部商区', id: 'bussiness' },
				],
				list: [],
				// 备份数据
				others: []
				}
		},
		// 定义方法
		methods:{
			godetail(){
				this.$router.push('/detailad/'+1);
			}
		},
		// 请求数据
		created(){
			// 发送数据
			this.$http
			.get("/data/list.json")
			// 监听
			.then(({data})=>{
				// console.log(data)
				this.list=data;
				console.log(this.list)
			})
		}
	}
</script>