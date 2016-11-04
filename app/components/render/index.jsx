import React from 'react';
import ReactDom from 'react-dom';

require('./index.scss');
// import "./App.scss";

// export default () => <h1>Hello World</h1>;

export default class RenderDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World1111ai am </h1>
    );
  }
}

ReactDom.render(<RenderDemo />, document.getElementById('app'));