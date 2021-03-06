import axios from 'axios'
import qs from 'qs'


//设置公共请求地址
axios.defaults.baseURL='https://customer.ptyibo.com/api/';
axios.defaults.timeout=5000;

 //设置请求请求头
 //axios.defaults.headers.common['user-session'] = this.sessionKey;

 //请求前拦截
 let loadingInstance=''

 // 添加请求拦截器
 axios.interceptors.request.use(function (config) {

    if(config.method.toLowerCase() == "post"){

 	   config.data = qs.stringify(config.data)

    }
    return config;
   }, function (error) {

   });



   // 添加响应拦截器
   axios.interceptors.response.use(function (response) {

       return response;
     }, function (error) {
       // 对响应错误做点什么
       return Promise.reject(error);
     });
   export default axios
