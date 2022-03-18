<template>
  <view class="index">
    <nut-searchbar>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
    </nut-searchbar>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, ref } from "vue";
import "./index.less";

export default defineComponent({
  setup() {
    // const handleFocusSearchbar = () => {
    //   console.log("触发");
    //   Taro.navigateTo({
    //     url: "/pages/notebook/index",
    //   });
    // };

    return {
      // handleFocusSearchbar,
    };
  },
});
</script>
