import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import VolunteerHelpSidebar from './VolunteerHelpNav'
import ChairtableDonation from './CharitableDonations'
import GetHelp from './GetHelp'
const Routing = ()=>{
    return (
      <Switch>
        <Route path="/volunteer-help" exact>
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={12} l={9}><ChairtableDonation/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/gethelp">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={12} l={9}><GetHelp/></Col>
                </Fade>
            </Slide>
        </Route>
       
      </Switch>
        
    )
  }
const VolunteerHelp = ()=>{
    return(
        <Container>
            <BrowserRouter>
            <Row>
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                            <Col s={3}><VolunteerHelpSidebar/></Col>
                    </Fade>
                </Slide>
                <Routing/>
            </Row>
            </BrowserRouter>
            
        </Container>
    )
}

export default VolunteerHelp