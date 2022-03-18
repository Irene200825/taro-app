export default defineAppConfig({
  //指定小程序由哪些页面组成
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/notebook/index',
    'pages/user/index'
  ],
  //用于设置小程序的状态栏、导航条、标题、窗口背景色，其配置项如下。
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  //底部导航
  tabBar: {
    color:'#2f3243',
    selectedColor:'#ff6633',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: "images/icon/index.png",
      selectedIconPath: "images/icon/index-selected.png"
    }, {
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: "images/icon/my.png",
      selectedIconPath: "images/icon/my-selected.png"
    }]
  }
})
