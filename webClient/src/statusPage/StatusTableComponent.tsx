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
                        <td><SlideComponent active={true} change={(v:any) => console.log(v)} /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>name2</td>
                        <td>topic2</td>
                        <td><SlideComponent active={false} change={(v:any) => console.log(v)} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
