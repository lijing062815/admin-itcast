import axios from 'axios'

const baseURL = 'http://192.168.111.23:3306/api/private/v1/'
axios.defaults.baseURL = baseURL

// 登录验证
// export const checkUser = params => {
//     return axios.post('login', params).then(res => res.data)
// }
export const checkUser = params => {
    return axios.post('login', params).then(res => res.data)
}