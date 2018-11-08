// 导入
import axios from 'axios';
import qs from 'qs';

// 后台接口地址
axios.defaults.baseURL = 'http://120.77.203.39:8099'
// 提交方式：表单提交
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 在发送数据之前编码
axios.interceptors.request.use((config)=>{
	// config配置对象
	if(config.method == 'post'){
		config.data = qs.stringify(config.data,{arrayFormat:'repeat'});
	}
	return config;
})

// 导出
export default axios;