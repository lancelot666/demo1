//日志打印开关
export const logSwitch = ()=>{
	const showLog = 1;  //日志打印开关
	let w = window.console;
	if(!showLog){
		w.log = ()=>{};
		w.error =()=>{};
		w.info = ()=>{};
	}
}
//请求地址头
export const baseURL='http://127.0.0.1';