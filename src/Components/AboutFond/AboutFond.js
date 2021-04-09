import React from 'react';
import { BrowserRouter, Route, useHistory, Switch, Router } from 'react-router-dom'
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import AboutFondSidebar from './AboutFondSidebar'
import AboutFondMainBlock from './AboutFondMainBlock'
import Management from './Management'
import Charter from './Charter'
import SubOrganizations from './SubOrganizations'
const Routing = ()=>{
    const history = useHistory()
    
    return (
     
      <Switch>
        <Route path="/aboutfond" exact>
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><AboutFondMainBlock/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/management">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><Management/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/central-management">
            
        </Route>
        <Route path="/organization-structure">
            
        </Route>
        <Route path="/charter">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><Charter/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/resgions">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><Management/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/suborganizations">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><SubOrganizations/></Col>
                </Fade>
            </Slide>
        </Route>
      </Switch>
        
    )
  }
const AboutFond = ()=>{
    return(
        <Container>
            <BrowserRouter>
            <Row>
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                            <Col s={3}><AboutFondSidebar/></Col>
                    </Fade>
                </Slide>
                <Routing/>
            </Row>
            </BrowserRouter>
            
        </Container>
    )
}

export default AboutFond