import React from 'react';
import ReactDom from 'react-dom';

var NodeList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function(child) {
          return <li>{child}</li>;
        })
      }
      </ol>
      )

  }
})

ReactDom.render(
  <NodeList>
    <span>hello</span>
    <span>world</span>
  </NodeList>,
  document.getElementById('app').appendChild(document.createElement('div'))
);
