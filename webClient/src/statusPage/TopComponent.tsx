import React = require('react');
import {Status} from "../util/Util";
import Util = require("../util/Util");
import {StatusTableComponent} from "./StatusTableComponent";

export interface State {
	list: Array<Status>;
}

export class TopComponent extends React.Component<{}, State> {

	public componentDidMount(){
		Util.getAllStatus().then(v => this.setState({list: v})).catch(v => console.log(v));
	}

	post(s:Status): void{
		Util.getPostStatus(s).then(v => console.log(v));
	}

	render() {
		if(this.state){
			return <div><StatusTableComponent list={this.state.list} change={this.post}/></div>
		}else{
			return <div></div>
		}
	}
}
