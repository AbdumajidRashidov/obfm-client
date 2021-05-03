import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import NeediesCard from '../Home/NeedyCard'
import payme from '../../Images/static/payme.svg';
import click from '../../Images/static/click.svg';
import visa from '../../Images/static/visa.svg';
import upay from '../../Images/static/upay.svg';

const NeediesID =()=>{
    return(
        <Container>
            <Row>
                <Col s={4}>
                    <NeediesCard/>
                </Col>
                <Col s={8}>
                    <Row className="images">
                        <Col s={4}>
                            <img width="100%" src="https://camo.githubusercontent.com/5f28e30190c82e20f1a7fa47e25d525a1973ea8b037bde86d6de1f2a002764a5/68747470733a2f2f73696d706c652d72656163742d6c69676874626f782e6465762f646f63732f53524c5f4578616d706c65315f4769742e6a706567"/>
                        </Col>
                        <Col s={4}>
                            <img width="100%" src="https://camo.githubusercontent.com/5f28e30190c82e20f1a7fa47e25d525a1973ea8b037bde86d6de1f2a002764a5/68747470733a2f2f73696d706c652d72656163742d6c69676874626f782e6465762f646f63732f53524c5f4578616d706c65315f4769742e6a706567"/>
                        </Col>
                        <Col s={4}>
                            <img width="100%" src="https://camo.githubusercontent.com/5f28e30190c82e20f1a7fa47e25d525a1973ea8b037bde86d6de1f2a002764a5/68747470733a2f2f73696d706c652d72656163742d6c69676874626f782e6465762f646f63732f53524c5f4578616d706c65315f4769742e6a706567"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6}>
                            <h1>Shaxsiy malumotlari</h1>
                            <p>ID raqami: <span>00120</span></p>
                            <p>Ism Familiyasi: <span>Abdumajid Rashidov</span></p>
                            <p>Yoshi: <span>20 yosh</span></p>
                            <p>Ma'lumot: <span>Otasi yo’q yetim, onasi kasal balnitsada davolanmoqda.Otasi yo’q yetim, onasi kasal balnitsada davolanmoqda.</span></p>
                        </Col>
                        <Col s={6}>
                            <h1>To'lov usullari</h1>
                            <Row>
                                <Col s={6} className="payme" style={{marginBottom:"20px"}}>
                                    <Link to="/payments/payme"><img width="70%" src={payme}></img></Link>
                                </Col>
                                <Col s={6} className="visa" style={{marginBottom:"30px"}}>
                                    <Link to="/payments/visa"><img width="70%" src={visa}></img></Link>
                                </Col>
                                <Col s={6} className="upay">
                                    <Link to="/payments/upay"><img width="70%" src={upay}></img></Link>
                                </Col>
                                <Col s={6} className="click">
                                    <Link to="/payments/click"><img width="70%" src={click}></img></Link>
                                </Col>
                            </Row>          
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
        
    )
}
export default NeediesID