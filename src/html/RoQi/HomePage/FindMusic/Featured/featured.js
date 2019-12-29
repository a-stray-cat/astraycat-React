import React from 'react'
import { Carousel, Card } from 'antd';
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
                    <Card className={ FeaturedCss.card}
                        hoverable
                        style={{ width: 120 } }
                        cover={<img alt="example" src={require( '../../../../../image/2 (1).jpg')} />}
                    >
                        <Meta title="王者荣耀" className={Featuredless.customSelect}  />
                    </Card>
                </div>
            </div>

        )
    }
}