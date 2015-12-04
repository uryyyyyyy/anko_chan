import React = require('react');
import {Status} from "../util/Util";
import Util = require("../util/Util");
import {SlideComponent} from "./SlideComponent";

export interface Props {
    list: Array<Status>;
}

export class StatusTableComponent extends React.Component<Props, {}> {

    public componentDidMount(){
        Util.getAllStatus().then(v => this.setState({list: v}));
    }

    render() {
        var nodes = this.props.list.map(p => {
            return (
                <p key={p.id}>{p.name +" " + p.id}</p>
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
                    <tr>
                        <td>1</td>
                        <td>name1</td>
                        <td>topic1</td>
                        <td><input type="checkbox" name="my-checkbox" defaultChecked={true} /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>name2</td>
                        <td>topic2</td>
                        <td><input type="checkbox" name="my-checkbox" /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
