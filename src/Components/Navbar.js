import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'
import {Container,Row,Col} from 'react-materialize'

const Nav = () => {
    let className = ['navLinksListItemLink']
    const addActiveClass = () => {
        className.push('active') 
        console.log(className)
        
    } 
    return (
        <div className="navbar">
            <Container>
                <Row>
                    <Col s={12}>
                        <div className="navLinks">
                            <ul className="navLinksList">
                                <li className="navLinksListItem"><Link to='/' className="active" onClick={()=> addActiveClass()}>Asosiy</Link></li>
                                <li className="navLinksListItem"><Link to='/aboutfond' className={ className } onClick={()=> addActiveClass()}>Fond haqida</Link></li>
                                <li className="navLinksListItem"><Link to='/statistica' className={ className } onClick={()=> addActiveClass()}>Statistika</Link></li>
                                <li className="navLinksListItem"><Link to='/press-service' className={ className } onClick={()=> addActiveClass()}>Matbuot xizmati</Link></li>
                                <li className="navLinksListItem"><Link to='/volunteer-help' className={ className } onClick={()=> addActiveClass()}>Ko’ngilli yordam</Link></li>
                                <li className="navLinksListItem"><Link to='/mediateka' className={ className } onClick={()=> addActiveClass()}>Mediateka</Link></li>
                                <li className="navLinksListItem"><Link to='/contact' className={ className } onClick={()=> addActiveClass()}>Bog’lanish</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default Nav