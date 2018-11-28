<template>
  <div>
    <x-header style="background-color:#000;">我的已办</x-header>
    <van-tabs
      type="card"
      style="margin:5px"
    >
      <van-tab title="已审批">已审批</van-tab>
      <van-tab title="已阅">已阅</van-tab>
      <van-tab title="已反馈">已反馈</van-tab>
    </van-tabs>
  </div>

</template>
<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  data() {
    return {};
  }
};
</script>
<style>
</style>
