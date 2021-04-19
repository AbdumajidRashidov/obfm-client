import React from 'react'
import 'materialize-css';
import {  Row, Col,Card,CardTitle,ProgressBar, Icon } from 'react-materialize'
import { Link } from 'react-router-dom';
import help from '../../Images/help.png'

const NeediesCard = () => {
    return (
        <div className="NeediesCard">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        className="cardNeedy"
                        header={<CardTitle image={help}></CardTitle>}
                    >
                        <p className="name">Abdumajid Rashidov</p>
                        <span className="age">20 yosh</span>
                        <p className="reason">Otasi yo’q yetim, onasi kasal balnitsada davolanmoqda.</p>
                        <ProgressBar progress={70}  />
                        <Row style={{marginBottom:"0"}}>
                            <Col s={6}>
                                <p className="amount_paid">470 000 <span>so'm</span></p>
                            </Col>
                            <Col s={6}>
                                <p className="amount_tobe_paid">600 000 <span>so'm</span></p>
                            </Col>
                        </Row>
                        <Link to="/volunteer-help" className="volunterHelp">
                            <span>Yordam bermoq</span>
                            <Icon className="iconChevron">chevron_right</Icon>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
        
    )
}
export default NeediesCard