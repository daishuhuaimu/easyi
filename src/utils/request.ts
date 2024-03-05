import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径会携带api
    timeout: 5000
})
//request 实例添加请求响应拦截器
request.interceptors.request.use((config) => {

    return config
})

//响应拦截器

request.interceptors.request.use((response) => {
    //成功回调
    return response.data
}, (error) =>{
    //失败回调
    //失败回调状态吗
    let message = ''
    let status = error.response.status
    switch (status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
            message = '未登录'
            break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
            message = '登录过期，请重新登录'
            break
        case 404:
            message = '网络请求不存在'
            break
        case 500:
            message = '服务器出现问题'
            break
        default:
            message = error.response.data.message
            break
}
    ElMessage({
        type: 'error',
        message,
    })
    return Promise.reject(error)
},
)

export default request
