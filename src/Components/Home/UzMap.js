import React,{useState} from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import 'materialize-css'
import {  Card, CardTitle, Icon,Row, Col, Container } from 'react-materialize'
import uzb from './uzbekistan.json';
import styled from 'styled-components'
import { Slide,Fade } from "react-awesome-reveal";



const Map = styled.div`
  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #D3D7DA;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: #6B93FF;
      }

      // When a layer is focused.
      &:focus {
        fill: #6B93FF;
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: #6B93FF;
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: #6B93FF;
      }

      // You can also highlight a specific layer via it's id
      &[id="uz-tk"] {
        fill: #6B93FF;
      }
    }
  }
`;



const UZMap = () =>{
    const [clickedNameBoss, setClickedNameboss] = useState('Jahongir Ismoilov');
    const [clickedName, setClickedName] = useState('Toshkent shahar');
    const [clickedEmail, setClickedEmail] = useState('mahallatashkentcity@gmail.com');
    const [clickedPhone, setClickedPhone] = useState('+998 71 236 34 83');
    const [clickedImg, setClickedImg] = useState('https://images.unsplash.com/photo-1616743024211-a763496f458b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
    const layerProps = {
        onClick: ({ target }) =>{ 
            setClickedNameboss(target.attributes.nameBoss.value)
            setClickedName(target.attributes.name.value)
            setClickedEmail(target.attributes.email.value)
            setClickedPhone(target.attributes.phone.value)
            setClickedImg(target.attributes.img.value)
            // console.log(JSON.stringify(target.attributes.nameBoss.value))
        },
        
      };
    
    return(
        
            <Row>
                <h1 className="ReagionsHead">Xududiy fondlar</h1>
                <Col s={6}>
                    <Map>
                        <VectorMap {...uzb} layerProps={layerProps}/>
                    </Map>
                </Col>
                <Col s={6}>
                    <div className="MapData">
                        
                            <h1 className="regionName">{clickedName && <span>{clickedName}</span>} </h1>
                            <Row>
                                <Col s={4}>
                                    <img className="regionImg" alt="imgRegion" src={clickedImg}/>
                                </Col>
                                <Col s={8} >
                                    <p className="RegionBoss">{clickedNameBoss && <span>{clickedNameBoss}</span>}</p>
                                    <p className="regionBossjob">Mahalla Xayriya Jamoat fondi {clickedName} raisi</p>
                                    <p className="receptionTime">Qabul:<span>10:00 - 12:00</span></p>
                                    <p className="email">E-mail:{clickedEmail && <span>{clickedEmail}</span>}</p>
                                    <p className="phone">Phone:{clickedPhone && <span>{clickedPhone}</span>}</p>
                                </Col>
                            </Row>
                        
                        
                        
                    </div>
                </Col>
            </Row>
      
        
    )
} 
export default UZMap