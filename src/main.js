import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import webApp from "./webApp.vue";
import router from "./router/index.js";
import store from './vuex/index.js'
Vue.use(Vuex);
new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(webApp)
});
