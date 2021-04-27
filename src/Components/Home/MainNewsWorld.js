import React from 'react';
import 'materialize-css'
import {  Card, CardTitle, Icon, Chip, Row, Col } from 'react-materialize'

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
                            <CardTitle image="https://storage.kun.uz/source/thumbnails/_medium/7/eCMRooxeUfkizZDnT_z_KzU_uQg9bCjV_medium.jpg" reveal />
                            
                            <Chip
                                className="newsTag"
                                close={false}
                                closeIcon={<Icon className="close">close</Icon>}
                                options={null}
                                >
                                    Jahon yangiliklari
                            </Chip>
                            </>
                    }
                        reveal={
                            <p className="mainNewsContent">Сўнгги бир неча ўн йиллик давомида хитойлик олимлар, мутахассислар ва дипломатлар Қўшма Штатларни Хитойга нисбатан «совуқ уруш менталитети»да эканликда айбламоқда. Тўғри, совуқ урушдан кейинги даврда Қўшма Штатлар ва унинг иттифоқчилари Осиё-Тинч океанида Хитой билан ҳарбий соҳада стратегик рақобат олиб боришди.

                            Шу пайтгача АҚШ Хитойнинг кўплаб суверенитет низоларини Шарқий ва Жанубий Хитой денгизида ва Тайван бўғози бўйлаб куч ишлатиш йўли билан ҳал қилишдан муваффақиятли тўхтатди. АҚШ ва унинг энг яқин иттифоқчилари қурол сотишни тақиқлагани ва маълум ҳарбий технологияларнинг Хитойга ўтказилишини чеклашга уриниб кўргани ҳам ҳақиқат.
                            
                            ХХ асрнинг 50—60 йилларидаги АҚШнинг cоветлар иттифоқи билан муносабатлари ҳарбий соҳадаги рақобатдан ташқари тўлалигича иқтисодий томонларни ҳам қамраб олган эди. Бу даврда АҚШнинг стратегияси совет иттифоқининг бошқа мамлакатлар билан алоқаларни чеклаш орқали иқтисодиётини ногирон ҳолатга келтириб, чет элдаги дипломатиясини пучга чиқаришга қаратилган эди.
                            
                            Аммо Қўшма Штатларнинг Хитой билан муносабатлари совуқ уруш давридаги СССР билан алоқаларидан анча фарқ қилади. 1978 йилда Хитойни ислоҳ қилиш даври бошланганидан буён Хитой халқининг ўзидан бошқа бирор давлат Хитойнинг кенг иқтисодий ривожланишига ёрдам бериш учун Қўшма Штатлардан кўра кўпроқ иш қилгани йўқ. Хитой экспорти учун АҚШнинг очиқ бозорлари, Хитой саноатига катта миқдордаги сармоялари ва Америка университетларида ўқиётган юз минглаб хитойлик талабалар Хитойнинг тез суръатлар билан ўсиши ва технологик янгиланиши учун жуда зарур эди. Шунингдек, Хитойдан халқаро дипломатияда фаолроқ роль ўйнашни
                        
                             ёки АҚШ давлат котибининг собиқ муовини Роберт Зеллик айтганидек, халқаро саҳнада «масъул манфаатдор» сифатида иштирокини кенгайтиришни айнан АҚШ қўллаб-қувватлади.</p>
                        }
                    revealIcon={<Icon className="mainNewsMoreIcon">more_vert</Icon>}
                        title={
                            <p className="mainNewsTitle">"Янги совуқ уруш бўлмайди. АҚШ-Хитой рақобати чегаралари"</p>
                        }
                    >
                        <p className="mainNewsContent">Хитойнинг глобал ишлаб чиқариш занжиридаги ҳаётий мавқейи ва авторитаризм ва либерал демократия 
                        ўртасида мафкуравий устунлик учун курашнинг йўқлиги айни пайтда совуқ уруш бошланиш эҳтимолини камайтиради.</p>
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