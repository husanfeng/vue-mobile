<template>
  <div>
    <van-steps
      direction="vertical"
      :active="4"
      active-color="#f44"
    >
      <van-step>
        <h3>【差旅费】项目经理审批</h3>
        <p>2018-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【差旅费】部门领导审批</h3>
        <p>2018-07-13 10:00</p>
      </van-step>
      <van-step>
        <h3>【差旅费】部门总经理审核</h3>
        <p>2018-07-15 09:30</p>
      </van-step>
      <van-step>
        <h3>【差旅费】财务审核</h3>
        <p>2018-07-15 09:30</p>
      </van-step>
      <van-step>
        <h3>【差旅费】财务复核</h3>
        <p>2018-07-16 09:30</p>
      </van-step>
      <van-step>
        <h3>【差旅费】完成</h3>
        <p>2018-07-16 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
</style>
