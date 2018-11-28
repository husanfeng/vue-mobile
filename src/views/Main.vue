<template>
  <div style="height:100%;">
    <!-- <div>
            <loading v-model="isLoading"></loading>
        </div> -->
    <div>

      <router-view></router-view>
    </div>

  </div>
</template>
<script>
// import { XHeader } from "vux";
export default {
  components: {
    // XHeader
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {},
  beforeDestroy() {},
  created() {},
  computed: {},
  watch: {
    // $route(to, from) {
    //   //   debugger;
    //   if (to.path != "/home-page") {
    //     this.isShow = true;
    //     this.functionTitle = to.meta;
    //   } else {
    //     this.isShow = false;
    //   }
    // }
  }
};
</script>

<style lang="less" >
</style>