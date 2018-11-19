<template>
<div>
	<div class="av-acc-coupon-box">
		<img src="/img/c17339fb675944fc1a7c476dc7ba6dcf428852.jpg">
		<div class="av-acc-btn-layout">
			<img src="/img/f677f99d72db33e4bfffc65570ab7ae430448.png">
		</div>
	</div>
	<div class="default" >
		<div class="default_title">
			<div class="ball_motion checked" @click="changeChecked2">球类运动</div>
			<div class="shooting" @click="changeChecked3">射击射箭</div>
			<div class="extreme_sport" @click="changeChecked4">极限运动</div>
		</div>
		<div>
			<!-- v-for="(item, index) in commentList" :key="index" -->
			<div v-for="(item,index) in ballMotion" :key="index" class="acd-list-item">
				<div class="left_img">
					<img :src="item.img">
				</div>
				<div class="acd-content">
					<div class="acd-info">
					<span class="span_title">{{item.span_title}}</span>
					<span class="acd-distance">{{item.acd_distance}}</span>
					</div>
					<p class="text">{{item.small_title}}</p>
				<div class="acd-footer">
					<div class="tagged">
						<div class="span1">
							<span>¥</span><span>{{item.CurrentPrice}}</span>
							<div class="span2">
								<span>¥</span><span>{{item.OriginalPrice}}</span>
							</div>
						</div>
					</div>
					<div class="btn_md">
						<span>抢</span>
					</div>
				</div>
			</div>
		</div>
</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.av-acc-coupon-box{
	position: relative;
}
.av-acc-coupon-box img{
	width:100%;
}
.av-acc-btn-layout{
	position: absolute;
    bottom: 0;
    z-index: 111;
}
.default .default_title{
	display: flex;
}
.default .default_title div{
	width:33.3%;
	height: 43.2px;
	line-height:43.2px;
	text-align: center;
	font-size: 13px;
	border-bottom: 0.1rem solid #ececec;
}
.default .default_title .checked{
	color: #f63;
    border-bottom: 0.1rem solid #f63;
}
.acd-list-item{
	padding: 10px;
	display: flex;
	border-bottom:0.1rem solid #ececec;
}
.left_img {
	width:50%;
}
.acd-list-item img{
	display: block;
	width: 95%;
}
.acd-content{
	width:100%;
	padding-left: 8px;
}
.acd-info{
	height: 30%;
}
.acd-footer {
	height: 60%;
}
.acd-footer .tagged{
	width: 60%;
	height:100%;
	display:block;
	float:left;
	.span1{
		position:relative;
		color:#FF6633;
		font-size:16px;
		top:25px;
		.span2{
           position:absolute;
           top:-7px;
           left:33px;
           color:#A7A7A7;
           font-size:12px;
		}
	}

}
.btn_md{
	width:40%;
	display:block;
	margin-top:7%;
	float:right;
	span{
		display:block;
		width:70%;
		height:100%;
		background-color:#FF6633;
		float: right;
		text-align:center;
		border-radius:3px;
		color:white;
		font-size:14px;
		line-height:30px;
	}
}
.span_title{
	font-size: 13px;
	display: block;
    float: left;
}
.acd-distance{
	font-size: 10px;
	display: block;
    float: right;
    color: #7c7d7f;
}
.text {
	font-size: 10px;
	color: #7c7d7f;
}
</style>
<script>
export default{
		data() {
				return {
					ballMotion:[]
					}
				},
		methods: {
			changeChecked2(){
			document.getElementsByClassName("ball_motion")[0].className = 'ball_motion checked';
			document.getElementsByClassName("shooting")[0].className = 'shooting';
			document.getElementsByClassName("extreme_sport")[0].className = 'extreme_sport';
				},
			changeChecked3(){
			document.getElementsByClassName("ball_motion")[0].className = 'ball_motion';
			document.getElementsByClassName("shooting")[0].className = 'shooting checked';
			document.getElementsByClassName("extreme_sport")[0].className = 'extreme_sport';
				},
			changeChecked4(){
			document.getElementsByClassName("ball_motion")[0].className = 'ball_motion';
			document.getElementsByClassName("shooting")[0].className = 'shooting';
			document.getElementsByClassName("extreme_sport")[0].className = 'extreme_sport checked';
				},
		},
		created() {
			this.$http
			.get('/data/Advertisement.json')
			.then(({
				data
			}) => {
				this.ballMotion = data.ballMotion;
				console.log(data.ballMotion)
				})
			}
}
</script>

