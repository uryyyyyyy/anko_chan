import http = require('./Http');
import _ = require('lodash');

export class Status {
	constructor(public id: number,
	            public name: string,
	            public topic: string,
	            public active: boolean) {}

	toString(): string {
		return this.id + ", " + this.name + ", " + this.topic + ", " + this.active;
	}
}

export function getAllStatus():Promise<Array<Status>>{
	let url = "https://qzurklbmoc.execute-api.ap-northeast-1.amazonaws.com/prod/getAllStatus";
	return http.getJson(url).then(v => _.map(v, (vv:any) => new Status(vv.id, vv.name, vv.topic, vv.active)));
}

export function getPostStatus(s:Status):Promise<any>{
	let url = "https://z6ucxjagyk.execute-api.ap-northeast-1.amazonaws.com/prod/Anko_Chan_update";
	return http.postJson(url, s);
}