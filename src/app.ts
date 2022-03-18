import { createApp } from 'vue'
import NutUI from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
import './app.less'
import { login} from './utils/login'

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  async mounted() {
    login()
    console.log('执行入口文件生命周期mounted')
  },

  // 对应 onLaunch
  onLaunch(options) {

    console.log('执行入口文件生命周期onLaunch', options)
  },

  // 对应 onShow
  onShow(options) {
    console.log('执行入口文件生命周期onShow', options)
  },

  // 对应 onHide
  onHide() {
    console.log('执行入口文件生命周期onHide')
  },

  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(NutUI)

export default App
