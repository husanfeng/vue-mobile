import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import home from './modules/home/index.js'
import login from './modules/login/index.js'
 
Vue.use(Vuex)
export default new Vuex.Store({
    state: Object.assign({}, state, ),
    actions: Object.assign({}, actions, ),
    mutations: Object.assign({}, mutations, ),
    getters: Object.assign({}, getters,),
    modules: Object.assign({}, {
        home,
        login,
        
    })
})