<template>
    <div style="height:100%;">
        <!-- <div>
            <loading v-model="isLoading"></loading>
        </div> -->
        <div>
            <!-- <x-header style="background-color:#000;">
                <p v-text="functionTitle"></p>
            </x-header> -->
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
  created() {},
  computed: {},
  watch: {
    $route(to, from) {
      if (to.path != "/home-page") {
        this.functionTitle = to.meta;
      } else {
      }
    }
  }
};
</script>

<style lang="less" >
</style>