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
                            <CardTitle image="https://storage.kun.uz/source/6/eKcLbVpxJerONZchPHcbwYs23LKAVqnO.jpg" reveal />
                            
                            <Chip
                                className="newsTag"
                                close={false}
                                closeIcon={<Icon className="close">close</Icon>}
                                options={null}
                                >
                                    Saxovat yangiliklari
                            </Chip>
                            </>
                    }
                        reveal={
                            <p className="mainNewsContent">Mahalla va oilani qo‘llab-quvvatlash vazirligi matbuot kotibi Saodat Boymirzayeva mazkur mablag‘lar taqsimoti haqida ma'lumot berdi.

                            Unga ko‘ra, o‘tgan davr mobaynida Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesi, viloyatlar va Toshkent shahar hamda tuman, shahar xalq deputatlari kengashlarining qarorlari qabul qilinib, karantin davrida ijtimoiy himoyaga muhtoj, ko‘p bolali oilalarga,
                             yakka yolg‘iz va nogironlarga hamda o‘z daromadini yo‘qotgan vaqtincha ishsiz bo‘lgan 300 383ta oilaga 118 mlrd 995 mln so‘mdan ziyod mablag‘ sarflangan.
                            
                            Jumladan:
                            
                            205 646ta oilaga kundalik iste'mol tovarlari uchun 37 mlrd 860 mln so‘m qiymatida turli xil oziq-ovqat mahsulotlar uchun;
                            2 822ta oilaga 399 mln 531 ming so‘m qiymatida dori, himoya niqoblari, antiseptik vositalari uchun;
                            24 619ta oilaga 9 mlrd 626 mln so‘m qiymatida boshqa turdagi mahsulotlar uchun;
                            67 296ta oilaga 71 mlrd 110 mln so‘m qiymatida naqd pul ko‘rinishida mablag‘lar berilgan.
                            AOKAda bo‘lib o‘tgan brifingda «Saxovat va ko‘mak» umumxalq harakati yo‘lida Alisher Usmonov tomonidan o‘tkazilgan 5 mln AQSh dollari miqdoridagi xayriya mablag‘i taqsimoti haqida ham ma'lumot berildi.
                            
                            Qayd etilishicha, ushbu xayriya mablag‘lari Andijon, Namangan, Toshkent viloyatlari hamda Toshkent shahar hokimliklari tomonidan ro‘yxati taqdim etilgan 19 009 nafar ijtimoiy himoyaga muhtoj, ko‘p bolali, nogiron, yolg‘iz keksalar hamda hozirda vaqtincha daromadini yo‘qotgan ishsiz fuqarolarga 2,5 mln so‘mdan – jami 47 522 500 so‘m xayriya mablag‘i plastik kartochkalariga o‘tkazilgan holda tarqatib berilgan.</p>
                        }
                    revealIcon={<Icon className="mainNewsMoreIcon">more_vert</Icon>}
                        title={
                            <p className="mainNewsTitle">«Saxovat va ko‘mak» jamg‘armasidan qancha oilaga naqd pul shaklida yordam berilgani aytildi</p>
                        }
                    >
                        <p className="mainNewsContent">16 iyunga qadar «Saxovat va ko‘mak» jamg‘armasiga jami 194 mlrd 625 mln so‘mdan ziyod xayriya mablag‘lari kelib tushgan.</p>
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