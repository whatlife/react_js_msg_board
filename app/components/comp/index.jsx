import React from 'react';
import ReactDom from 'react-dom';

var HelloMessage = React.createClass({
    render: function(){
        return <h2>hello {this.props.name}</h2>;
    }
})

ReactDom.render(
    <HelloMessage name="John"/>,
    document.getElementById('app').appendChild(document.createElement('div'))
)