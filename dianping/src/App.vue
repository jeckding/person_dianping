<template>
<div>
	<!-- 使用路由 定义渲染的位置-->
	<router-view></router-view>
</div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	list-style: none;
}
</style>

<script>
export default {
	created() {
		console.log(this);
	}
}
</script>

