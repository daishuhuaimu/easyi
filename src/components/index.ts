import type { App } from 'vue'
// import * as components from '@/components'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from './SvgIcon/index.vue'
import hehe from './hehe/index.vue'
const allCompinents:any = {SvgIcon,hehe}
// console.log(Object.keys(allCompinents))

export default {
    install (app:App){
        Object.keys(allCompinents).forEach(key=>{
            // console.log(key,allCompinents[key])
            app.component(key,allCompinents[key]);
              }) 

    }
}
// const install = function (app: App) {
//     Object.entries(components).forEach(([key, value]) => {
//         app.component(key, value)
//     })
//     for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//         app.component(key, component)
//     }
//     console.log(app)
// }

// export default install
// export * from '@/components'