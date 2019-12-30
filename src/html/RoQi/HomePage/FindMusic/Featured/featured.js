
import React from 'react'
import { Carousel, Card,Icon } from 'antd';
import Featuredless from './featured.less';


const { Meta } = Card;

var FeaturedCss = require('./featured.css')
export default class Featured extends React.Component {

    render() {
        return (
            <div>
                <div className={FeaturedCss.lunbot}>
                    <Carousel autoplay >
                        <div>
                            <img className={FeaturedCss.lunbot1} src={require('../../../../../image/1 (1).jpg')} alt="标签" />
                        </div>
                        <div>
                            <img className={FeaturedCss.lunbot1} src={require('../../../../../image/1 (2).jpg')} alt="标签" />
                        </div>
                        <div>
                            <img className={FeaturedCss.lunbot1} src={require('../../../../../image/1 (3).jpg')} alt="标签" />
                        </div>
                        <div>
                            <img className={FeaturedCss.lunbot1} src={require('../../../../../image/1 (4).jpg')} alt="标签" />
                        </div>
                    </Carousel>
                </div>
                <div>
                    <div>
                    <p className={FeaturedCss.p1}>精选歌单</p>
                    <p className={FeaturedCss.more}> 更多<Icon type="arrow-right" /></p>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (1).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (2).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (3).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (4).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    </div>
                    <div>
                    <p className={FeaturedCss.p1}>精选视频</p>
                    <p className={FeaturedCss.more}> 更多<Icon type="arrow-right" /></p>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (2).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (3).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (4).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (1).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    </div>
                    <div>
                    <p className={FeaturedCss.p1}>精选电台</p>
                    <p className={FeaturedCss.more}> 更多<Icon type="arrow-right" /></p>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (3).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (4).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (1).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (2).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                    </div>
                </div>
            </div>

        )
    }
}

