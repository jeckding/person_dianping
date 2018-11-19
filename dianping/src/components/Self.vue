<template>
	<div class="self">
		<div id="header">
			<router-link class="back" to="/home" tag="div">
				<span class="jiantou"><span class="white"></span></span>
				首页
			</router-link>
			<div class="title">
				<div :class="t1" data-name='t1' @click="choose">订单</div>
				<div :class="t2" data-name='t2' @click="choose">抵用券</div>
			</div>
			<div class="zhuxiao">注销</div>
		</div>
		<div v-show="t1">
			<div id="content">
				<ul class="nav-list">
					<li v-for="(item, index) in listItem" :key="index" @click="chooselist">{{item}}</li>
				</ul>
			</div>
			<div class='list'>
				<p>您还没有相关订单</p>
				<p>去逛逛看有哪些想买的</p>
			</div>
		</div>
	</div>
</template>

<style type="text/css" lang="scss">
	.self {
		height: 500px;
		background-color: #eee;
		overflow: hidden;
		#header {
			box-sizing: border-box;
			line-height: 48px;
			padding: 0 10px;
			background-color: #fff;
			display: flex;
			.back {
				font-size: 14px;
				box-sizing: border-box;
				width: 70px; 
				.jiantou {
					height: 0px;
					padding: 0px;
					line-height: 0px;
					font-size: 0;
					position: relative;
					top: -4px;
					left: -5px;
					border: 12px solid transparent;
					border-right-color: #666;
					.white {
						position: absolute;
						top: -12px;
						left: -10px;
						border: 12px solid transparent;
						border-right-color: #fff;
					}
				}
			}
			.title {
				margin: 9px 20px;
				font-size: 14px;
				text-align: center;
				box-sizing: border-box;
				height: 30px;
				line-height: 30px;
				flex: 1;
				width: 40%;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 4px;
				border: 1px solid #f63;
				div	{
					line-height: 30px;
					height: 30px;
					text-align: center;
					width: 50%;
					color: #f63;
				}
				.active {
					background-color: #f63;
					color: #fff;
				}
			}
			.zhuxiao {
				text-align: right;
				font-size: 14px;
				width: 70px;
			}
		}
		#content {
			.nav-list {
				background-color: #fff;
				display: flex;
				li {
					height: 46px;
					line-height: 46px;
					text-align: center;
					list-style: none;
					font-size: 13px;
					width: 25%;
					box-sizing: border-box;

				}
				.active {
					color: #f63;
					border-bottom: 2px solid #f63;
				}
			}
		}
		.list {
			color: #ccc;
			text-align: center;
			p:first-child {
				padding-top: 200px;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				listItem: ['全部订单', '待付款', '可使用', '退款/售后'],
				t1: 'active',
				t2: ''
			}
		},
		methods: {
			choose(e) {
				this.t1 = '';
				this.t2 = '';
				this[e.target.dataset.name] = 'active';
			},
			chooselist() {

			}
		},
		mounted() {
			var self = document.getElementsByClassName("self")
			self[0].style.height = window.innerHeight + "px";
		},
		motheds: {
		}
	}
</script>