import foo from './src/foo'; 
import './src/index.css';
import './src/index.scss';
import './src/index.less';
import Vue from 'vue';
import app from './src/App.vue'; 
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import homePage from './src/homePage.vue';
import infoPage from './src/infoPage.vue';
import settingPage from './src/settingPage.vue';


var router=new VueRouter({
    routes:[
        {path:'/homeP',component:homePage},
        {path:'/infoP',component:infoPage},
        {path:'/settinP',component:settingPage}
    ]
})
var vm=new Vue({
	el:'#pages',
    render: c => c(app),
    router
});