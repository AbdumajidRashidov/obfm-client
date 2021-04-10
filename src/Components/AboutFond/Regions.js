import React from 'react';
import 'materialize-css'
import { Container,Col, Tab,Card,Icon,CardTitle, Row } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import toshkent from '../../Images/static/toshkent.png'
import toshvil from '../../Images/static/toshvil.png'
import xorazm from '../../Images/static/xorazm.png'
import fargona from '../../Images/static/fargona.png'
import qashqadaryo from '../../Images/static/qashqadaryo.png'
import surxon from '../../Images/static/surxon.png'
import sirdaryo from '../../Images/static/sirdaryo.png'
import samarqand from '../../Images/static/samarqand.png'
import namangan from '../../Images/static/namangan.png'
import navoiy from '../../Images/static/navoiy.png'
import jizzax from '../../Images/static/jizzax.png'
import buxoro from '../../Images/static/buxoro.png'
import andijon from '../../Images/static/andijon.png'
import nukus from '../../Images/static/nukus.png'
const Regions = () => {
    return (
        <div className="Regions">
            <Row>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={toshkent} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Toshkent shahri</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon> <span>toshkent@obfm.uz</span></p>
                            <p><Icon>phone</Icon> <span> + 998 71 239 14 90</span></p>
                            <p><Icon>location_on</Icon><span>Chilonzor tumani, Islom Karimov ko‘chasi 55 uy</span> </p>
                        </div>
                        
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={toshvil} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Toshkent viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon> <span>toshkentviloyati@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 70 762-53-38</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={xorazm} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Xorazm viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon> <span>xorazm@obfm.uz</span></p>
                            <p><Icon>phone</Icon> <span>+ 998 97 363-76-64</span></p>
                            <p><Icon>location_on</Icon> <span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={fargona} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Farg’ona viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>farg’ona@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 71 239 14 90</span></p>
                            <p><Icon>location_on</Icon><span>Chilonzor tumani, Islom Karimov ko‘chasi 55 uy</span></p>
                        </div>  
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={qashqadaryo} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Qashqadaryo viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>farg’ona@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 71 239 14 90</span></p>
                            <p><Icon>location_on</Icon><span>Chilonzor tumani, Islom Karimov ko‘chasi 55 uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={surxon} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Surxondaryo viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>surxondaryo@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 99 675-11-75</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={sirdaryo} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Sirdaryo viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>sirdaryo@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 71 239 14 90</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={samarqand} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Samarqand viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>samarqand@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 70 762-53-38</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={namangan} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                       <h1>Namangan viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>namangan@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 99 675-11-75</span></p>
                            <p><Icon>location_on</Icon><span>Chilonzor tumani, Islom Karimov ko‘chasi 55 uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={navoiy} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Navoiy viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>navoiy@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 71 239 14 90</span></p>
                            <p><Icon>location_on</Icon><span>Chilonzor tumani, Islom Karimov ko‘chasi 55 uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={jizzax} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                       <h1>Jizzax viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>jizzax@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 70 762-53-38</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={buxoro} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Buxoro viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>buxoro@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 70 762-53-38</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={andijon} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Andijon viloyati</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>andijon@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 70 762-53-38</span></p>
                            <p><Icon>location_on</Icon><span>Andijon shaxar, A.Navoiy shox ko‘chasi 126-uy</span></p>
                        </div>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card
                    className="RegionsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={nukus} />}
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Qoraqalpog’iston Respublikasi</h1>
                        <div className="cardContent">
                            <p><Icon>mail</Icon><span>qoraqalpoq@obfm.uz</span></p>
                            <p><Icon>phone</Icon><span>+ 998 70 762-53-38</span></p>
                            <p><Icon>location_on</Icon><span>Nurafshon shahri, Hurramlik ko‘chasi, 3-uy</span></p>
                        </div>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}
export default Regions