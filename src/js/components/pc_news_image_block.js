import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class PCNewsImageBlock extends React.Component{
    constructor(){
        super();
        this.state ={
            news:''
        };
    }
    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type
        +"&count="+this.props.count,myFetchOptions)
        .then(response=>response.json())
        .then(json=>this.setState({news:json}));
    };
    render(){
        const styleImage= {
            display:"block",
            width: this.props.imageWidth,//注意这种新用法
            height:"90px"
        };
        const styleH3= {
            width:this.props.imageWidth,
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        };
        const imagp= {
            width:this.props.imageWidth
        }
        const {news} = this.state;//注意这里这种解构赋值的方法,不能写作news=this.state.news
        const newsList = news.length
        ? news.map((newsItem,index) => 
        <div key={index} class="imageblock" >
            <Link to={`details/${newsItem.uniquekey}`} target="_target">
                <div class="custom-image">
                    <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
                </div>
                <div class="custom-card" >
                    <h3 style={styleH3}>{newsItem.title}</h3>
                    <p style={imagp}>{newsItem.author_name}</p>
                </div>
            </Link>
        </div>)
        :
        '没有加载到任何新闻';
        return (
            <div class="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style ={{width:this.props.width}} >
                        {newsList}
                </Card>
            </div>
        );
    };
}