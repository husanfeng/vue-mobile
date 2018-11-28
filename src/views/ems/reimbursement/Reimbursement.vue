<template>
  <div>
    <x-header style="background-color:#000;">我的报账单</x-header>
    <van-tabs
      type="card"
      style="margin:5px"
    >
      <van-tab title="已提交">已提交</van-tab>
      <van-tab title="草稿单">草稿单</van-tab>
      <van-tab title="作废单">作废单</van-tab>
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
