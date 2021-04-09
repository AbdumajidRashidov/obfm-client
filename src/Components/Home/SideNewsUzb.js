import React from 'react';
import 'materialize-css'
import {  Card, CardTitle, Icon,Row, Col } from 'react-materialize'





const SideNewsUzb = () => {
    return (
        <div className="SideNews">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://storage.kun.uz/source/7/7YLy39aHRdJmfhVW32q17VKiI4whZ3qb.jpg"></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">O'zbekiston</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Сергели йўналишида метро ҳаракати тўхтаб қолди. Поезд тўхтаб қолгач, йўловчилар вагонлардан чиқиб пиёда йўлга тушган.</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://storage.kun.uz/source/7/K1OcX-zLhzjA9nzVkLhk3Why10OAh_c9.jpg"></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">O'zbekiston</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Қашқадарё ва Навоий вилоятлари ҳокимларига ҳайфсан берилди</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://storage.kun.uz/source/7/di2qv7G384MNpEwhGBWN14DTn5siQV4l.jpg"></CardTitle>}
                    >
                        
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">O'zbekiston</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">19.02.2021</span>
                            </Col>
                        </Row>
                        <p className="SideNewsContex">2021 йилги закот нисоби, фитр садақа ва фидя миқдори белгиланди</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default SideNewsUzb