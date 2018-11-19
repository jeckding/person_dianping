<template>
	<div class="search">
		<div class="inner">
			<router-link class="left" @click="choosePlace" tag="div" to="/place">
				<span class="place">北京</span><span class="jiantou"><span class="orange"></span></span>
			</router-link>
			<router-link class="mid" tag="div" to="/search">
				<input type="text" placeholder="输入商户名、地点">
			</router-link>
			<router-link class="right" tag="div" to="/self">
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			choosePlace() {

			}
		}
	}
</script>
<style type="text/css" lang="scss">
.search {
	height: 50px;
	width: 100%;
	background-color: #f63;
	.inner {
		height: 50px;
		line-height: 50px;
		padding: 0 10px;	
		display: flex;
		.place {
			font-size: 14px
		}
		.mid {
			flex: 1;
			input {
				outline: none;
				width: 90%;
				height: 30px;
				border-radius: 15px;
				font-size: 14px;
				padding-left: 15px;
				border: none;
				color: #666;
			}

		}
		.left {
			width: 55px;
			color: #fff;
			font-size: 12px;
			.jiantou {
				margin: 0;
				padding: 0;
				border: 8px solid transparent;
				border-top: 8px solid #fff;
				position: relative;
				top: 13px;
				right: -1px;
				.orange {
					margin: 0;
					padding: 0;
					border: 8px solid transparent;
					border-top: 8px solid #f63;
					position: absolute;
					top: -10px;
					right: -8px;
				}
			}
		}
	}
}
.right {
	height: 22px;
	width: 22px;
	border: 1px solid #fff;
	border-radius: 17px;
	position: relative;
	top: 13px;
	overflow: hidden;
}
.right:before {
	content: '';
	border: 1px solid #fff;
	position: absolute;
	right: 6px;
	top: 4px;
	display: block;
	content: '';
	width: 8px;
	height: 8px;
	border-radius: 5px;
}
.right:after {
	content: '';
	border: 1px solid #fff;
	position: absolute;
	right: 2px;
	top: 13px;
	display: block;
	content: '';
	width: 16px;
	height: 16px;
	border-radius: 10px;
}
</style>