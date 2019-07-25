import foo from './src/foo'; 
import './src/index.css';
import './src/index.scss';
import './src/index.less';
import Vue from 'vue';
import login from './src/login.vue'; 
var vm=new Vue({
	el:'#ded',
	render:function(createElements){
        return createElements(login)
    }
});


document.body.onload=function(){
    //document.getElementById("ded").innerHTML='<h1>'+foo.name+'</h1>';
    foo.show();
}