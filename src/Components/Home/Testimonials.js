import React from 'react';
import 'materialize-css'
import { Container, Row, Col,Tabs,Tab,DatePicker, Icon,Slider,Caption,Slide } from 'react-materialize'
import {  Fade } from "react-awesome-reveal";
import ImgSlide from "../../Images/prezident.png"
const Testimonials = () => {
    return (
        <div className="Testimonials">
            <Row>
                <Col s={12}>
                    <Fade direction="right" duration={1100}  triggerOnce="true">
                        <Slider
                            className="TestimonialsSlider"
                            fullscreen={false}
                            options={{
                                duration: 500,
                                height: 540,
                                indicators: true,
                                interval: 6000
                            }}
                            >
                            <Slide className="TestimonialsSliderItem" image={<img  alt="" src={ImgSlide} />}>
                                <div className="maskTestimonials"></div>
                                <Caption placement="left">
                                <h3>
                                  Ta’limni tarbiyadan, 
                                    tarbiyani esa ta’limdan ajratib 
                                    bo’lmaydi - bu sharqona qarash, 
                                    sharqona hayot.
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Sh. Mirziyoyev
                                </h5>
                                </Caption>
                            </Slide>
                            <Slide image={<img alt="" src={ImgSlide} />}>
                                <div className="maskTestimonials"></div>
                                <Caption placement="left">
                                <h3>
                                   Ta’limni tarbiyadan, 
                                    tarbiyani esa ta’limdan ajratib 
                                    bo’lmaydi - bu sharqona qarash, 
                                    sharqona hayot.
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Sh. Mirziyoyev
                                </h5>
                                </Caption>
                            </Slide>
                            <Slide image={<img alt="" src={ImgSlide} />}>
                                <div className="maskTestimonials"></div>
                                <Caption placement="left">
                                <h3>
                                    Ta’limni tarbiyadan, 
                                    tarbiyani esa ta’limdan ajratib 
                                    bo’lmaydi - bu sharqona qarash, 
                                    sharqona hayot.
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Sh. Mirziyoyev
                                </h5>
                                </Caption>
                            </Slide>
                            <Slide image={<img alt="" src={ImgSlide} />}>
                                <div className="maskTestimonials"></div>
                                <Caption placement="left">
                                <h3>
                                    Ta’limni tarbiyadan, 
                                    tarbiyani esa ta’limdan ajratib 
                                    bo’lmaydi - bu sharqona qarash, 
                                    sharqona hayot.
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Sh. Mirziyoyev
                                </h5>
                                </Caption>
                            </Slide>
                        </Slider>
                    </Fade>
                </Col>
            </Row>
        </div>
    )
}
export default Testimonials