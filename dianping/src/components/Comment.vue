<template>
<div class="comment-list">
		<div class="header">
			<div class="jingxuan checked" @click="changeChecked1" >
			精选
			</div>
			<div class="zuixin" @click="changeChecked2" >
			最新
			</div>
		</div>
	<div class="Featured">
		<div class="nav">
			<div class="china">
				<img src="/img/China.jpg">
				<router-link class="china_mask" :to="'/detail/'" tag="div">
					<h3>中国际时装周</h3>
					<span>4篇热文</span>
				</router-link>
			</div>
			<div class="HaoWu">
				<img src="/img/2017.jpg">
				<router-link class="china_mask" :to="'/detail/'" tag="div">
					<h3>2017好物盘点</h3>
					<span>19篇热文</span>
				</router-link>
			</div>
		</div>
	<!-- v-for="(item, index) in list" :key="index" :data="item" -->
		<div v-for="(item, index) in commentList" :key="index" class="header_line">
			<div class="line_left">
				<p>{{item.title}}</p>
				<span>{{item.author}}</span>
			</div>
			<div class="line_right">
				<img class="text" :src="item.img">
			</div>
		</div>
	</div>
    <div class="New clear">
		<div  class="New_top" v-for="(item,index) in NewList" :key="index" >
		<p>{{item.title}}</p>
		<div class="zuixin_List">
			<span>{{item.data}}</span>
			<div class="icon">
				<span >{{item.name}}</span>
				<img class="sign" src="/img/24b6bc70b3561f3ae108a73ee03ede484196.jpg">
			</div>
		</div>
	</div>
    </div>
</div>
</template>
<style type="text/css" lang="scss">

body {
	background-color: #F0F0F0;
}
.clear {
	display: none;
}
.comment-list{
	height: 100%;
	width: 100%;
}
.header {
	width: 100%;
	height: 50px;
	background-color: #fff;
	display: flex;
	border-bottom: 1px solid #e0dddd;
}
.header .checked{
	border-bottom: 2px solid #f63;
    color: #f63;
}
.header .jingxuan ,
.header .zuixin{
	width: 50%;
	height: 50px;
	line-height:50px;
	text-align: center;
	font-weight: bold;
	font-size: 18px;
}
.nav {
width: 100%;
height: 130px;
background-color:#fff;
box-sizing: border-box;
padding: 15px;
display: flex;
justify-content: space-between;
   .china , .HaoWu {
       width: 49%;
       height: 100px;
       position: relative;
       img{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;       }
       .china_mask{
         width: 100%;
         height: 100%;
         position: absolute;
         top: 0px;
         left: 0px;
         background-color:rgba(0, 0, 0, 0.38);
         text-align: center;
         color: #fff;
         padding-top: 30px;
		box-sizing: border-box;
		span{
			display: block;
			border-top:1px solid #ffffff94;
			font-size:12px;
			width:80%;
			margin: 0 auto;
           }
       }
    }
    .HaoWu {
	width: 49%;
	height: 100px;
	background-color: blue;
    }
}
.header_line {
	width: 100%;
	height: 142px;
	box-sizing: border-box;
	padding: 15px;
	background-color: #fff;
	margin-top: 10px;
	.line_left{
		width: 60%;
		height: 100%;
		float: left;
		p{
			font-size: 18px;
			font-weight: bold;
		}
		span{
			font-size: 12px;
			color: #777;
		}
	}
	.line_right {
		width: 40%;
		height: 100%;
		float: right;
		backgroung-color:red;
		.text{
			width: 100%;
			height: 100%;
		}
	}
}
.New_top {
	width : 100%;
	padding: 15px;
	box-sizing: border-box;
	background-color: white;
    padding-bottom:30px;
	p{
	font-size: 20px;
	font-weight: bold;
	padding: 15px;
	}
	.zuixin_List{
		width: 100%;
        height: 30px;
        box-sizing: border-box;
        padding-top: 10px;
    }
    span{
		height: 30px;
		line-height:30px;
		font-size: 12px;
		color: #777;
		box-sizing: border-box;
		margin-right:5px;

    }
    .sign{
		display:block;
		height:30px;
		width: 30px;
		border-radius:30px;
        float: right;
		}
	.icon{
		height: 30px;
		display: flex;
		float:right;
		text-align:right;
    }
}

</style>
<script>
export default{
	data() {
		return {
			commentList:[],
			NewList:[]
		}
	},
	methods: {
		changeChecked1(){
			document.getElementsByClassName("jingxuan")[0].className = 'jingxuan checked';
			document.getElementsByClassName("zuixin")[0].className = 'zuixin';
			document.getElementsByClassName("Featured")[0].className = 'Featured';
			document.getElementsByClassName("New")[0].className = 'New clear';
		},
		changeChecked2(){
			document.getElementsByClassName("jingxuan")[0].className = 'jingxuan';
			document.getElementsByClassName("zuixin")[0].className = 'zuixin  checked ';
			document.getElementsByClassName("Featured")[0].className = 'Featured clear';
			document.getElementsByClassName("New")[0].className = 'New';
		},
	},
	mounted() {
		this.$http
			.get('/data/comment.json')
			.then(({
				data
			}) => {
				this.commentList = data.commentList;
				this.NewList =data.NewList;
				console.log(data)
			})

	}
			

}
</script>

