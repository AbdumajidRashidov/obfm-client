import React from 'react'
import 'materialize-css'
import { Col, Row, Container,Dropdown,Icon,SideNav,SideNavItem } from 'react-materialize';
import logo from '../Images/static/logo1.png'
import weather from '../Images/static/weather.svg';
import uzb from '../Images/static/uzb.svg'

const HeaderMobile = () => {
    return (
        <div className="header headerMobile" style={{marginBottom:"20px"}}>
            <Container >
                <Row>
                    <Col s={11} m={11} l={8}>
                        <div className="logo_wrapp">
                            <img src={logo} />
                            <p>“Mahalla” xayriya jamoat fondi</p>
                        </div>
                    </Col>
                    <Col s={1} m={1} l={4} style={{marginTop:"30px"}} >
                    <div>
                        <style>
                            {`
                                    #root > div > div {
                                    z-index: 99999 !important;
                                    }
                                `}
                        </style>
                        <SideNav
                            id="SideNav-10"
                            options={{
                            draggable: true
                            }}
                            trigger={<Icon node="button">menu</Icon>}
                        >
                            
                            <SideNavItem
                            href="#!icon"
                            icon={<Icon>cloud</Icon>}
                            >
                            First Link With Icon
                            </SideNavItem>
                            <SideNavItem href="#!second">
                            Second Link
                            </SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>
                            Subheader
                            </SideNavItem>
                            <SideNavItem
                            href="#!third"
                            waves
                            >
                            Third Link With Waves
                            </SideNavItem>
                        </SideNav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default HeaderMobile;