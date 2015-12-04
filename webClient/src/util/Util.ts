import http = require('./Http');
import _ = require('lodash');

export class Status {
	constructor(public id: number,
	            public name: string,
	            public topic: string) {}

	toString(): string {
		return this.id + ", " + this.name + ", " + this.topic;
	}
}

export function getAllStatus():Promise<Array<Status>>{
	let url = "webAPI/getAllStatus.json";
	return http.getJson(url).then(v => _.map(v, (vv:any) => new Status(vv.id, vv.name, vv.topic)));
}