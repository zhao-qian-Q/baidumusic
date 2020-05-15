// 对http进行风封装
import axios from 'axios'


// 使用自定义文件发送请求
const instance = axios.create({
    baceURL:'',
    timeout:3000,
    // 通用的请求头
    headers:{

    }
});
// 添加请求拦截器
instance.interceptors.request.use(function(config){
    // 所有接口发送请求可以带上token参数
    return config;
},function(error){
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function(response){
//    响应过来的数据
if(response.status === 200){
    return response.data

}else if(response.status === 200){
    // 跳转到404错误页
}else {
    console.error('请求错误')
    console.error(response)

};
   
},function(error){
    return Promise.reject(error)
})

export default instance