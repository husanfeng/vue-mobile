// import Vue from 'vue'
// import Router from 'vue-router'
import Main from "../views/Main.vue";
// Vue.use(Router)
const loginRouter = {
    path: '/login-page',
    name: 'login-page',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['../views/login/Login.vue'], resolve); }
};
export const appRouter = {
    path: '/',
    component: Main,
    redirect: '/home-page',
    children: [

        {
            path: 'feedback-page',
            name: 'feedback-page',
            meta: '意见反馈',
            component: resolve => { require(['../views/drawer/Feedback.vue'], resolve); }
        },
        {
            path: 'home-page',
            name: 'home-page',
            component: resolve => { require(['../views/home/Home.vue'], resolve); }
        },
    ]
};
export const routers = [
    loginRouter,
    appRouter,
]
export default {
    routers
}