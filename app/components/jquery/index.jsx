import React from 'react';
import ReactDom from 'react-dom';

// var $ = require('jquery'); 
import $ from 'zepto';

var IncludeJquery = React.createClass({
    
    componentWillMount: function(){
        var data = [];
        var htmlDom = [];
        $.ajax({
            url: 'https://api.douban.com/v2/movie/top250?count=10',
            data: data,
            dataType: 'jsonp',
            success: function(data) {
                for(var i=0;i< data.subjects.length;i++) {
                    htmlDom += '<li>'+data.subjects[i].title+'</li>';
                }
                console.log(htmlDom);
                $('.jqueryDemo').html("标题：" + data.title +" 总数"+ data.total).append("<p>前 10 名</p>"+htmlDom);
            }
        });
    },
    render: function(){
        var that = this;
        return <div>
            <p>
            {that.props.name}
            </p> 
            <p className="jqueryDemo">
                正在加载...
            </p>
        </div>;
    }
})

ReactDom.render(
    <IncludeJquery name="我是引进的Jquery库，谢谢！"/>,
    document.getElementById('app').appendChild(document.createElement('div'))
)
