import { createApp } from 'vue'
//引入element-plus 和css样式
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//引入路由
import router from './router'
const app = createApp(App)

// svg插件需要配置代码
import 'virtual:svg-icons-register'
import allCompinents from '@/components/index.ts'
app.use(router)
app.use(allCompinents);
app.use(ElementPlus)
app.mount('#app');


// console.log(allCompinents)