/**
 * axios请求相关配置
 */
import axios from 'axios'
import router from './router'
import Utils from './utils'
import config from '@/config/index'

// 设置请求的base url：不同环境不同的url
axios.defaults.baseURL = config[import.meta.env.MODE].baseURL

// 携带cookie
axios.defaults.withCredentials = true

// 请求头信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = Utils.localGet('token') || ''
// 对于post请求，默认content-type类型为application/json
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 拦截器配置
axios.interceptors.response.use(res => {
    // 如果响应不是对象类型，判定为服务端异常
    if (typeof res !== 'object') {
        console.error(res)
        return this.$message({
            type: 'warning',
            message: '服务器异常'
        })
    }
    // 419说明认证过期，定位到登录界面
    if (res.data.resultCode === 419) {
        return router.push({path: '/login'})
    }
    // 如果状态码不是200，说明存在异常
    if (res.data.resultCode !== 200) {
        console.error(res)
        return Promise.reject(res)
    }
    // 如果不是上面的任意一种异常，就是正常
    return res.data.data
})

export default axios