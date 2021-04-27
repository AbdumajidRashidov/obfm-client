import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'
import {Container,Row,Col} from 'react-materialize'

const Nav = () => {
    const [className, setClassName] = useState('Home');
    const changeClassName = (e)=>{
         setClassName(e)
    }
    return (
        <div className="navbar">
            <Container>
                <Row>
                    <Col s={12}>
                        <div className="navLinks">
                            <ul className="navLinksList">
                                <li className="navLinksListItem"><Link to='/' onClick={()=>changeClassName("Home")} className ={`${className==="Home"? "active":"navLinksListItemLink"}`}>Asosiy</Link></li>
                                <li className="navLinksListItem"><Link to='/aboutfond' onClick={()=>changeClassName("aboutFond")} className ={`${className==="aboutFond"? "active":"navLinksListItemLink"}`}>Fond haqida</Link></li>
                                <li className="navLinksListItem"><Link to='/statistica' onClick={()=>changeClassName("statistica")} className ={`${className==="statistica"? "active":"navLinksListItemLink"}`}>Statistika</Link></li>
                                <li className="navLinksListItem"><Link to='/press-service' onClick={()=>changeClassName("pressService")} className ={`${className==="pressService"? "active":"navLinksListItemLink"}`}>Matbuot xizmati</Link></li>
                                <li className="navLinksListItem"><Link to='/volunteer-help' onClick={()=>changeClassName("getHelp")} className ={`${className==="getHelp"? "active":"navLinksListItemLink"}`}>Ko’ngilli yordam</Link></li>
                                <li className="navLinksListItem"><Link to='/mediateka' onClick={()=>changeClassName("mediateka")} className ={`${className==="mediateka"? "active":"navLinksListItemLink"}`}>Mediateka</Link></li>
                                <li className="navLinksListItem"><Link to='/contact' onClick={()=>changeClassName("contact")} className ={`${className==="contact"? "active":"navLinksListItemLink"}`}>Bog’lanish</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default Nav