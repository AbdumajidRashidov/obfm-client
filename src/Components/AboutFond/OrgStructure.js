import React from 'react';
import 'materialize-css'
import { Container,Col, Row } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";

const OrgStructure = () => {
    return (
        <div className="OrgStructure">
            <Row>
               <Col s={4}></Col>
               <Col s={12} m={4}>
               <Slide direction="down"  duration="1000" >
                   <Fade direction="down"  duration="1000">
                        <div className="vasiylikKengashi">
                            <p>Vasiylik kengashi</p>
                        </div>
                   </Fade>
               </Slide>
               </Col>
               <Col s={12} m={4}>
                   <Slide direction="down" duration="1000" delay="50" >
                       <Fade direction="down" duration="1000" delay="50">
                        <div className="taftishKomissiyasi">
                                <p>Taftish komissiyasi</p>
                            </div>
                       </Fade>
                   </Slide>
               </Col>
            </Row>
            <Row>
               <Col s={4}></Col>
               <Col s={12} m={4}>
                <Slide direction="down" duration="1000" delay="150">
                    <Fade direction="down"  duration="1000" delay="150">
                        <div className="ResBoshqaruvi">
                            <p>Respublika boshqaruvi</p>
                        </div>
                   </Fade>
                </Slide>
               </Col>
               <Col s={12} m={4}></Col>
            </Row>
            <Row>
               <Col s={12} m={4}></Col>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="200">
                    <Fade direction="down"  duration="1000" delay="200">
                    <div className="ResBoshqaruvi">
                        <p>Boshqaruv raisi</p>
                    </div>
                    </Fade>
                </Slide>
               </Col>
               <Col s={12} m={4}></Col>
            </Row>
            <Row>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="250">
                    <Fade direction="down" duration="1000" delay="250">
                        <div className="ResBoshqaruvi">
                            <p>Boshqaruv raisi orinbosari</p>
                        </div>
                    </Fade>
                </Slide>
                </Col>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="300">
                    <Fade direction="down"  duration="1000" delay="300">
                    <div className="ResBoshqaruvi">
                        <p>Tashkiliy - kadrlar bo’limi</p>
                    </div>
                   </Fade>
                </Slide>
               </Col>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="350">
                    <Fade direction="down" duration="1000" delay="350">
                   <div className="ResBoshqaruvi">
                       <p>Matbuot xizmati</p>
                   </div>
                   </Fade>
                </Slide>
               </Col>
            </Row>
            <Row>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="400">
                    <Fade direction="down" duration="1000" delay="400">
                   <div className="ResBoshqaruvi">
                       <p>Fuqarolar yig’inlarini qo’llab - quvvatlash, ijtimoiy - iqtisodiy masalalar bo’limi</p>
                   </div>
                   </Fade>
                </Slide>
                </Col>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="450">
                    <Fade direction="down"  duration="1000" delay="450">
                        <div className="ResBoshqaruvi">
                            <p>Moliya va iqtisod bo’limi</p>
                        </div>
                   </Fade>
                </Slide>
               </Col>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000" delay="500">
                    <Fade direction="down" duration="1000" delay="500">
                   <div className="ResBoshqaruvi">
                       <p>Axborot - kommunikatsiya texnologiyalarini rivojlantirish sho’basi</p>
                   </div>
                   </Fade>
                </Slide>
               </Col>
            </Row>
            <Row>
               <Col s={12} m={4}></Col>
               <Col s={12} m={4}>
               <Slide direction="down" duration="1000"  delay="550">
                    <Fade direction="down" duration="1000"  delay="550">
                   <div className="ResBoshqaruvi">
                       <p>Devonxona va murojaatlar bilan ishlash bo’limi</p>
                   </div>
                   </Fade>
                </Slide>
               </Col>
               <Col s={12} m={4}></Col>
            </Row>
            
        </div>
    )
}
export default OrgStructure