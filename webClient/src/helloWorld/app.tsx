import React = require('react');
import ReactDOM = require('react-dom');

import util = require("./util");
import {MyComponent} from "./MyCompoment";

ReactDOM.render(<MyComponent content="Hello World" />, document.getElementById('app'));

console.log(util.hello("aa"));
