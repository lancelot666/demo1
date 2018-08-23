import {baseURL} from './config';
export const get = (url='')=>{
	let res = fetch(baseURL+url,{
      method:'get'
    })
    .then(res=>{
    	//console.log(res)
    	if(res.status===200) return res.json();			//请求成功1002
    	return {code:1001,msg:'请求错误:'+res.status};  //请求错误1001
	})
    .then(res=>{console.log(res);return res;})
    .catch(err=>{
    	let errMsg = {code:1000,msg:'请求失败:'+err.message};//请求失败1000
    	console.log(errMsg);
    	return errMsg;
    })
    return res;	
}

export const post = (url='',data={})=>{
	console.log('data:',data)
	let res = fetch(baseURL+url,{
		method:'post',
		mode:'cors',
		headers: {
		  'Accept': 'application/json',
		  //"Content-Type": "application/json"
		  'Content-Type': 'application/x-www-form-urlencoded', 
		},
		body:JSON.stringify(data)
	})
	.then(res=>{
    	//console.log(res)
    	if(res.status===200) return res.json();			//请求成功1002
    	return {code:1001,msg:'请求错误:'+res.status};  //请求错误1001
	})
    .then(res=>{console.log(res);return res;})
    .catch(err=>{	
    	let errMsg = {code:1000,msg:'请求失败:'+err.message};//请求失败1000
    	console.log(errMsg);
    	return errMsg;
    }) 
    return res;	
}