import Promise = require('bluebird');

export function hello(word:String = "TypeScript"):string {
	return "Hello, " + word;
}

export function getJson(url:string):Promise<any>{
	return new Promise((resolve, reject) => {
		let req:XMLHttpRequest = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = () => {
			if (req.status == 200) {//XXX only 200?
				console.debug(req.response);
				resolve(JSON.parse(req.response));
			}
			else {
				onErrorHandle(req);
				reject(req);
			}
		};
		req.send();
	});
}

export function postJson(url:string, postObj:any):Promise<any>{
	return new Promise((resolve, reject) => {
		let req:XMLHttpRequest = new XMLHttpRequest();
		req.open('POST', url);
		req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		req.onload = () => {
			if (req.status == 200) {//XXX only 200?
				console.debug(req.response);
				resolve(JSON.parse(req.response));
			}
			else {
				onErrorHandle(req);
				reject(req);
			}
		};
		req.send(JSON.stringify(postObj));
	});
}

export function onErrorHandle(res:any) {
	try{
		var resJson = JSON.parse(res.response);
		console.error(resJson.message, "Server Error");
	}catch(e){
		console.error(res.response, "Network Error");
	}
}