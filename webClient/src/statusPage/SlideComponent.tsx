import React = require('react');
import {Status} from "../util/Util";
import ReactDOM = require('react-dom');

export interface Props {
	active: boolean;
	change: (s:boolean)=> void;
}

export interface State {
	$selector: JQuery;
}

export class SlideComponent extends React.Component<Props, State> {

	public componentDidMount(){
		let selector:Element = ReactDOM.findDOMNode(this);
		let $selector = $(selector).bootstrapSwitch();
		this.setState({$selector: $selector});
		$selector.on('switchChange.bootstrapSwitch', (event, state) => {
			this.props.change(state);
		});
	}

	render() {
		return <input type="checkbox" defaultChecked={this.props.active} />;
	}
}