// import state from "./state";
export default {
    onItemClickFunction(state, param = '') {
        // let a = param;
        state.isShowFunction = true;
        state.isShowProcess = false;
        state.isShowMy = false;
    },
    onItemClickProcess(state) {
        state.isShowFunction = false;
        state.isShowProcess = true;
        state.isShowMy = false;
    },
    onItemClickMy(state) {
        state.isShowFunction = false;
        state.isShowProcess = false;
        state.isShowMy = true;
    },
}