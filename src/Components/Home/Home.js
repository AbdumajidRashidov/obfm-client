import React from 'react';
import { BrowserRouter, Route, useHistory, Switch, Router } from 'react-router-dom'
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import Sidebar from './Sidebar'
import MainNewsFond from './MainNewsFond'
import MainNewsWorld from './MainNewsWorld'
import MainNewsUzb from './MainNewsUzb'
import SideNewsFond from './SideNewsFond'
import NeediesSlide from './NeediesSlide'
import Statistica from './Statistica'
import Testimonials from './Testimonials'
import Mediateka from './Mediateka'
import Payments from './Payment'
import UZMap from './UzMap'
import MainNewsSaxovat from './MainNewsSaxovat'
import SideNewsWorld from './SideNewsWorld'
import SideNewsUzb from './SideNewsUzb'
import SideNewsSaxovat from './SideNewsSaxovat'
import  HelpingButtons from './HelpingButtons'
const Routing = ()=>{
    const history = useHistory()
    
    return (
     
      <Switch>
        <Route path="/" exact>
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                        <Col s={12} m={12} l={6} ><MainNewsFond/></Col>
                    </Fade>
                </Slide>

                <Slide duration="1500" triggerOnce="true">
                    <Fade duration="1500"  triggerOnce="true">
                        <Col s={12} m={12} l={3}><SideNewsFond /></Col>
                    </Fade>
                </Slide>
        </Route>
        <Route path="/uzbnews">
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                        <Col s={6}><MainNewsUzb/></Col>
                    </Fade>
                </Slide>

                <Slide duration="1500" triggerOnce="true">
                    <Fade duration="1500"  triggerOnce="true">
                        <Col s={3}><SideNewsUzb /></Col>
                    </Fade>
                </Slide>
        </Route>
        <Route path="/worldnews">
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                        <Col s={6}><MainNewsWorld/></Col>
                    </Fade>
                </Slide>

                <Slide duration="1500" triggerOnce="true">
                    <Fade duration="1500"  triggerOnce="true">
                        <Col s={3}><SideNewsWorld /></Col>
                    </Fade>
                </Slide>
        </Route>
        <Route path="/saxovatnews">
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                        <Col s={6}><MainNewsSaxovat/></Col>
                    </Fade>
                </Slide>

                <Slide duration="1500" triggerOnce="true">
                    <Fade duration="1500"  triggerOnce="true">
                        <Col s={3}><SideNewsSaxovat /></Col>
                    </Fade>
                </Slide>
        </Route>
      </Switch>
        
    )
  }
const Home = () => {
    return (
        <div className="Home">
            <Container>
              <BrowserRouter>
                <Row>
                    <Slide duration="2500" triggerOnce="true">
                        <Fade duration="2500"  triggerOnce="true">
                            <Col s={12} m={6} l={3}><Sidebar isClicked="false" /> <HelpingButtons/></Col>
                        </Fade>
                    </Slide>
                    <Routing/>
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
                    <Payments/> 
                </Row>
                <Row>
                    <UZMap/>
                </Row>
              </BrowserRouter>
                
            </Container>
        </div>
    )
}
export default Home