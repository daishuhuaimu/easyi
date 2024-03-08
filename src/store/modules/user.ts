//创建用户小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user/index'
//引入数据类型
import type { LoginFormData } from '@/api/user/type'
import { alertProps } from 'element-plus'

let useUserStore = defineStore('User', {
    //小仓库数据存储
    state: () => {
        return{
            token: localStorage.getItem('TOKEN'),//用户唯一token
        }
    },
    //异步｜逻辑 定义
    actions: {
        //用户登录方法
        async userLogin(data: LoginFormData) {
            //登录请求
            alert(11)
            // console.log(data)
            let result:any = await reqLogin(data)
            // alert(2);
            //登录请求成功200=》token
            //登录请求失败201
            if (result.code == 200) {
                //存储token
                this.token = result.data as string
                localStorage.setItem('TOKEN',result.data as string)
                return 'ok'
            }else{
                return Promise.reject(new Error(result.data as string))
            }
        }

    },
    //
    getters: {

    }
})

export default useUserStore