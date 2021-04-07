import React from 'react';
import 'materialize-css'
import { Container, Row, Col,Tabs,Tab,DatePicker, Icon,Slider,Caption,MediaBox } from 'react-materialize'
import { Fade,Slide } from "react-awesome-reveal";
import { ReactVideo } from "reactjs-media";
import { ReactAudio } from "reactjs-media/audio";
import poster from '../../Images/poster.png'
import imgMedia1 from '../../Images/img1.png'
import imgMedia2 from '../../Images/img2.png'
const Mediateka = () => {
    return (
        <Row>
            <Col s={12}>
                <h1 className="MediatekaHead">Mediateka</h1>
            </Col>
            <Col s={4}>
                <ReactVideo
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster={poster}
                    className="ReactVideo"
                />
            </Col>
            <Col s={4}>
                    <Row>
                        <Col s={6}>
                            <MediaBox
                                id="MediaBox_7"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                                >
                            <img className="mediatekaImg" src={imgMedia1}/>
                            </MediaBox>
                        </Col>
                        <Col s={6}>
                            <MediaBox
                                id="MediaBox_8"
                                options={{
                                    inDuration: 275,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 200
                                }}
                                >
                            <img className="mediatekaImg" src={imgMedia2}/>
                            </MediaBox>
                        </Col>
                    </Row>
                </Col>
            <Col s={4}>
                        <ReactAudio
                            src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
                        className="reactAudio"
                            //you can pass in other props
                        />
                        <ReactAudio
                            src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
                        className="reactAudio"
                            //you can pass in other props
                        />
                        <ReactAudio
                            src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
                        className="reactAudio"
                            //you can pass in other props
                        />
                    </Col>
       </Row> 
    )
}
export default Mediateka