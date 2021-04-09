import React from 'react';
import 'materialize-css'
import { Container,Tabs, Tab,Card,Icon,CardTitle } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";


const Management = ()=>{
    return(
        <div className="management">
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
                >
                <Tabs className="tab-demo tabManagement z-depth-1">
                        <Tab
                            active
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Rahbariyat"
                        >
                                <p className="RegionBoss">Usmanov Dilshodbek Abdumannonovich</p>
                                <p className="regionBossjob">“Mahalla” xayriya jamoat fondi respublika boshqaruv raisi</p>
                                <p className="receptionTime">Qabul:<span>10:00 - 12:00</span></p>
                                <p className="email">E-mail: <span>hayriyamahalla@gmail.com</span></p>
                                <p className="phone">Phone:<span>+998 71 233 17 49</span></p>
                        </Tab>
                        <Tab
                           
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Biografiya"
                        >
                            <p>Ўзбекистон ЕИга қатор маҳсулотларни имтиёзли шартларда етказиб бериши мумкин бўлди. Ўзбекистоннинг
                            ЕИ GSP+ дастурига аъзо бўлгани бунга имкон беради. Бу ҳақда Инвестициялар ва ташқи савдо вазири Сардор Умурзоқов маълум қилди, деб хабар қилмоқда Kun.uz мухбири. </p>
                        </Tab>
                        <Tab
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Lavozim majburiyatlari"
                        >
                            <p>LДастурга тўлиқ аъзо бўлган давлат Европа Иттифоқи бозорларига 3000га яқин маҳсулотларни божхона тўловларисиз, 3200 турдаги маҳсулотларни эса пасайтирилган ставкалар бўйича экспорт қилиш имкониятига эга бўлади.</p>
                        </Tab>
                    </Tabs>
            </Card>
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
                >
                <Tabs className="tab-demo tabManagement z-depth-1">
                        <Tab
                            active
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Rahbariyat"
                        >
                                <p className="RegionBoss">Usmanov Dilshodbek Abdumannonovich</p>
                                <p className="regionBossjob">“Mahalla” xayriya jamoat fondi respublika boshqaruv raisi</p>
                                <p className="receptionTime">Qabul:<span>10:00 - 12:00</span></p>
                                <p className="email">E-mail: <span>hayriyamahalla@gmail.com</span></p>
                                <p className="phone">Phone:<span>+998 71 233 17 49</span></p>
                        </Tab>
                        <Tab
                           
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Biografiya"
                        >
                            <p>Ўзбекистон ЕИга қатор маҳсулотларни имтиёзли шартларда етказиб бериши мумкин бўлди. Ўзбекистоннинг
                            ЕИ GSP+ дастурига аъзо бўлгани бунга имкон беради. Бу ҳақда Инвестициялар ва ташқи савдо вазири Сардор Умурзоқов маълум қилди, деб хабар қилмоқда Kun.uz мухбири. </p>
                        </Tab>
                        <Tab
                            options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                            }}
                            title="Lavozim majburiyatlari"
                        >
                            <p>LДастурга тўлиқ аъзо бўлган давлат Европа Иттифоқи бозорларига 3000га яқин маҳсулотларни божхона тўловларисиз, 3200 турдаги маҳсулотларни эса пасайтирилган ставкалар бўйича экспорт қилиш имкониятига эга бўлади.</p>
                        </Tab>
                    </Tabs>
            </Card>
            
        </div>
    )
}

export default Management