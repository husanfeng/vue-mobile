<template>
  <div>
    <x-header style="background-color:#000;">我的待办</x-header>
    <van-tabs
      type="card"
      style="margin:5px"
    >
      <van-tab title="待审批">待审批</van-tab>
      <van-tab title="待阅">待阅</van-tab>
      <van-tab title="待反馈">待反馈</van-tab>
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
