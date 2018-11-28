import state from './state'
export default {

    setRouterPath(param) {
        state.routerPath = param
    },
    setRouterName(param) {
        state.routerName = param
    }
}