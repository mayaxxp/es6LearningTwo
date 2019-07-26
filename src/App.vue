<template>
	<div class="largt"> 
		<router-view class="routerView"></router-view>
		<router-link to="homeP">home</router-link>
		<router-link to="infoP">info</router-link>
		<router-link to="settinP">set</router-link>
		
	</div>
	
</template>

<script>
</script>

<style>
	.largt{width: 100%;height: 100%;font:"微软雅黑" 12px;background:#cd09ed;color:white;letter-spacing: .3em;}
	.routerView{width: 100%;height:90%;height:calc(100% - 51px);height:-webkit-calc(100% - 51px);height:-moz-calc(100% - 51px);background: blueviolet;position: relative;color: white;text-align: center;line-height:3em;}
</style>