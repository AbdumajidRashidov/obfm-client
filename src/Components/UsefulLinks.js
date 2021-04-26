import React from 'react';
import 'materialize-css'
import { Container, Row, Col } from 'react-materialize'
import { Slide, Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import gerb from '../Images/static/gerb.png'



SwiperCore.use([Autoplay])
const UsefulLinks = () => {
    
    return (
        <Container>
            <Row>
                <Slide duration={1100} triggerOnce="true" className="usefulLinks">
                    <h1>Foydali havolalar</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView:1
                              },
                            768: {
                                slidesPerView:2
                              },
                            991: {
                                slidesPerView:3
                              },
                            1024: {
                                slidesPerView:4
                            },
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        
                    >
                        <SwiperSlide >
                            <Fade direction="up" duration={1100}>
                                <a href="#">
                                    <div className="usefulLinksCard">
                                        <img src={gerb} />
                                        <p>O’zbekiston Respublikasi Hukumat portali</p>
                                    </div>
                                </a>

                            </Fade>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Fade direction="up" duration={1200}>
                                <a href="#">
                                    <div className="usefulLinksCard">
                                        <img src={gerb} />
                                        <p>O’zbekiston Respublikasi Oliy Majlisining Qonunchilik palatasi</p>
                                    </div>
                                </a>
                            </Fade>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Fade direction="up" duration={1300} >
                                <a href="#">
                                    <div className="usefulLinksCard">
                                        <img src={gerb} />
                                        <p>O’zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
                                    </div>
                                </a>
                            </Fade>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Fade direction="up" duration={1400} >
                                <a href="#">
                                    <div className="usefulLinksCard">
                                        <img src={gerb} />
                                        <p>O’zbekiston Respublikasi Sog’liqni saqlash vazirligi</p>
                                    </div>
                                </a>
                            </Fade>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Fade direction="up" duration={1500} >
                                <a href="#">
                                    <div className="usefulLinksCard">
                                        <img src={gerb} />
                                        <p>O’zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
                                    </div>
                                </a>
                            </Fade>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Fade direction="up" duration={1600} >
                                <a href="#">
                                    <div className="usefulLinksCard">
                                        <img src={gerb} />
                                         <p>O’zbekiston Respublikasi Oliy Majlisining Qonunchilik palatasi</p>
                                    </div>
                                </a>
                            </Fade>
                        </SwiperSlide>

                    </Swiper>
                </Slide>
            </Row>
        </Container>

    );
};
export default UsefulLinks
