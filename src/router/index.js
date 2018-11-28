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
            path: 'reimbursement-page',
            name: 'reimbursement-page',
            meta: '报账单',
            component: resolve => { require(['../views/ems/reimbursement/Reimbursement.vue'], resolve); }
        },
        {
            path: 'pending-page',
            name: 'pending-page',
            meta: '待处理',
            // component: resolve => { require(['../views/ems/disposalpending/Pending.vue'], resolve); }
            component: resolve => { require(['../views/ems/pending/Pending.vue'], resolve); }

        },
        {
            path: 'processed-page',
            name: 'processed-page',
            meta: '已处理',
            component: resolve => { require(['../views/ems/processed/Processed.vue'], resolve); }
        },
        {
            path: 'home-page',
            name: 'home-page',
            meta: '首页',
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