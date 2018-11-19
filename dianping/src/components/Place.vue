<template>
	<div id="place">
		<div class="header">
			<span @click="back" class="jiantou"><span class="white"></span></span>
			<div class="title">
				<div class="title_1">
					<span :class="t1" data-name="t1" @click="choose">国内</span><span :class="t2" data-name="t2" @click="choose">国际/港澳台</span>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="search">
				<div id="search">
					输入城市名或拼音查询
				</div>
			</div>
			<div class="dingwei">无法获取您的定位</div>
			<div v-show="t1">
				<div class="title">热门城市</div>
				<ul class="hotList">
					<li v-for="(item, index) in hotcity" :key="index">{{item.cityName}}</li>
				</ul>
				<div class="title">城市列表</div>
				<ul class=cityList_char>
					<li v-for="(item, index) in cityList" :key="index"><a :href="'#' + item.firstChar">{{item.firstChar}}</a></li>
					
				</ul>
				<ul class="city-list">
					<li class=city_title v-for="(item, index) in cityList" :key="index" :id="item.firstChar">
						<span>{{item.firstChar}}</span>
						<ul>
							<li v-for="(item, index) in item.list" :key="index">{{item.cityName}}</li>
							<li class="more">更多</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
#place {
	background-color: #eee;
	.header {
		.jiantou {
			margin: 0;
			padding: 0;
			font-size: 0;
			border: 10px solid transparent;
			border-right: 10px solid #f63;
			position: absolute;
			top: 13px;
			left: 4px;
			.white {
				margin: 0;
				padding: 0;
				border: 15px solid transparent;
				border-right: 15px solid white;
				position: absolute;
				top: -15px;
				right: -18px;
			}
		}
		padding: 0 10px;
		height: 45px;
		background-color: #fff;
		.title {
			color: #f63;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			.active {
				color: #fff;
				background-color: #f63;
			}
			div {
				border-radius: 3px;
				border: 1px solid #f63;
				line-height: 30px;
				text-align: center;
				width: 50%;
				height: 30px;
				display: flex;
				overflow: hidden;
				span {
					flex: 1;
					width: 50%;
				}
			}
		}
	}
	.content {
		.title {
			padding: 10px 20px;
			font-size: 14px;
			font-weight: bold;
		}
		.dingwei {
			height: 30px;
			line-height: 30px;
			padding: 10px;
			text-align: center;
			font-size: 12px;
			background-color: #fff;
		}
		.search {
			padding: 10px 30px;
			box-sizing: border-box;	
			#search {
				text-align: center;
				line-height: 32px;
				height: 32px;
				border-radius: 16px;
				background-color: #fff;
				color: #ccc;
				font-size: 14px;
			}
		}
		.hotList {
			background-color: #fff;
			overflow: hidden;
			list-style: none;
			text-align: center;
			li {
				height: 48px;
				line-height: 48px;
				color: #666;
				float: left;
				box-sizing: border-box;
				width: 33.3333%;
				border-right: 1px solid #eee;
				border-bottom: 1px solid #eee;
			}
			li:nth-child(3n+3) {
				border-right: none;
			}
		}
		.cityList_char {
			background-color: #fff;
			overflow: hidden;
			list-style: none;
			text-align: center;
			li {
				height: 48px;
				line-height: 48px;
				color: #666;
				float: left;
				box-sizing: border-box;
				width: 20%;
				border-bottom: 1px solid #eee;
				border-right: 1px solid #eee;
			}
			li:nth-child(5n+5) {
				border-right: none;
			}
			a {
				color: #666;
				text-decoration: none;
			}
		}
		.city-list {
			.city_title {
				span {
					padding-left: 10px;
					display: block;
					height: 40px;
					line-height: 40px;
				}
			}
			ul {
				list-style: none;
				background-color: #fff;
				overflow: hidden;
				text-align: center;
				li {
					color: #666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis; 
					width: 33.333%;
					box-sizing: border-box;
					height: 48px;
					line-height: 48px;
					float: left;
					border-bottom: 1px solid #eee;
					border-right: 1px solid #eee;
				}
				li:nth-child(3n+3) {
				border-right: none;
				}
			}
		}
	}
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			hotcity: [],
			cityList:[],
			t1: 'active',
			t2: ''
		}
	},
	methods: {
		choose(e) {
			this.t1 = "";
			this.t2 = '';
			this[e.target.dataset.name] = "active";
		},
		back() {
			window.history.go(-1)
		}
	},
	created() {
		this.$http.get("data/city_list.json",{
			header: {
				"content-type": "application/json; chaset=utf-8"
			}
		})
		.then(v => {
			this.hotcity = v.data.hotcity.data.hotCity;
			this.cityList = v.data.list.data.cityData;
			console.log(v)
		})
	}
}	
</script>