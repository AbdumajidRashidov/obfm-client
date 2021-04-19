import React from 'react';
import { BrowserRouter, Route, useHistory, Switch, Router } from 'react-router-dom'
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import Notifications from './Notifications'
import PressServiceSidebar from './PressServiceNav'
const Routing = ()=>{
    const history = useHistory()
    
    return (
     
      <Switch>
        <Route path="/press-service" exact>
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><Notifications/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/contact-press-service">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        {/* <Col s={9}><PressServiceSidebar/></Col> */}
                </Fade>
            </Slide>
        </Route>
        <Route path="/management-statements">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        {/* <Col s={9}><PressServiceSidebar/></Col> */}
                </Fade>
            </Slide>
        </Route>
       
      </Switch>
        
    )
  }
const PressService = ()=>{
    return(
        <Container>
            <BrowserRouter>
            <Row>
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                            <Col s={3}><PressServiceSidebar/></Col>
                    </Fade>
                </Slide>
                <Routing/>
            </Row>
            </BrowserRouter>
            
        </Container>
    )
}

export default PressService