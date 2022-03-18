<template>
  <view class="index">
    <view class="top">
      <image class="user-image" :src="avatarUrl" />
      <view class="user">
        <view class="name">{{ nickName }}</view>
        <view class="role">普通用户</view>
      </view>
    </view>
    <nut-cell-group title="" desc="">
      <nut-cell is-link>
          <template v-slot>
        <button  open-type="getUserProfile" @tap="getUserInfo(true)">更新用户信息</button>
      </template>
     
      </nut-cell>
      <nut-cell title="工具2" is-link></nut-cell>
      <nut-cell title="工具3" is-link></nut-cell>
    </nut-cell-group>
      
  </view>
</template>

<script lang="ts">
import "./index.less";
import { defineComponent, ref } from "vue";
import { getUserProfile, UserInfo } from "../../utils/login";

export default defineComponent({
  setup() {
    const avatarUrl = ref("https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132");
    const nickName = ref("");

    const getUserInfo = async (isRefresh) => {
      const userInfo:UserInfo= await getUserProfile(isRefresh)
      avatarUrl.value = userInfo.avatarUrl
      nickName.value = userInfo.nickName
    };

    getUserInfo(false)


    return {
      avatarUrl,
      nickName,
      getUserInfo
    };
  },
});
</script>


