<template>
<div>

	<div class="detail" v-for="(item, index) in sss" :key="index">
		<div class="header">
			<p class="title">
				<span class="arrow"><span class=" arrow green"></span></span>
				<span class="return" @click="back">返回</span>团购详情</p>
		</div>
		<div class="banner">
			<img :src='item.src' alt="">
			<div class="cont">
				<h2>{{item.title}}</h2>
				<p>{{item.description}}</p>
			</div>
		</div>
		<div class="all">
			<div class="titone">
				<div class="price_all">
					<p class="price"><span>￥</span>{{item.price}}</p>
					<span class="originPrice">￥{{item.originPrice}}</span>
				</div>
				<!-- <div class="btn">立即购买</div> -->
				<router-link class="btn" tag="div" :to="'/pay/' + item.id">立即购买</router-link>

			</div>
			<div class="tittwo">	
				<li><span></span>随时可退</li>
				<li><span></span>过期自动退</li>
				
			</div>
		</div>
		<div class="store module">
			<div class="module-header">适合商户(1)</div>
			<div class="module-body">
				<div class="left">
					<p class="big">{{item.shopName}}</p>
					<p class="small">
						<span class="img">
							<i style="width: 60%;"></i>
						</span>
						<span>>100km</span>
					</p>
				</div>
				<div class="right">
					<i></i>
				</div>
			</div>
			<div class="module-footer">
				<i class="icon-comm"></i>
				<span>{{item.address}}</span>
			</div>
		</div>
		<div class="buy module">
			<div class="module-header">
				<i></i>
				团购详情
			</div>
			<div class="module-body">
				<!-- <ul>
					<li>
						<p></p>
						<p class="food">主食</p>
					</li>
					<tr>
						<th colspan='3'>主食</th>
					</tr>
					<li>{{item.togetherPrice}}</li>
				</ul> -->
				<div class="main_food">
					<span>主食</span>
				</div>
				<div class="info">
					<div class="name">
						<span>西红柿炒鸡蛋盖饭</span>
					</div>
					<div class="num">
						<span>1份</span>
						<span>13元</span>
					</div>
					<!-- <div class="num2">
					</div> -->
				</div>
				<div class="price">
						<div class="heightprice">
							<span>最高价值</span>
							<span>13元</span>
						</div>
						<div class="cheaptprice">
							<span>团购价</span>
							<span class="strong">9.9元</span>
						</div>
					</div>
			</div>
			<div class="module-footer">
				更多图文详情
				<span>(建议WiFi环境下打开，土豪请随意)</span>
				<span class="arrow">
					<span class=" arrow green"></span>
				</span>
			</div>
		</div>
		<div class="notice module">
			<div class="module-header">
				购买须知
				<i></i>
			</div>
			<div class="module-body">
				<ul>
					<li>
						<p >有效期</p>
						<p class="two">{{item.useTime}}</p>
					</li>
					<li>
						<p>除外日期</p>
						<p class="two">{{item.othertime}}</p>
					</li>
					<li>
						<p>预约提醒</p>
						<p class="two">{{item.tixing}}</p>
					</li>
					<li>
						<p>规则提醒</p>
						<p class="two">{{item.rule}}</p>
						
					</li>
					<li>
						<p>温馨提示</p>
						<p class="two" v-for="item in item.youknow" :key="item">{{item}}</p>
					</li>
					<li>
						<p >商家服务</p>
						<p class="two">停车位信息详询商户</p>
					</li>

				</ul>
			</div>
		</div>
		<div class="button">立即购买</div>
		
		<div class="agin module">
			<div class="module-header">看此团购的人也看了</div>
			<div class="module-body">
				<ul>
					<li>
						<img src="../../public/img/detail/02.jpg" height="58" width="94" alt="">
						<div class="right">
						<p>鸿禧养生休闲会馆</p>
							<span>￥ 189</span>
							<span class="two"> ￥199</span>
						</div>
					</li>
					<li>
						<img src="../../public/img/detail/0.jpg" height="58" width="94" alt="">
						<div class="right">
						<p>奇境主题养生会馆 GinSPA</p>
							<span>￥ 328</span>
							<span class="two"> ￥199</span>
						</div>
					</li>
					<li>
						<img src="../../public/img/detail/0.jpg" height="58" width="94" alt="">
						<div class="right">
						<p>卡了文娱电玩城</p>
							<span>￥ 86.8</span>
							<span class="two"> ￥199</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		






		<div class="footer">
			<p> 首页&nbsp; | 我的点评团 &nbsp; | 客户端</p>
			<p> 电脑版 &nbsp; | 大众点评网 &nbsp; | 意见反馈</p>
		</div>
	</div>
	


</div>
</template>


<style lang="scss" scoped>
	html,body{
		font-family: Helvetica;
	}
@import '../base.scss';
	.footer {
		text-align: center;
		padding: 10px 5px;
		font-weight: 400;
		font-size: 12px;
		padding-top: 15px;
		p {
			color: #adadad;
			line-height: 28px;
		}
	}
	
	.button {

		width: 100%;
		height: 40px;
		color: #fff;
		background-color: #f63;
		border-radius: 4px;
		text-align: center;
		line-height: 40px;
	}
	.detail {
		.header {
			position: relative;
			.title {
				height: 45px;
				line-height: 45px;
				background-color: #f0f0f0;
				padding: 0 10px;
				text-align: center;
				color: #333;
				font-size: 16px;
				position: relative;
				z-index: 300;
				.return {
					position: absolute;
					padding-left: 16px;
					left: 10px;
					font-size: 14px;


				}
				.arrow {
					@include arrow(10px, #646464, right);
					position: absolute;
					top: 13px;
					left: -1px;
					.green {
						display: block;
						position: absolute;
						border-right-color: #f0f0f0;
						left: -6px;
						top: -10px;


					}
					
				}
			}
		}
	.banner {
		position: relative;
		img {
			width: 100%;
			display: block;
		}
		
}
.banner .cont{
		display: flex;
		height:58px;
		position: absolute;
		z-index: 999;
		bottom: 0;
		left: 0;
		padding: 10px 15px;
		width: 100%;
		box-sizing: border-box;
		background: -webkit-gradient(linear,0 0,0 100%,from(rgba(0,0,0,0)),to(rgba(0,0,0,.6)));
		h2, p {
			color: #fff;
			font-size: 12px;
			font-weight: 400;
			line-height: 18px;
			position: absolute;
			left: 0;
			bottom: 10px;
			margin-left: 15px;
		}
		h2 {
			font-size: 16px;
			bottom: 50px;
		}
	}
}
	.all {
		position: relative;
		padding-left:15px;
		padding-top: 8px;
		background-color: #fff;
		.titone {
			display: flex;

			border-bottom: 1px solid #ccc;
			.price_all {
				flex: 1;
				.originPrice {
			
				color: #8c8c8c;
				font-size: 12px;
				position: absolute;
				left: 100px;
				top: 20px;
				text-decoration:line-through;

			}
			.price {
				font-size: 28px;
				color: #f63;
				padding-bottom: 9px;
				span {
					font-size: 21px;
					font-family: Helvetica;
					word-break: break-all;
				}
			}
			}
			.btn {
				height: 34px;
				width: 105px;
				color: #fff;
				flex: 8;
				background-color: #f63;
				border-radius: 5px;
				text-align: center;
				line-height: 35px;
				display: block;
				font-size: 16px;
				position: absolute;
				right: 10px;
				top: 8px;
			}	
		}
		.tittwo {
				height: 45px;
				line-height: 45px;
				color: #666;
				font-size: 12px;
				display: flex;
			li {
				// width: 50%;
				// float: left;
				flex: 1;
				span {
						background-image: url('/img/detail/comm.png');
						background-size: 25px auto;
						background-position: 0 -275px;
						display: inline-block;
						height: 18px;
						width: 18px;
						vertical-align: sub;
						margin-right: 5px;
						display: inline-block;
						width: 18px;
						height: 18px;
						margin-left: 5px;
				}
			}
		}	
	}
	.store {

		.module-footer {
			padding: 14px 0;
			line-height: 14px;
			font-size: 14px;
			color: #333;
		}
		.module-body {
			color: #999;
			display: flex;
			border-bottom:1px solid #DCDCDC;

			.left {
				flex: 4;
				margin: 10px 0px;
				border-right: 1px solid #ccc;

				.big {
					font-weight: 700;
					font-size: 18px;
					font-family: Helvetica;
					// margin: 10px 0px;
				}
				.small {
					position: relative;
					.img {
						background: url('/img/detail/detail-star0.png') no-repeat;
						display: inline-block;
						height: 16px;
						width:86px;
						overflow: hidden;
						background-size: auto 100%;
						margin-right:170px;
						i{
							width: 86px;
							height: 16px;
							background: url('/img/detail/detail-star.png') no-repeat;
							display: inline-block;
							height: 16px;
							overflow: hidden;
							
							background-size: auto 100%;

						}
					}
					span{
						display: block;
						font-size: 14px;
						margin-top: 15px;
						line-height: 14px;
					}

				}
			}
			.right {
				flex: 1;
				position:relative;
				i{
					width: 25px;
					height: 25px;
					margin-left: 0;
					background: url('/img/detail/mobile.png') no-repeat;
					background-size: 25px auto;
					// background-position: center 0;
					display: block;
					position:absolute;
					top:50%;
					left:50%;
					margin-top:-12.5px;
					margin-left:-12.5px;
					}
			}
		}
	}
	.module {

		margin-top: 10px;
		background-color: #fff;
		.module-header {
			font-family: Helvetica;
			color: #333;
			height: 40px;
			line-height: 42px;
			margin-left: 15px;
			font-weight: 400;
			font-size: 14px;
			border-bottom: 1px solid #ccc;
			i{
				background: url('/img/detail/icon-comm.png') center 0 no-repeat;
				background-size: 14px auto;
				display: inline-block;
				width: 14px;
				position: relative;
				top: 2px;
				height: 14px;
				background-position: 0 -38px;
			}

		}
		.module-body {
			padding-left: 15px;
			color: #666;
			line-height: 20px;
			font-size: 14px;
			margin: 7px 0;
		}
		.module-footer {
			padding-left: 15px;
			padding-right: 15px;
			font-size: 14px;
			color: #333;
			font-family: Helvetica;
					.icon-comm {
						background: url('/img/detail/icon-comm.png') center 0 no-repeat;
						background-size: 14px auto;
						display: inline-block;
						width: 14px;
						position: relative;
						background-position: 0 -58px;
						margin-right: 3px;
						top: 2px;
						height: 14px;
					}
		}
	}
	.buy {
		.module-body {
			.main_food{
				width:100%;
				height:42px;
				border-bottom:1px solid #DCDCDC;
				text-align:center;
				position:relative;
				color: #999;
				span{
					position: absolute;
					left:50%;
					margin-left:-14px;
					top:40%;
				}
			}
			.info{
				display:flex;
				border-bottom:1px solid #DCDCDC;
				position:relative;
				.name{
					flex:1;
					color: #333;
					font-size: 14px;
					position:relative;
					height:42px;
					color: #333;
					font-size: 14px;
					line-height: 42px;
					font-family: Helvetica;
					font-weight: 700;

				}
				.num{
					flex:1;
					float:right;
					text-align:center;
					line-height: 42px;
					position:absolute;
					right:20px;

					span{
						line-height: 42px;
                        margin-left:10px;
					}

				}
			}
			.price{
				// width:401px;
				height:65px;
				border-bottom:1px solid #DCDCDC;
				padding:10px 0px;
				position:relative;
				.heightprice{
				position:absolute;
				right:10px;
				font-weight: 700;
				font-size: 14px;
				color: #999;
				text-decoration: line-through;
				span{
				margin-right:8px;
				}
				}
				.cheaptprice{
					position:absolute;
					right:10px;
					font-weight: 700;
					top:35px;
					color: #f63;
					display: inline-block;
				.strong{
				padding-left:10px;
				font-size: 18px;
				}
				}
			}
		}
		.module-footer {
			font-size: 14px;
			color: #333;
			position:relative;
			padding-top: 10px;
			padding-bottom: 15px;
			span {
				font-size: 10px;
				color: #999;
			}
			.arrow {
					@include arrow(10px, #DCDCDC,left);
					position: absolute;
					top: 11px;
					right: 1px;
					.green {
						display: block;
						position: absolute;
						border-left-color:white;
						left: -11px;
						top: -10px;


					}
					
				}
		}
	}
	.sera {
		color: #666;
	}
	.detail .notice {
		.module-header i{
			background: url(/img/detail/icon-comm.png) center 0 no-repeat;
			background-size: 14px auto;
			display: inline-block;
			width: 14px;
			position: relative;
			top: 2px;
			height: 14px;
			background-position: 0 -19px;
		}
		.module-body {
			ul {
				li {
					padding: 5px 0 5px 0;
					border-bottom: 1px solid #ccc;
					p {
						line-height: 28px;
						font-size: 13px;
						color: #999;
					}
					.food{
						margin-left:100px;
					}
					.two {
						color: #666;
						margin-top: 7px;
						position: relative;
						margin-right: 5px;
						&::before {
							// content: "? ";
							content: "• ";
							color: #999;
							position: absolute;
							left: -11px;
							margin-top: 2px;
							// top: 10px;
						}
						
					}
					.two:before{
						content: "• ";
						color: #999;
					}
				}
			}
		}
	}
	.agin {
		.module-body {
			ul {
				
				li {
					padding-top: 10px;
					display: flex;
					border-bottom: 1px solid #ccc;
					padding-bottom: 10px;
					img {
						flex: 1;
						margin-right: 5px;
					}
					.right {
						flex: 3;
						margin-left: 5px;
						p {
							font-size: 14px;
							color: #333;
							background: #fff;
							height: 30px;
							line-height: 30px;
						}
						span {
							margin-left: -5px;
							font-size: 18px;
							color: #f63;
							
						}
						.two{
							font-size: 12px;
							margin-left: 5px;
							color: #666;
							text-decoration:line-through;
							
							}
					}
				}
			}

		}
	}
</style>


<script>
	import Like from "./Like.vue";
	export default {
		data() {
			return {
				data: [],
				id: "",
				sss: [],


			}
		},
		components: {
			Like
		},
		watch: {
			$route() {
				this.dataUpdate();
			}
		},
		
		methods: {
			dataUpdate() {
			
					this.id = this.$route.params.shopId;
					this.$http.get('/data/detail.json', {
							params: {
								id: this.$route.params.shopId
							}
						})
						.then(({data}) =>{

							this.data = data.detail;
							var me = this;							
							var sss = this.data.filter(function(value) {
	
								return value.shopId == me.id;

							});
							this.sss = sss;

						})

					
			},
			back() {
				history.go(-1)
			}
		},
	
		
		created() {
		// 更新数据
			this.dataUpdate();
		




	}
}

</script>
