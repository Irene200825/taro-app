<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue';

export default {
  // 可以使用所有的 Vue 生命周期方法
  mounted() {
      console.log('notebook页面执行mounted')
  },
  // onLoad
  onLoad() {
       console.log('notebook页面创建时执行onLoad')
  },
  // onReady
  onReady() {
      console.log('notebook页面首次渲染完毕时执行onReady')
  },
  // 对应 onShow
  onShow() {
      console.log('notebook页面执行onShow')
  },
  // 对应 onHide
  onHide() {
       console.log('notebook页面执行onHide')
  },
  // 对应 onPullDownRefresh
  onPullDownRefresh() {
      console.log('notebook页面执行onPullDownRefresh')
  },
  setup() {
    const msg = ref("笔记本页面");
    return {
      msg,
    };
  },
};
</script>
