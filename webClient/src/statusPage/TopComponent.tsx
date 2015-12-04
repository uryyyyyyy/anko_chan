import React = require('react');
import {Status} from "../util/Util";
import Util = require("../util/Util");
import {StatusTableComponent} from "./StatusTableComponent";
import {Error} from "../../node_modules/typescript/lib/lib.es6";

export interface State {
	list: Array<Status>;
}

export class TopComponent extends React.Component<{}, State> {

	public componentDidMount(){
		Util.getAllStatus().then(v => this.setState({list: v})).catch(v => console.log(v));
	}

	render() {
		if(this.state){
			return <div><StatusTableComponent list={this.state.list} /></div>
		}else{
			return <p>wait a minute</p>
		}
	}
}