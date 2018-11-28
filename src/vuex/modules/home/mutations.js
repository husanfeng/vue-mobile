import state from "./state";
export default {
    onItemClickFunction() {
        state.isShowFunction = true;
        state.isShowProcess = false;
        state.isShowMy = false;
    },
    onItemClickProcess() {
        state.isShowFunction = false;
        state.isShowProcess = true;
        state.isShowMy = false;
    },
    onItemClickMy() {
        state.isShowFunction = false;
        state.isShowProcess = false;
        state.isShowMy = true;
    },
}