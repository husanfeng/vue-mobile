export default {
    setIsShowFunction(state) {
        state.isShowFunction = true;
        state.isShowProcess = false;
        state.isShowMy = false
    },
    setIsShowProcess(state) {
        state.isShowFunction = false;
        state.isShowProcess = true;
        state.isShowMy = false
    },
    setIsShowMy(state) {
        state.isShowFunction = false;
        state.isShowProcess = false;
        state.isShowMy = true
    },

    setIsDrawerVisibility(state) {
        //   debugger
        state.isDrawerVisibility = !state.isDrawerVisibility
    },
}