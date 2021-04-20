import React from 'react';
import 'materialize-css'
import { Container, Row, Col, Button, Icon } from 'react-materialize'
import { Slide, Fade } from "react-awesome-reveal";
import logo from '../Images/static/logo1.png'
import { Link } from 'react-router-dom';
import logoIsolutions from '../Images/static/isolutions.png'
import { SocialIcon } from 'react-social-icons';

const Footer = ()=>{
    return(
        <div className="footer">
            <Container>
            <Row>
                <Col s={12} l={3} m={6}>
                    <div className="footerCol">
                        <ul className="footerList">
                            <li className="footerListItem">
                                <div className="footerLogo">
                                    <img src={logo}></img>
                                    <p>Mahalla xayriya jamoat fondi</p>
                                </div>
                            </li>
                            <li className="footerListItem">
                                <Link to='/getHelp'><Button className="getHelpbutton">Murojaat qilmoq</Button></Link>
                            </li>
                            <li className="footerListItem">
                                <Link to='/sitemap'><Button className="sitemapbutton">Sayt xaritasi</Button></Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col s={12} l={3} m={6}>
                    <div className="footerCol">
                        <ul className="footerList">
                            <li className="footerListItemHead">
                                Ko’ngilli yordam
                            </li>
                            <li className="footerListItem">
                                <Link to='/accaunt-numbers' className="footerListItemLink">Hisob raqamlar</Link>
                            </li>
                            <li className="footerListItem">
                                <Link to='/volunteer-help'  className="footerListItemLink">Yordam bermoqchiman</Link>
                            </li>
                            <li className="footerListItem">
                                <Link to='/charitable-donations'  className="footerListItemLink">Ko’rsatilgan xayriyalar</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col s={12} l={3} m={6}>
                    <div className="footerCol">
                        <ul className="footerList">
                            <li className="footerListItemHead">
                                Biz haqimizda
                            </li>
                            <li className="footerListItem">
                                <Link to='/management'  className="footerListItemLink">Rahbariyat</Link>
                            </li>
                            <li className="footerListItem">
                                <Link to='/regions'  className="footerListItemLink">Xududiy fontlar</Link>
                            </li>
                            <li className="footerListItem">
                                <Link to='/suborganizations'  className="footerListItemLink">Tasaruffidagi tashkilotlar</Link>
                            </li>
                            <li className="footerListItem">
                                <Link to='/charter'  className="footerListItemLink" >Ustav</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col s={12} l={3} m={6}>
                    <div className="footerCol">
                        <ul className="footerList">
                            <li className="footerListItemHead">
                                Bog’lanish
                            </li>
                            <li className="footerListItem">
                                <Link to='contact'  className="footerListItemLink">
                                    <Icon>phone</Icon>
                                    +998 71 232 17 56
                                </Link>
                            </li>
                            <li className="footerListItem">
                                <a href='https://mail.google.com/mahallahayriya@gmail.com' target="blank" className="footerListItemLink">
                                    <Icon>mail</Icon>
                                    mahallahayriya@gmail.com
                                </a>
                            </li>
                            <li className="footerListItem">
                                <a href='https://goo.gl/maps/eYCYqTZuZ7rqddMd8' target="blank"  className="footerListItemLink">
                                    <Icon>location_on</Icon>
                                    O'zbekiston Respublikasi, Toshkent sh., Xorazm ko'chasi, 51, Index: 100000
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="footerBottom">
                <Col s={12} l={4}>
                    <a href="https://i-solutions.uz" target="blank"><img src={logoIsolutions}/></a>
                </Col>
                <Col s={12} l={4} className="copyWrap">
                    <p className="copyMahalla">Mahalla xayriya jamoat fondi</p>
                    <p className="copy"><span>&copy;</span> 2021 “I solutions” Barcha xuquqlar himoyalangan.</p>
                </Col>
                <Col s={12} l={4}>
                    <div className="socials">
                        <div className="socialsWrap">
                            <SocialIcon target="blank" url="http://instagram.com/mahallavaoilavazirligi/" bgColor="white" fgColor="#2C3E50"  />
                            <SocialIcon target="blank"  url="https://twitter.com" bgColor="white" fgColor="#2C3E50" />
                            <SocialIcon target="blank"  url="https://telegram.me/mahallavaoilainfo" bgColor="white" fgColor="#2C3E50" />
                            <SocialIcon target="blank"  url="http://facebook.com/mahallavaoilavazirligi/" bgColor="white" fgColor="#2C3E50" />
                            <SocialIcon target="blank"  url="https://youtube.com" bgColor="white" fgColor="#2C3E50" />
                        </div>
                    </div>
                </Col>
            </Row>
    </Container>
        </div>
    )
}
export default Footer