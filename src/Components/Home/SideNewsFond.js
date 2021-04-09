import React from 'react';
import 'materialize-css'
import {  Card, CardTitle, Icon,Row, Col } from 'react-materialize'
import SideNewsImg1 from '../../Images/sidenewsimg.png'
import SideNewsImg2 from '../../Images/sidenewsimg2.png'
import SideNewsImg3 from '../../Images/sidenewsimg3.png'




const SideNews = () => {
    return (
        <div className="SideNews">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image={SideNewsImg1}></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Fond</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Ma’naviyat va ijodni qo‘llab - quvvatlash fondi tashkil etiladi</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image={SideNewsImg2}></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Fond</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Hukumat kengayishinig zararlari haqida aytildi</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image={SideNewsImg3}></CardTitle>}
                    >
                        
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Fond</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">19.02.2021</span>
                            </Col>
                        </Row>
                        <p className="SideNewsContex">Jizzaxda qurilish sohasidagi mojarolar ortidan prezident uni...</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default SideNews