import React from 'react';
import {Row ,Col,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component{
     render(){

         const settings = {
             dots:true,
             infinite:true,
             speed:500,
             slidesToShow:1,
             autoplay:true
         };
         return (
            <div>
                <Row>
                    <Col span={2} ></Col>
                    <Col span={22} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/c1.jpg" /></div>
                                    <div><img src="./src/images/c2.jpg" /></div>
                                    <div><img src="./src/images/c3.jpg" /></div>
                                    <div><img src="./src/images/c4.jpg" /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="shehui" width="400px" cartTitle="社会头条" imageWidth="112px" />
                        </div>
                        <Tabs class="tabs_news">
							<TabPane tab="国内" key="1">
								<PCNewsBlock count={22} type="guonei" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
                        <Tabs class="tabs_product">
                            <TabPane tab="Reactnews 产品" key="1" >
                                <PCProduct />
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
                            <PCNewsImageBlock count={8} type="tiyu" width="1169px" cartTitle="体育新闻" imageWidth="132px" />
                            <PCNewsImageBlock count={8} type="keji" width="1169px" cartTitle="科技新闻" imageWidth="132px" />
                        </div>
                    </Col>
                </Row>
            </div>
         );
     };
 }