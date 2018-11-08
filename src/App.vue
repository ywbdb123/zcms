<template>
    <div id="app">
        <div class="header">
            <div class="title">企业网站精选</div>
            <div class="info">
                <img src="@/assets/tx.jpg" alt="">
                <div class="user">
                    <span>江南一点雨</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left_nav">
                <ul>
                    <li :class="{current:currentRoute=='/home'}">
                        <i class="fa fa-university"></i>
                       <router-link to='/home'>首页管理</router-link>
                       <i class="fa fa-angle-right"></i>
                    </li>
                    <li :class="{current:currentRoute=='/category'}">
                        <i class="fa fa-bars"></i>
                       <router-link to='/category'>栏目管理</router-link>
                       <i class="fa fa-angle-right"></i>
                    </li>
                    <li :class="{current:currentRoute=='/article'}">
                        <i class="fa fa-book "></i>
                       <router-link to='/article'>文章管理</router-link>
                       <i class="fa fa-angle-right"></i>
                    </li>
                    <li :class="{current:currentRoute=='/user'}">
                        <i class="fa fa-user-circle"></i>
                       <router-link to='/user'>用户管理</router-link>
                       <i class="fa fa-angle-right"></i>
                    </li>
                </ul>
            </div>
            <div class="right_content">
                <div class="wrapper">
                    <!-- 承载子组件，局部刷新 -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            jump(url){
               this.$router.push(url);
            }
        },
        mounted(){
            // 直接默认跳转到home界面
            this.$router.push('/home');  
        },

        data(){
            return {
                msg:'App.vue',
                currentRoute:'/home'
            }
        },
        // 监听
        watch:{
            '$route':function(to,from){
               this.currentRoute = to.path;
            }
        }
    }
</script>
<style>
    html {
        font: normal normal 16px '微软雅黑','Microsoft YaHei';
        color: #666;
    }
    body,ul,ol,dl,p,h1,h2,h3 {
        margin: 0;
        padding: 0;
    }
     ul li {
        list-style: none;
    } 
    a {
        color: #666;
        text-decoration: none;
    }
    div {
        box-sizing: border-box;
    }
    .header {
        position: absolute;
        width: 100%;
        height: 60px;
        top: 0;
        background-color: #b3c0d1;
        padding: 0 2em;
    }
    .header .title {
        color: #ffffff;
        font-size: 24px;
        line-height: 60px;
        float: left;
    }
    .header .info {
        line-height: 60px;
        height: 60px;
        text-align: right;
    }
    .header .info>img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 5px;
        margin-right: 10px;
    }
    .header .info>.user {
        float: right;
        cursor: pointer;
        color: #fff;
        padding: 0;
    }
    .content {
        position: absolute;
        width: 100%;
        top: 60px;
        bottom: 0;
    }
    .content > .left_nav {
        width: 200px;
        height: 100%;
        float: left;
        background-color: #d3dce6;
    }
    .content > .right_content {
        margin-left: 200px;
        height: 100%;
        background-color: #e9eef3;
        padding: 1em;
    }
    .content > .right_content > .wrapper {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: #ffffff;
        /*padding: .5em;*/
        overflow-y: auto;
    }
    .left_nav ul {

    }
    .left_nav ul li  {
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid #f0f0f0;
        position: relative;
    }
    .left_nav ul li > i:first-child {
        position: absolute;
        left: 2.5em;
        font-size: 14px;
        top: 13px;
    }
    .left_nav ul li > i:last-child {
        position: absolute;
        right: 2em;
        font-size: 14px;
        top: 13px;
    }
    .left_nav ul li.current {
        background-color: #e9eef3;
    }
</style>
