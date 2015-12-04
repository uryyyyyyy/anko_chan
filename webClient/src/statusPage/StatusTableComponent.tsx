import React = require('react');
import {Status} from "../util/Util";
import Util = require("../util/Util");
import {SlideComponent} from "./SlideComponent";
import {State} from "./SlideComponent";

export interface Props {
	list: Array<Status>;
	change: (s:Status)=> void;
}

export class StatusTableComponent extends React.Component<Props, {}> {

	render() {
		var nodes = this.props.list.map(p => {
			return (
				<StatusTdComponent key={p.id} status={p} change={this.props.change}/>
			);
		});
		return (
			<table className="table">
				<caption>"Anko chan" management console</caption>
				<thead>
					<tr>
						<th>#</th>
						<th>name</th>
						<th>mqtt topic</th>
						<th>on/off</th>
					</tr>
				</thead>
				<tbody>
					{nodes}
				</tbody>
			</table>
		);
	}
}


interface Props_2 {
	key: any;
	status: Status;
	change: (s:Status)=> void;
}

class StatusTdComponent extends React.Component<Props_2, {}> {

	changeStatusActive(b:boolean){
		let s = new Status(
			this.props.status.id,
			this.props.status.name,
			this.props.status.topic,
			b
		);
		this.props.change(s);
	}

	render() {
		var p = this.props.status;
		return (
			<tr>
				<td>{p.id}</td>
				<td>{p.name}</td>
				<td>{p.topic}</td>
				<td><SlideComponent active={p.active} change={this.changeStatusActive.bind(this)} /></td>
			</tr>
		);
	}
}
