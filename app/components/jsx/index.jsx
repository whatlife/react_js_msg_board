import React from 'react';
import ReactDom from 'react-dom';

import "./index.scss";

var names = ['Alice', 'Emily', '我是绿色'];

ReactDom.render(
    <div>
    {
        names.map(function (name, key){
            return <div key={key} className="name_list"> hello: {name}!</div>
        })
    }
    </div>,
    document.getElementById('app').appendChild(document.createElement('div'))
);
