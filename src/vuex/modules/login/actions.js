import state from "./state";

export default {
    setUserName({ commit }, param) {
        state.userName = param
    }
}