import React from 'react';
import { BrowserRouter, Route, useHistory, Switch, Router } from 'react-router-dom'
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import MediatekaSidebar from './mediatekaSidebar'
import Fotogalereya from './Fotogallery'
import Videogalereya from './Videogallery'


const Routing = ()=>{
    const history = useHistory()
    
    return (
     
      <Switch>
        <Route path="/mediateka" exact>
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><Fotogalereya/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/videogalereya">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        <Col s={9}><Videogalereya/></Col>
                </Fade>
            </Slide>
        </Route>
        <Route path="/audiogalereya">
            <Slide duration="1500" triggerOnce="true">
                <Fade duration="1500"  triggerOnce="true">
                        {/* <Col s={9}><Management/></Col> */}
                </Fade>
            </Slide>
        </Route>
        
      </Switch>
        
    )
  }
const Mediateka = ()=>{
    return(
        <Container>
            <BrowserRouter>
            <Row>
                <Slide duration="2000" triggerOnce="true">
                    <Fade duration="2000"  triggerOnce="true">
                            <Col s={3}><MediatekaSidebar/></Col>
                    </Fade>
                </Slide>
                <Routing/>
            </Row>
            </BrowserRouter>
            
        </Container>
    )
}

export default Mediateka