import React from 'react';
import 'materialize-css'
import { Container, Row, Col, Icon } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";

const Contact = ()=>{
    return(
        <Container>
            <Row>
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                            <h1>Biz bilan bog’laning </h1>
                            <Col s={12}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.410678676199!2d69.2847483!3d41.3120686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf6944e05cf6bdb1!2s%22Mahalla%22%20xayriya%20jamoat%20fondi!5e0!3m2!1sru!2s!4v1618038816193!5m2!1sru!2s" width="100%" height="500" style={{border:"0",marginBottom:"120px"}} ></iframe>
                            </Col>
                            <div className="contactContent">
                                <p className="contactLocation">Manzil</p>
                                <p className="location"><Icon>location_on</Icon><span>100047, O‘zbekiston Respublikasi, Toshkent shahri, Yashnobod tumani, Xorazm ko‘chasi, 51-uy </span></p>
                                <p className="bus"><Icon>directions_bus</Icon><span>28 44 53 76 89 91 98 115 141 144</span></p>
                                <p className="metro"><Icon>directions_subway</Icon><span>Yunus Rajabiy</span><span>Amir Temur hiyoboni</span></p>
                                <p className="working_hours"><Icon>access_time</Icon><span>Dushanba - Juma</span> <span>9:00 - 18:00</span></p>
                                <p className="contactNumbers">Aloqa</p>
                                <p className="Helpline"><sapn>Ishonch telefoni</sapn>  <span>10-93</span></p>
                                <p className="phone"><Icon>phone</Icon><span>+998 71 241 08 50</span></p>
                                <p className="email"><Icon>mail</Icon><span>mahallaxayriya@gmail.com</span></p>
                            </div>
                    </Fade>
                </Slide>
            </Row>
        </Container>
    )
}

export default Contact