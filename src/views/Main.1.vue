<template>
    <div>
        <div>
            <x-header style="background-color:#000;">
                <p v-text="title"></p>
            </x-header>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  data() {
    return {
      title: "title"
    };
  },

  watch: {
    $route(to, from) {
      if (to.path != "/") {
        this.title = to.meta;
        // debugger;
      } else {
      }
    }
  }
};
</script>
<style>
</style>

