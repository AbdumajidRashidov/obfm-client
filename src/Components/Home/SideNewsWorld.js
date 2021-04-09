import React from 'react';
import 'materialize-css'
import {  Card, CardTitle, Icon,Row, Col } from 'react-materialize'





const SideNewsWorld = () => {
    return (
        <div className="SideNews">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://storage.kun.uz/source/7/ols8kQpMK2OkTOZ10c4tPBfPIHHO0s9o.jpg"></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Jahon</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Путин ўзига яна Россия президентлигига сайланиш имконини берувчи қонунни имзолади</p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://storage.kun.uz/source/7/K1OcX-zLhzjA9nzVkLhk3Why10OAh_c9.jpg"></CardTitle>}
                    >
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Jahon</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">21.02.2021</span>
                            </Col>
                            
                        </Row>
                        <p className="SideNewsContex">Британиянинг энг бой одамларидан бири ўз уйида ўлдириб кетилди </p>
                    </Card>
                    <Card
                        className="SideNewsCard"
                        header={<CardTitle image="https://storage.kun.uz/source/7/crwoxCeLoPjmK7l8Al9E0ojk-yTkstS9.jpg"></CardTitle>}
                    >
                        
                        <Row>
                            <Col s={6}>
                                <span className="categorynews">Jahon</span>
                            </Col>
                            <Col s={6} className="accessTime">
                                <Icon className="accessTimeIcon">access_time</Icon>
                                <span className="accessDate">19.02.2021</span>
                            </Col>
                        </Row>
                        <p className="SideNewsContex">Уҳанда карантин бекор қилинганининг бир йиллиги нишонланди</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default SideNewsWorld