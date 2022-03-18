<template>
  <view class="index">
    <nut-searchbar @focus="handleFocusSearchbar">
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
    </nut-searchbar>

    <nut-swiper
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item>
        <img
          class="img"
          src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
          alt=""
        />
      </nut-swiper-item>
      <nut-swiper-item>
        <img
          class="img"
          src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"
          alt=""
        />
      </nut-swiper-item>
      <nut-swiper-item>
        <img
          class="img"
          src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
          alt=""
        />
      </nut-swiper-item>
    </nut-swiper>

    
    <div class="products">
       <div class="product" v-for="(item,index) in list" :key="index">
         <Card :item="item"></Card>
       </div>
    </div>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, ref, onMounted } from "vue";
import "./index.less";
import Card from '../components/card.vue';
import {getListApi} from '../../api/api';
import {Product} from '../../interface';

export default defineComponent({
  components:{Card},
  onReachBottom() {
    console.log("下拉触底");
  },
  setup() {

    //设置列表数据
    let list:Product[]|any  = ref([])

     const getList = async ()=>{
       try {
         const data = await getListApi();
         list.value = data
         console.log('获取data',data)
       } catch (error) {
          console.log('获取列表失败',error)
       }

     }
    /**
     * 前往搜索页面
     */
    const handleFocusSearchbar = () => {
      console.log("触发");
      Taro.navigateTo({
        url: "/pages/search/index",
      });
    };


      // mounted
    onMounted(() => {
      getList()
    }) 

    return {
      handleFocusSearchbar,
      list
    };
  },
});
</script>

<style lang="less">
.nut-swiper-item {
  width: 100%;
  line-height: 150px;
  .img {
    width: 100%;
    height: 100%;
  }
}

.products{
  padding: 10px 5px;
  .product{
    padding: 0 5px 10px 5px;
    float: left;
    width: calc(50% - 10px);
  }
}
</style>
