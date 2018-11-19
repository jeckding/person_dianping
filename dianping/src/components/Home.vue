<template>
<div>
	<Search></Search>
	<!-- icons模块 -->
	<mt-swipe style="height: 190px" :auto="0">
		<mt-swipe-item>
			<ul class="home-icon">
				<router-link class="item" v-for='(item, index) in G_list' :key="index" tag='li' :to='"/G_list/" + item.id'>
					<img :src="'img/icon/' + item.img" alt="">
					<p>{{item.text}}</p>
				</router-link>
			</ul>
		</mt-swipe-item>
		<mt-swipe-item>
			<ul class="home-icon">
				<router-link class="item" v-for='(item, index) in G_list' :key="index" tag='li' :to='"/G_list/" + item.id'>
					<img :src="'img/icon/' + item.img" alt="">
					<p>{{item.text}}</p>
				</router-link>
			</ul>
		</mt-swipe-item>
		<mt-swipe-item>
			<ul class="home-icon">
				<router-link class="item" v-for='(item, index) in G_list' :key="index" tag='li' :to='"/G_list/" + item.id'>
					<img :src="'img/icon/' + item.img" alt="">
					<p>{{item.text}}</p>
				</router-link>
			</ul>
		</mt-swipe-item>
	</mt-swipe>
	
	<div class="commemt">
		<div class="img"></div>
		<div class="carousel" id="carousel">
			<div class="imgs">
				<ul class="unit">
					<router-link :to="'/comment/123'" tag="li">
					<span>不比出国差,短假期选地方玩!</span>
					<img src="/img/387438cef7e2bb9eff5b701dde173f27268549.png.jpg" >
					</router-link>
				</ul>
			</div>
		</div>
	</div>
	<div class="advertisement">
		<router-link :to="'/advertisement/'" src="/img/banner.jpg" tag="img">
		</router-link>
	</div>


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
			<router-link v-for="(item,index) in ad" :key="index" :to="'/detail/'+item.shopUuid" tag="li">
				<img :src="'/img/ad/' + item.url" alt="">
				<div class="small_title">{{item.title}}</div>
				<div class="price">
					<span class="now_price">{{item.price}}</span>
					<span class="old_price">{{item.originPrice}}</span>
				</div>
			</router-link>
		</ul>
	</div>


<!-- 上面是xxxx从这往下 -->
	<div class="blank"></div>
	<div class="home-youlike">
		<div class="title">猜你喜欢</div>
		<Like v-for="(item, index) in list" :key="index" :data="item"></Like>
		<div class="more" @click="more" v-show="others.length">查看更多</div>
		<div class="footer">
			<p>我的 |  社区论坛 | 添加用户 | 意见反馈</p>
			<p>美团网 | 美团下载 |  结婚 | 亲子 | 家装| 宴会教育</p>
			<p>电脑版 | 客户端 </p>
		</div>
	</div>
	
</div>
</template>
<!-- 样式 -->
<style lang="scss" scoped>
	// 引入样式
    @import '../base.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
.commemt {
	overflow: hidden;
}
.img{
	width: 50px;
	height: 45px;
	background: url('/img/a4af59210e26080ea9403fff6e56e6b1.png') no-repeat;
	background-position: -90px 5px;
    background-size: 191px 384px;
    float: left;
}
.carousel{
	float: left;
	position:relative;
    overflow:hidden;
    width: 84%;
    height: 45px;
}
ul,ol{
	list-style:none;
}
.carousel .imgs .unit{
   
    left:0px;
    top:0px;
}
.carousel .imgs .unit li{
    float:left;
	width:100%;
	height: 45px;
}
.unit span{
	font-weight: 800px;
    color: black;
	height: 45px;
    line-height: 45px;
}
.unit img{
	width: 45px;
    height: 45px;
    float: right;
}
.advertisement{
	width:100%;
	height: 60px;
	margin-top:10px;
}
.advertisement a {
     width: 100%;
     height: 100%;
}
.advertisement img {
	display: block;
	width: 100%;
	height: 100%;
}
.home-icon {
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	text-align: center;
	.item {
		width: 20%;
		margin-bottom: 20px;
		img {
			width: 60%;

		}
		p {
			font-size: 12px;
		}
	}
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
.blank {
height: 10px;
background-color: #f0f0f0;
} 
.home-youlike {
background-color: #fff;
margin-top: 10px;
.title {
  height: 30px;
  line-height: 40px;
  padding-left: 15px;
  font-size: 14px;
  color: #777;
}
}
.more {
  font-size: 15px;
  height: 45px;
  line-height: 45px;
  color: #333;
  background-color: #fff;
  text-align: center;

}
.footer {
  // position: fixed;
  // bottom: 0;
  // // left: 0;
  // margin: 0 auto;
  text-align: center;
  padding: 15px 5px 10px;
  font-weight: 400;
  font-size: 12px;
  background-color: #f0f0f0;

p {
  color: #adadad;
  text-align: center;

  line-height: 28px;
}
}
</style>

<script>
import Search from './Search.vue';
import Like from './Like.vue';
export default {
	components: {
		Search,
		Like
	},
	data() {
		return {
			G_list: [
				{img: '01.png', text: '美食', id: '1'},
				{img: '02.png', text: '猫眼电影', id: '2'},
				{img: '03.png', text: '酒店', id: '3'},
				{img: '04.png', text: '休闲娱乐', id: '4'},
				{img: '05.png', text: '外卖', id: '5'},
				{img: '06.png', text: '火锅', id: '6'},
				{img: '07.png', text: '丽人', id: '7'},
				{img: '08.png', text: '购物', id: '8'},
				{img: '10.png', text: '周边游', id: '9'},
				{img: '09.png', text: 'KTV', id: '10'},
			],
			list: [],
			others: [],
			ad: [],
			id: ''
		}
	},
	created() {
		// 请求数据
		this.$http
			.get("/data/homead.json")
			.then(({data})=>{
			this.ad=data.ad;
			console.log(this.ad,0)
			this.list=data.list;
		
		})
	this.$http.get('/data/home.json').then(({data}) => {
		this.list = data.list.slice(0, 4);
		this.others = data.list.slice(4);
	})

},
	methods: {
		more() {
		console.log(666);

		this.list = this.list.concat(this.others);
			// 清空备份数据
			this.others = [];
		},
		gomore() {
			// console.log(666)
			this.$router.push('/list/'+1);
		}
	}
}
</script>