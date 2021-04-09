import React from 'react';
import 'materialize-css'
import {  Card, CardTitle, Icon, Chip, Row, Col } from 'react-materialize'
import mainNewsImg from '../../Images/mainnews.png'

const MainNews = () => {
    return (
        <div className="MainNews">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        
                    className="mainNewsCard"
                    closeIcon={<Icon className="mainNewsCardCloseIcon">close</Icon>}   
                    header={
                        <>
                            <CardTitle image={mainNewsImg} reveal />
                            
                            <Chip
                                className="newsTag"
                                close={false}
                                closeIcon={<Icon className="close">close</Icon>}
                                options={null}
                                >
                                    Fond yangiliklari
                            </Chip>
                            </>
                    }
                        reveal={
                            <p className="mainNewsContent">O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev raisligida 19 yanvar kuni ma’naviy-ma’rifiy ishlar tizimini takomillashtirish,
                        bu borada davlat va jamoat tashkilotlarining hamkorligini kuchaytirish masalalari bo‘yicha videoselektor o’tqazildi.</p>
                        }
                    revealIcon={<Icon className="mainNewsMoreIcon">more_vert</Icon>}
                        title={
                            <p className="mainNewsTitle">"Shavkat Mirziyoyev: Jamiyat hayotining tanasi iqtisodiyot bo’lsa, uning joni va ruhi ma’naviyatdir"</p>
                        }
                    >
                        <p className="mainNewsContent">O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev raisligida 19 yanvar kuni ma’naviy-ma’rifiy ishlar tizimini takomillashtirish, bu borada davlat va jamoat
                            tashkilotlarining hamkorligini kuchaytirish masalalari bo‘yicha videoselektor o’tqazildi.</p>
                        <div className="cardFooter">
                            <Row>
                                <Col s={6}>
                                    <Row>
                                        <Col s={3} className="accessTime">
                                            <Icon className="accessTimeIcon">access_time</Icon>
                                            <span className="accessTimeCount">19:54</span>
                                        </Col>
                                        <Col s={3}>
                                            <span className="accessDate">19.01.2021</span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col s={6} className="filesavewrapp">
                                    <a href="/" className="filesave">
                                        <Icon className="fileSaveIcon">file_download</Icon>
                                        <span className="fileSaveContext">Saqlab qo’yish</span>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default MainNews