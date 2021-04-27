import React from 'react';
import 'materialize-css'
import { Row, Col} from 'react-materialize'
import { Link } from 'react-router-dom';
import payme from '../../Images/static/payme.svg';
import click from '../../Images/static/click.svg';
import visa from '../../Images/static/visa.svg';
import upay from '../../Images/static/upay.svg';

const Payments = () => {
    return (
        <Row>
                    <h1 style={{marginBottom:"40px"}}>To’lov usullari</h1>
                    <Row>
                        <Col s={3} className="payme">
                            <Link to="/payments/payme"><img src={payme}></img></Link>
                        </Col>
                        <Col s={3} className="visa">
                            <Link to="/payments/visa"><img src={visa}></img></Link>
                        </Col>
                        <Col s={3} className="upay">
                            <Link to="/payments/upay"><img src={upay}></img></Link>
                        </Col>
                        <Col s={3} className="click">
                            <Link to="/payments/click"><img src={click}></img></Link>
                        </Col>
                    </Row>            
        </Row>
    )
}
export default Payments