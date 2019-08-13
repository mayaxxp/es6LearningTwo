define(['jquery'],function($){
    　　//定义window类 给一些基本的参数配置 
    　　function Window(){ 
    　　　　this.cfg = {
    　　　　　　width:400,
    　　　　　　height:200,
    　　　　　　content:'我是默认文本内容',
    　　　　}
    　　} 
    　　//给window类添加方法
    　　Window.prototype = {
    　　　　CFG : $.extend(this.cfg,cfg),
    　　　　alert:function(cfg){
    　　　　　　var boundingBox = $('<div class="window_boundingBox"></div>');
    　　　　　　boundingBox.appendTo('body')
    　　　　　　boundingBox .html(CFG .content);
    　　　　　　boundingBox.css({
    　　　　　　　　width:CFG.width,
    　　　　　　　　height:CFG.height,
    　　　　　　　　left:(CFG.x || (window.innerWidth - CFG.width)/2)+'px',
    　　　　　　　　top:(CFG.y || (window.innerHeight - CFG.height)/2)+'px'
    　　　　　　}) 
    　　　　　　}
    
    　　　　}
        //导出window类 
    　　 return {Window:Window}
})