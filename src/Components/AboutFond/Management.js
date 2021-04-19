import React from 'react';
import 'materialize-css'
import { Container, Tabs, Tab, Card, Icon, CardTitle } from 'react-materialize'
import { Slide, Fade } from "react-awesome-reveal";
import manager from '../../Images/static/Manager.JPG'

const Management = () => {
    return (
        <div className="management">
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={manager} />}
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
                        <p className="receptionTime"><span>Qabul:</span> 10:00 - 12:00</p>
                        <p className="email"><span>E-mail:</span> hayriyamahalla@gmail.com</p>
                        <p className="phone"><span>Phone:</span>+998 71 233 17 49</p>
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
                        <p className="bio">1996-1997 йй. - Андижон вилоят "Турон" аксионерлик тижорат банки валюта бўлими иқтисодчиси, кредит бўлими иқтисодчиси.
                        2002-2011 йй. - Андижон вилояти табиатни муҳофаза қилиш қўмитаси 2-тоифали мутахассиси, жамғарма бўлими бош мутахассиси, иқтисодиёт ва табиий ресурслардан оқилона фойдаланиш бўлими 1-тоифали мутахассиси, бўлим бошлиғи вазифасини вақтинча бажарувчи, ер инспексияси етакчи мутахассиси, табиий ресурслардан оқилона фойдаланиш ва иқтисодиёт бўлими бошлиғи
                        2011-2013 йй. - Андижон шаҳар "Ритм Элегант Люкс" масъулияти чекланган жамияти бошлиғи ўринбосари
                        2013-2014 йй. - Андижон машинасозлик институти қошидаги 2-академик литсейи хўжалик ишлари бўйича директор ўринбосари
2014-2016 йй - Чет эл капитали иштирокидаги «Савдогар» очиқ акиядорлик  тижорат банки Андижон вилоят филиали ички хавфсизлик бўйича бош мутахассис</p>
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
                        <p className="bio">белгиланган тартибда бўлинма ишчи–ходимларини лавозимга тайинлаш ва озод этиш юзасидан тегишли ҳудудий бўлимга тақдимнома киритади;
                        − давлат органлари, халқаро ташкилотлар ва чет эл ташкилотлари, шунингдек, бошқа юридик ва жисмоний шахслар билан муносабатларда бўлинма номидан иш кўради;
                        – тегишли тартибда тасдиқланган даромадлар, харажатлар сметаси ва бошқарув қарорлари доирасида бўлинманинг пул маблағларини ва мол– мулкини ишлатиш бўйича ҳужжатларга имзо чекади;
                        – юридик ва жисмоний шахслар билан бўлинма номидан шартнома ва битимлар тузади;
                        – бўлинма қошида таъсис этилган тадбиркорлик тузилмалари фаолияти устидан назоратни амалга оширади;
- Қонун ҳужжатларида, фонд Уставида ва мазкур Низомда белгиланган бошқа ваколатларни ҳам амалга оширади.</p>
                    </Tab>
                </Tabs>
            </Card>
        </div>
    )
}

export default Management