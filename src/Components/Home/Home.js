import React from 'react';
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import Sidebar from './Sidebar'
import MainNews from './MainNews'
import SideNews from './SideNews'
import NeediesSlide from './NeediesSlide'
import Statistica from './Statistica'
import Testimonials from './Testimonials'
import Mediateka from './Mediateka'
import Payments from './Payment'
import UZMap from './UzMap'
const Home = () => {
    return (
        <div className="Home">
            <Container>
              
                <Row>
                    <Slide duration="2500" triggerOnce="true">
                        <Fade duration="2500"  triggerOnce="true">
                             <Col s={3}><Sidebar/></Col>
                        </Fade>
                    </Slide>
                        
                    <Slide duration="2000" triggerOnce="true">
                        <Fade duration="2000"  triggerOnce="true">
                            <Col s={6}><MainNews/></Col>
                        </Fade>
                    </Slide>

                    <Slide duration="1500" triggerOnce="true">
                        <Fade duration="1500"  triggerOnce="true">
                            <Col s={3}><SideNews /></Col>
                        </Fade>
                    </Slide>
                </Row>
                <Row>
                    <NeediesSlide/>
                </Row>
                <Row>
                    <Statistica/>
                </Row>
                <Row>
                    <Testimonials/>
                </Row>
                <Row>
                     <Slide duration="2500" triggerOnce="true">
                        <Fade duration="2500"  triggerOnce="true">
                            <Mediateka />
                        </Fade>
                    </Slide>
                </Row>
                <Row>
                     <Slide duration="2500" direction="right" triggerOnce="true">
                        <Fade duration="2500"  triggerOnce="true">
                            <Payments/>
                        </Fade>
                    </Slide>
                </Row>
                <Row>
                <Slide duration="2500" triggerOnce="true">
                        <Fade duration="2500"  triggerOnce="true">
                            <UZMap/>
                        </Fade>
                </Slide>
                </Row>
            </Container>
        </div>
    )
}
export default Home