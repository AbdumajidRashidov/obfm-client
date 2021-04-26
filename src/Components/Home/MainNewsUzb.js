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
                    closeIcon={<Icon className="mainNewsCardCloseIcon" style={{top:"-90px"}}>close</Icon>}   
                    header={
                        <>
                            <CardTitle image="https://storage.kun.uz/source/7/nxL_WdtRVZHUNHFRY5VGkndevaqM9hga.jpg" reveal />
                            
                            <Chip
                                className="newsTag"
                                close={false}
                                closeIcon={<Icon className="close">close</Icon>}
                                options={null}
                                >
                                    O'zbekiston 
                            </Chip>
                            </>
                    }
                        reveal={
                            <p className="mainNewsContent">Kun.uz манбаси хабарига кўра, Абдуғофур Аҳмедов Вазирлар Маҳкамаси ҳузуридаги Дин ишлари бўйича қўмита раиси лавозимидан озод этилди.

                            Қайд этилишича, у бошқа ишга ўтказилган.
                            
                            Эслатиб ўтамиз, Абдуғофур Аҳмедов 2019 йилнинг сентябр ойи бошларида Вазирлар Маҳкамаси ҳузуридаги Дин ишлари бўйича қўмитага раҳбар бўлганди.
                            
                            Абдуғофур Аҳмедов муқаддам Давлат хавфсизлик хизмати тизимида ишлаган.</p>
                        }
                    revealIcon={<Icon className="mainNewsMoreIcon" style={{top:"-90px"}}>more_vert</Icon>}
                        title={
                            <p className="mainNewsTitle">Дин ишлари бўйича қўмита раиси ишдан олинди</p>
                        }
                    >
                        <p className="mainNewsContent">Дин ишлари бўйича қўмита раиси лавозимидан озод этилди. Бу ҳақда Ўзбекистон президентининг тегишли қарори имзоланди.
                        Дин ишлари бўйича қўмита раиси лавозимидан озод этилди. Бу ҳақда Ўзбекистон президентининг тегишли қарори имзоланди.
                        </p>
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