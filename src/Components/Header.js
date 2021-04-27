import React from 'react'
import 'materialize-css'
import { Col, Row, Container,Dropdown,Icon } from 'react-materialize';
import logo from '../Images/static/logo1.png'
import weather from '../Images/static/weather.svg';
import uzb from '../Images/static/uzb.svg'

const Header = () => {
    const valuta=[
        {
            id: 57,
            Ccy: "RUB",
            Rate: "140.81",
            Diff: "+0.63",
            "Date": "27.04.2021"
        },
        {
            id: 69,
            Code: "840",
            Ccy: "USD",
            Rate: "10548.18",
            Diff: "+8.66",
            "Date": "27.04.2021"
        }
    ]    
    return (
        <div className="header headerXl">
            <Container >
                <Row>
                    <Col s={8} m={7} l={8}>
                        <div className="logo_wrapp">
                            <img src={logo} />
                            <p>“Mahalla” xayriya jamoat fondi</p>
                        </div>
                    </Col>
                    <Col s={4} m={5} l={4}  >
                        <div className="weather_lang_valute">
                            <Row>
                                <Col s={6}>
                                    <div className="weather">
                                        <img src={weather} />
                                        <span className="weather_count">7</span>
                                        <span className="weather_celsiy_circle">&deg;</span>
                                        <span className="weather_celsiy">C</span>
                                        <p className="usdvalute"><span className="usd">{valuta[1].Ccy}</span> = <span className="usd_count">{valuta[1].Rate}</span>  <span className="usd_balance">{valuta[1].Diff}</span></p>
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
                                        
                                        <p className="usdvalute"><span className="usd">{valuta[0].Ccy}</span> = <span className="usd_count">{valuta[0].Rate}</span>  <span className="usd_balance">{valuta[0].Diff}</span></p>
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