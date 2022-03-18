<template>
  <div class="card_product">
    <img :src="item.urls[1]" />
    <div class="detail">
      <div class="name">{{ item.name }}</div>
      <div class="desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  //这边配置后，setup中才生效
  props: {
    item: Object,
  },
  setup(props) {
    //因为 props 是响应式的，你不能使用 ES6 解构,可以在 setup 函数中使用 toRefs 函数来完成此操作

    return {};
  },
});
</script>
<style lang="less">
.card_product {
  width: 100%;
  overflow: hidden;
  background: #fff;

  img {
    width: 100%;
    object-fit: contain;
  }

  .detail {
    padding: 10px;
    .name {
      font-size: 18px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .desc {
      padding-top: 4px;
      color: #333;
      font-size: 16px;
    }
  }
}
</style>