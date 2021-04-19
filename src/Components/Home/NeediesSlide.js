import React from 'react'
import 'materialize-css';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import { Fade, Slide } from "react-awesome-reveal";
import NeediesCard from './NeedyCard'


// install Swiper modules
SwiperCore.use([Navigation]);

const NeedySlide = () => {
    return (
       
            <Slide direction="right" duration={1100}  triggerOnce="true">
                <h1>Xayriyaga muxtojlar</h1>
                <Swiper
                slidesPerView={4}
                pagination={{ clickable: true }}
                navigation
            >
                <SwiperSlide >
                    <Fade direction="up" duration={1100}>
                        <NeediesCard />
                    </Fade>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Fade direction="up" duration={1200}>
                        <NeediesCard />
                    </Fade>
                </SwiperSlide>
                <SwiperSlide>
                    <Fade direction="up" duration={1300} >
                        <NeediesCard />
                    </Fade>
                </SwiperSlide>
                <SwiperSlide>
                    <Fade direction="up" duration={1400} >
                        <NeediesCard />
                    </Fade>
                </SwiperSlide>
                <SwiperSlide>
                    <Fade direction="up" duration={1500} >
                        <NeediesCard />
                    </Fade>
                </SwiperSlide>
                <SwiperSlide>
                    <Fade direction="up" duration={1600} >
                        <NeediesCard />
                    </Fade>
                </SwiperSlide>
               
                </Swiper>
            </Slide>
            
    
  );
};
export default NeedySlide