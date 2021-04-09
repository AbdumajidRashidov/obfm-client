import React from 'react';
import 'materialize-css'
import {  Card, CardTitle, Icon,Row, Col } from 'react-materialize'





const SideNewsSaxovat = () => {
    return (
        <div className="SideNews">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://obfm.uz/uploads/2020/09/uza-detail.jpg"></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Saxovat va Ko'mak</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Pandemiya davrida “Saxovat va ko‘mak” jamg‘armasi ehtiyojmand oilalarga qariyb 105 milliard so‘m naqd pul tarqatdi</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://obfm.uz/uploads/2020/09/photo2020-09-2215-24-16-detail.jpg"></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Saxovat va Ko'mak</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Navoiyda “Saxovat va ko‘mak” umumxalq harakati bolalar nigohida” shiori ostida onlayn rasmlar tanlovi o‘tkaziladi</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://obfm.uz/uploads/2020/05/news1.png"></CardTitle>}
                    >
                        
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Saxovat va Ko'mak</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">19.02.2021</span>
                            </Col>
                        </Row>
                        <p className="SideNewsContex">Sahovat va ko‘mak Bu safar Mirzo-Ulug‘bek tumani 2-son IIB xodimlari </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default SideNewsSaxovat