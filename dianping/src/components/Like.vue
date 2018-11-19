<template>
	<router-link class="item" tag="div" :to="'/detail/' + this.data.shopId">
		<div @click="searchId" class="all">
			<img :src='data.defaultPic' alt="">
			<div class="tag">免预约</div>
			<div class="content">
				<p class="shopName">{{data.shopName}}</p>
				<p class="dealGroupTitle">{{data.dealGroupTitle}}</p>
				
				<p><span class="dealgroupPrice"><span class="doller">￥</span>{{data.dealgroupPrice}}</span><span class="marketPrice">￥{{data.marketPrice}}<span class="tgcurrentjoin">已售{{data.tgcurrentjoin}}</span></span></p>
				
			</div>
		</div>
		<!-- <div class="more" @click="showOthers">查看更多</div> -->

	</router-link>
</template>



<style text="text/css" lang="scss" scoped>
	@import '../base.scss';
	.more {
		font-size: 15px;
		height: 45px;
		line-height: 45px;
		color: #333;
		background-color: #fff;
		text-align: center;

	}
	.all {
		font-family: Hiragino Sans GB, Arial,Helvetica, "宋体", sans-serif;
		display: flex;
		padding: 11px 10px 11px 15px;
		border-bottom: 1px solid #ccc;
		&:last-child {
			border-bottom: none;
		}
		img {
			width: 90px;
			height: 90px;
			padding-right: 10px;
			position: relative;
		}
		.tag {
			position: absolute;
			color: #e5bf86;
			padding: 3px 7px;
			font-size: 12px;
			font-weight: 700;
			background-color: #000;

		}
		.content {
			flex: 1;
			// margin-left: 15px;
			.shopName {
				font-size: 17px;
				font-weight: 550;
				color: #111;
				padding-right: 8px;
			}
			.dealGroupTitle {
				font-size: 13px;
				color: #777;
				padding-top: 9px;
				padding-bottom: 13px;
			}
			.dealgroupPrice {
				font-size: 21px;
				color: #f63;
				font-weight: 700;
				margin-right: 4px;
				.doller {
					font-size: 14px;
					margin-right: 2px;
				}

			}
			.marketPrice {
				font-size: 13px;
				color: #777;
				text-decoration:line-through;
				.tgcurrentjoin {
					font-size: 13px;
					color: #777;
					line-height: 24px;
					float: right;
					height: 24px;
					padding-top: 3px;
				}
			}

		}
	}
	
</style>


<script>	
	export default {
		props: ['data'],
		// 
		created() {
			// console.log(data.pictag.tag, 666);
			

		},
		methods: {
			searchId() {
				
				// console.log(this.data.shopId);
				
			}
			

		}
	}
</script>