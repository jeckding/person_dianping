<template>
<div style="position: relative;">
	<div class="G_header">
		<span @click="G_goBack" class="arrow"><span class="arrow red"></span></span>
		<div class="G_center"><span>商户</span><span>闪惠团购</span>
		</div>
	</div>
	<div @click="G_switch(item.id)" id="G_nav" v-for="(item, index) in list" :key="index">
		<div class="G_span">
			<span>{{item.title}}</span>
			<span class="arrow"><span class="arrow red"></span></span>
		</div>
	</div>

	<div v-if="isShow" class="G_box">
		<ul v-for="(item, index) in this.list[2].content" :key="index">
			<li @click="sort(item)">{{item}}</li>
		</ul>
	</div>

	<ul class="list-item">
		<router-link class="item" v-for="(item, index) in cate" :key="index" :to="'/G_detail/'+ item.id
" tag='li'>
			<img :src="item.defaultPic" alt="">
			<div class="rigth">
				<span style="font-size: 16px; color: #666">{{item.name}}</span>
				<div style="font-size: 14px; color: #333; line-height: 24px" class="prices">￥{{item.priceText}}/人</div>
				<div style="font-size: 14px; color: #666">{{item.matchText}}</div>
			</div>
		</router-link>
	</ul>
</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{title: '全部商区', id: 'whole'},
				{title: '美食', id: 'meishi'},
				{
					title: '智能排序',
					id: 'sort',
					content: ['智能排序','低价优先', '高价优先', '距离优先', '人气优先', '好评优先', '口味最佳', '环境最佳', '服务最佳' ]
				}
			],
			cate: [],
			isShow: false,
			demo: 'dfgh'
		}
	},
	methods: {
		G_switch(id) {
			// console.log(id);
			if (id == "sort") {
				this.isShow = !this.isShow;
				// 改变箭头方向
				// 获取元素
				// var arrow = document.getElementsByTagName('arrow');
				// console.log(arrow);
			}
			return;
		},
		sort(item) {
			this.isShow = !this.isShow;
			// 获取数据
			// console.log(item);
			if (item == '低价优先') {
				this.cate.sort((a, b) => {
					return a['priceText'] - b['priceText'];
				})
			}else if (item == '高价优先') {
				this.cate.sort((a, b) => {
					return b['priceText'] - a['priceText'];
				})
			}
			return;
		},
		G_goBack() {
			history.go(-1);
		}
	},
	created() {
		// 请求数据
		this.$http.get('/data/cate.json')
		// console.log(this);
		// 监听请求
		.then(({data}) =>{
			data.forEach(function(value, index) {
				value['imgId'] = index;
			});
			//将请求回来的数据存储
			this.cate = data;
		})
	}
}
</script>

<style lang="scss">
@import './base.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	padding: 0;
	// background-color: green;
}
.G_header {
	position: relative;
	padding-top: 8px;
	text-align: center;
	height: 40px;
	background-color: #efefef;
	.arrow {
		@include arrow(10, #f63, right);
		position: absolute;
		top: 15px;
		left: 5px;
		.red {
			position: absolute;
			top: -10px;
			left: -7px;
			border-right-color: #efefef;
		}
	}
	.G_center {
		border-radius: 5px;
		margin: 0 auto;
		width: 160px;
		height: 80%;
		border: 1px solid #f63;
		display: flex;
		// justify-content: center;
		line-height: 32px;
		align-items: center;
		span {
			display: inline-block;
			height: 100%;
			flex: 1;
			&:first-child {
				background-color: #f63;
			}
		}
	}
}
#G_nav {
	position: relative;
	.G_span {
		float: left;
		width: 33%;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
		text-align: center;
		color: #666;
		font-size: 15px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;

		span {
			display: inline-block;;
		}
		.arrow {
			position: relative;
			top: 8px;
			left: -2px;
			@include arrow(8, #ccc, top);
			.red {
				position: absolute;
				top: -11px;
				left: -8px;
				border-top-color: #fff;
			}
		}
	}
}
.G_box {
	position: absolute;
	top: 88px;
	left: 0;
	background-color: #efefef;
	overflow: auto;
	width: 100%;
	line-height: 24px;
	height: 250px;
	font-size: 14px;
	color: #666;
	border-bottom: 1px solid #efefef;
	ul {
		border-bottom: 1px solid #ccc;
		li {
			padding-left: 20px;
			line-height: 40px;
		}
		&:last-child {
			border-bottom: none;
		}
		&:first-child {
			color: #f63;
			border-bottom:1px solid #f60;
		}
	}
}

.list-item {
	.item {
		width: 100%;
		display: flex;
		padding: 10px 10px;
		border-bottom: 1px solid #efefef;
		img {
			display: inline-block;
			width: 66px;
			height: 66px;
			margin-right: 10px;
		}
		.right {
			flex: 1;
			span {
				font-weight: 500;
				font-size: 18px;
				color: red;
			}
		}
	}
}
</style>