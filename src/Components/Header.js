import React from 'react'
import 'materialize-css'
import { Col, Row, Container,Dropdown,Icon } from 'react-materialize';
import logo from '../Images/static/logo1.png'
import weather from '../Images/static/weather.svg';
import uzb from '../Images/static/uzb.svg'

const Header = () => {
    return (
        <div className="header">
            <Container >
                <Row>
                    <Col s={8}>
                        <div className="logo_wrapp">
                            <img src={logo} />
                            <p>“Mahalla” xayriya jamoat fondi</p>
                        </div>
                    </Col>
                    <Col s={4}>
                        <div className="weather_lang_valute">
                            <Row>
                                <Col s={6}>
                                    <div className="weather">
                                        <img src={weather} />
                                        <span className="weather_count">7</span>
                                        <span className="weather_celsiy_circle">&deg;</span>
                                        <span className="weather_celsiy">C</span>
                                        <p className="usdvalute"><span className="usd">USD</span> = <span className="usd_count">10449.44</span>  <span className="usd_balance">-27.48</span></p>
                                    </div>
                                </Col>
                                <Col s={6}>
                                     <div className="lang">
                                        <Dropdown
                                            className="dropdown"
                                            id="Dropdown_6"
                                            options={{
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                container: null,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                            }}
                                            trigger={
                                                <div className="dropdown_lang">
                                                    <p>O'z</p>
                                                    <img src={uzb} />
                                                    <Icon className="dropdown_icon">expand_more</Icon>
                                                </div>
                                                
                                            }
                                            >
                                            <a href="#">
                                               UZB
                                            </a>
                                            <a href="#">
                                                RU
                                            </a>
                                            <a href="#">
                                                ENG
                                            </a>
                                        </Dropdown>
                                        
                                        <p className="usdvalute"><span className="usd">RUB</span> = <span className="usd_count">140.44</span>  <span className="usd_balance">-53.48</span></p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;