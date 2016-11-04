import React from 'react';
import ReactDom from 'react-dom';

var FetchUrl = React.createClass({
      
    componentWillMount: function(){
        var data = [];
        var htmlDom = [];
        var headers = new Headers({
            "Origin": "http://douban.com"
            });
            headers.append("Content-Type", "text/plain");

            var init = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default',
                'Access-Control-Allow-Origin': '*'
            };

        var url = 'https://api.douban.com/v2/movie/top250?count=10';
        fetch(url, init).then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.error('error'));
    },
    render: function(){
        var that = this;
        return <div>
            <p>
            {that.props.name}
            </p> 
            <p className="fetchDemo">
                正在加载...
                这个fetch的用法还未解决。。。
            </p>
        </div>;
    }
});

ReactDom.render(
    <FetchUrl name="我是用Fetch获取json的，谢谢"/>,
    document.getElementById('app').appendChild(document.createElement('div'))
)