import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/Main.vue";
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '/',
                    name: '',
                    component: resolve => { require(['../views/home/Home.vue'], resolve); }
                },  // E:\HRapps\ems-mobile\src\views\drawer\Feedback.vue
                {
                    path: 'feedback-page',
                    name: 'feedback-page',
                    component: resolve => { require(['../views/drawer/Feedback.vue'], resolve); }
                },
                {
                    path: 'home-page',
                    name: 'home-page',
                    component: resolve => { require(['../views/home/Home.vue'], resolve); }
                },
            ]
        },
    ]
})
