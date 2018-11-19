<template>
	<div>
		<!-- div.header>div.returndiv.title+ -->
		<div class="header">
			<p class="title">
				<span class="arrow"><span class=" arrow green"></span></span>
				<span class="return" @click="back">返回</span>提交订单</p>
		</div>
		<p>唱吧麦颂KTV周一至周日全时段3/2/6小时欢唱  </p>
		<div class="count">
			<div class="count1">
				<span>数量</span>
				<div>
					<span @click="reduce">-</span>
					<input class="num" v-model="msg"/>
					<span @click="add">+</span>
				</div>
			</div>
			<div class="count2">
				<span>小计</span>
				<p>￥{{msgtwo}}</p>
			
		</div>
		</div>
		<div class="blank"></div>
		<div class="discount">现金券/抵用码/优惠码<span class="arrow"></span></div>
		<div class="denglu"><span>立即登录</span></div>
		
		<div class="input">
			<div class="input_one">
			<span>86</span><input placeholder="请输入手机号" type="text"><span class="send">发送验证码</span>
		</div>
		
		<div class="input_two">
			<span>验证码</span><input type="text" placeholder="请输入验证码" class="input_two">
		</div>
		</div>
		<div class="difficult">
			<span>支持随时退</span>
			<span>支持过期退</span>
		</div>
		<div class="button">提交订单</div>
	</div>
</template>
<style lang="scss" scoped>
	html,body{
		font-family: Helvetica;
	}
@import '../base.scss';
	.header {
			position: relative;
			.title {
				background-color: #fff;
				height: 45px;
				line-height: 45px;
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
					color: #878787;


				}
				.arrow {
					@include arrow(10px, #f63, right);
					position: absolute;
					top: 13px;
					left: -1px;
					.green {
						display: block;
						position: absolute;
						border-right-color: #fff;
						left: -6px;
						top: -10px;


					}
					
				}
			}
		}
	p {
		padding: 10px 29px 10px 15px;
		font-size: 14px;
		color: #999;
		position: relative;
		font-weight: 400;
	}
	.count {
		background-color: #fff;
		padding: 10px 5px 10px 15px;
		font-size: 16px;
		color: #999;
		position: relative;
		font-weight: 400;
		.count1 {
			padding: 10px 16px 10px 0;
			display: flex;
			span {
				flex: 3;
			}
			div {
				span {
					border: 1px solid #ccc;
					flex: 2;
					margin-left: 5px;
					box-sizing: border-box;
					text-align: center;
					display: inline-block;
					width: 30px;
					border-radius: 2px;
					padding: 5px 0 5px;
				}
				.num {
					width: 42px;
					border: 1px solid #bbb;
					color: #333;
					font-size: 15px;
					line-height: 20px;
					text-align: center;
					padding: 5px 15px;
				}
			}
		}
		.count2 {
			border-top: 1px solid #ccc;
			padding: 10px 16px 0 0;
			// just-content: center;
			// line-height: 40px;
			display: flex;

			span {
				flex: 5;
			}
		}
	}
	.discount {
		margin-top: 10px;
		padding-left: 15px;
		padding-right: 15px;
		height: 45px;
		line-height: 45px;
		background-color: #fff;
		color: #999;
	}
	.denglu {
		padding: 10px 29px 10px 15px;
		font-size: 14px;
		color: #999;
		position: relative;
		font-weight: 400;
		margin-top: 15px;
		span  {
			color: #38b;
			margin-left: 5px;
		}
	}
	.input{
		padding-left: 15px;
		font-size: 14px;
		background-color: #fff;
		.input_one {
			display: flex;
			border-bottom: 1px solid #ccc;
			padding: 10px;
			
			span {
				flex: 1;
				border-right: 1px solid #e0e0e0;
				height: 22px;
				line-height: 22px;
				color: #333;
				font-size: 16px;
			}
			input {
				flex: 3;
				border: none;
				width: 58px;
				padding-left: 8px;
				font-size: 15px;

			}
			.send {
				flex:2;
				border-radius: 2px;
				border: 1px solid #ccc;
				padding: 2px;
				font-size: 14px;
				text-align: center;
				line-height: 22px;
				height: 22px;
			}
		}
		.input_two {
			display: flex;
			border-bottom: 1px solid #ccc;
			
			span {
				flex: 1;
				height: 22px;
				line-height: 22px;
				color: #333;
				padding: 10px;
			}
			input {
				flex: 5;
				border: none;
				width: 58px;
				// padding-left: 8px;
				font-size: 15px;

			}
			
		}
		
		
	}
	.difficult {
		font-size: 12px;
		color: #65c07a;
		margin: 15px 0 15px 15px;
	}
	.button{
		margin: 15px 1em;
		font-family: inherit;
		text-align: center;
		box-sizing: border-box;
		padding: 0 5px;
		border: 0;
		background-color: #f63;
		color: #fff;
		border-radius: 2px;
		padding: 10px;
	}

</style>
<script>
		export default {
			data() {
				return {
					num: '1',
					price: 30,
					msg: '1',
					
					msgtwo: '30',

				}
			},
	methods: {
		back() {
			history.go(-1)

		},
		add() {
			
			this.msg++;
			this.num++;
			console.log(this.num);
			this.msgtwo = this.num * 30;
			// if(this.msg = "0") {
			// 	return 0;
			// }

		},
		reduce() {
			this.msg--;
			this.num--;
			console.log(this.num);
			this.msgtwo = this.num * 30;
		}
	}
}
</script>