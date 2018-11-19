<template>
<div>
	<div class="G_top">
		<div class="toBack" @click="toBack">
			<span class="toBack red"></span>
			<!-- <span>返回</span> -->
		</div>
		<span class="G_info">商户详情</span>
	</div>
	<div class="G_detail" v-for="(item, index) in targetList" :key="index">	
		<div class="detail_top">
			<img :src="item.defaultPic" alt="">
			<div class="topRight">
				<span>{{item.name}}</span>
				<div class="text">￥{{item.priceText}}/人</div>
				<p>{{item.matchText}}</p>
			</div>
		</div>
		<div class="serve">口味：9.0环境：9.0服务：8.8</div>
		<div class="address">天府大道被百年</div>
		<div class="tel">{{item.id}}</div>

		<div class="paiming">{{item.recommendReasonData.recommendReason}}</div>
		<!-- 推荐菜 -->
		<div class="tuijian">
			<h4>推荐菜</h4>
			{{item.dishtags}}
		</div>
	</div>
</div>
</template>
<style lang="scss">
* {
	padding: 0;
	margin: 0;
}
// 引入公共样式
@import './base.scss';
.G_top {
	position: relative;
	text-align: center;
	.toBack {
		position: absolute;
		top: 11px;
		left: 2px;
		@include arrow(10, #aaa, right);
		.red {
			position: absolute;
			top: -10px;
			left: -7px;
			border-right-color: #fff;
		}
	}
	.G_info {
		line-height: 45px;
	}
}
.detail_top {
	height: 100px;
	padding: 10px 0 15px 15px;
	display: flex;
	background-color: #efefef;
	box-sizing: border-box;
	img {
		width: 90px;
		height: 66px;
		margin-right: 10px;
	}
	.topRight {
		color: #bbb;
		font-size: 14px;
		flex: 1;
		line-height: 24px;
		.text {
		}
		span {
			font-size: 18px;
			color: #666;
		}
	}
}
.address {
	position: relative;
	padding-left: 40px;
	line-height: 54px;
	border-bottom: 1px solid #efefef;
}
.tel, .paiming, .serve {
	border-bottom: 10px solid #efefef;
	line-height: 54px;
	padding-left: 40px;
	position: relative;
}
.tel::before {
	content: '';
	display: block;
	position: absolute;
	top: 20px;
	left: 14px;
	width: 12px;
	height: 13px;
	background: url('/img/icon/icon.png') -3.5px -389.5px;
	background-size: 50px 500px;
}
.address::before {
	content: '';
	display: block;
	position: absolute;
	top: 20px;
	left: 14px;
	width: 12px;
	height: 14px;
	background: url('/img/icon/icon.png') -3.5px -333.5px;
	background-size: 50px 500px;
}
.serve {
	font-size: 13px;
	color: #bbb;
}
.paiming {
	line-height: 45px;
	font-weight: 200;
	color: #000;
}
.tuijian {
	h4 {
		font-size: 16px;
		color: 24px;
		line-height: 30px;
	}
	font-size: 14px;
	color: #666;
	line-height: 24px;
	padding: 10px;
}
</style>
<script>
export default {
	data() {
		return {
			list: [],
			id: '',
			targetList: []
		}
	},
	methods: {
		toBack() {
			history.go(-1);
		}
	},
	created() {
		this.$http.get(`/data/cate.json?id=${this.$route.params.id}`)
		// 监听
		.then(({data}) => {
			this.id = this.$route.params.id;
			this.list = data;
			var targetList = this.list.filter((value) => {
				return value.id == this.id
			})
			this.targetList = targetList;
			// console.log(this.targetList, this.id)
		})
	},
}
</script>