import React = require('react');
import {Status} from "../util/Util";
import ReactDOM = require('react-dom');

export interface Props {
	active: boolean;
	change: Function;
}

export interface State {
	$selector: Element;
}

export class SlideComponent extends React.Component<Props, State> {

	public componentDidMount(){
		let selector:Element = ReactDOM.findDOMNode(this);
		this.setState({$selector: selector});
		let $select2 = $(selector).bootstrapSwitch();
	}

	render() {
		return <input type="checkbox" defaultChecked={this.props.active} />;
	}
}