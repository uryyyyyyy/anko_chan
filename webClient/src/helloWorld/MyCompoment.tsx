import React = require('react');

export interface Props {
    content: string;
}

export class MyComponent extends React.Component<Props, {}> {
    render() {
        return <div>{this.props.content}</div>
    }
}
