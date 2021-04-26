import React from "react";
import "materialize-css";
import {
  Col,
  Row,
  Container,
  Dropdown,
  Icon,
  SideNav,
  SideNavItem,
  Collapsible,
  CollapsibleItem,
} from "react-materialize";
import logo from "../Images/static/logo1.png";
import weather from "../Images/static/weather.svg";
import uzb from "../Images/static/uzb.svg";


const HeaderMobile = () => {
  return (
    <div className="header headerMobile" style={{ marginBottom: "20px" }}>
      <Container>
        <Row>
          <Col s={11} m={11} l={8}>
            <div className="logo_wrapp">
              <img src={logo} />
              <p>“Mahalla” xayriya jamoat fondi</p>
            </div>
          </Col>
          <Col s={1} m={1} l={4} style={{ marginTop: "30px" }}>
            <div>
              <style>
                {`
                                    #root > div > div {
                                    z-index: 998 !important;
                                    }
                                `}
              </style>
              <SideNav
                id="SideNav-10"
                options={{
                  draggable: true,
                }}
                trigger={<Icon>menu</Icon>}
              > 
                <Col s={12}  >
                        <div className="weather_lang_valute">
                            <Row>
                                <Col s={6}>
                                    <div className="weather">
                                        <img src={weather} />
                                        <span className="weather_count">7</span>
                                        <span className="weather_celsiy_circle">&deg;</span>
                                        <span className="weather_celsiy">C</span>
                                        
                                    </div>
                                </Col>
                                <Col s={6}>
                                     <div className="lang">
                                        <Dropdown
                                            className="dropdown"
                                            id="Dropdown_7"
                                            options={{
                                                alignment: 'left',
                                                autoTrigger: true,
                                                closeOnClick: true,
                                                constrainWidth: true,
                                                container: null,
                                                coverTrigger: true,
                                                hover: false,
                                                inDuration: 150,
                                                onCloseEnd: null,
                                                onCloseStart: null,
                                                onOpenEnd: null,
                                                onOpenStart: null,
                                                outDuration: 250
                                            }}
                                            trigger={
                                                <div className="dropdown_lang">
                                                    <p>O'z</p>
                                                    <img src={uzb} />
                                                    <Icon className="dropdown_icon">expand_more</Icon>
                                                </div>
                                                
                                            }
                                            >
                                            <a href="#">
                                               UZB
                                            </a>
                                            <a href="#">
                                                RU
                                            </a>
                                            <a href="#">
                                                ENG
                                            </a>
                                        </Dropdown>
                                    </div>
                                </Col>
                                <Col s={12}>
                                  <p className="usdvalute"><span className="usd">USD</span> = <span className="usd_count">10449.44</span>  <span className="usd_balance">-27.48</span></p>
                                  <p className="usdvalute"><span className="usd">RUB</span> = <span className="usd_count">140.44</span>  <span className="usd_balance">-53.48</span></p>
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                <Collapsible accordion>
                  <CollapsibleItem expanded={false} header="Asosiy" node="div">
                    <SideNavItem href="/">Fond yangiliklari</SideNavItem>
                    <SideNavItem href="/uzbnews">O’zbekiston yangiliklari</SideNavItem>
                    <SideNavItem href="/worldnews">Jahon yangiliklari</SideNavItem>
                    <SideNavItem href="/saxovatnews">
                      Saxovat va ko’mak yangiliklari
                    </SideNavItem>
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Fond haqida"
                    node="div"
                  >
                    <SideNavItem href="/aboutfond">Fond haqida</SideNavItem>
                    <SideNavItem href="/management">Rahbariyat</SideNavItem>
                    <SideNavItem href="/central-management">Markaziy apparat</SideNavItem>
                    <SideNavItem href="/organization-structure">Tashkiliy tuzilma</SideNavItem>
                    <SideNavItem href="/charter">Nizom</SideNavItem>
                    <SideNavItem href="/resgions">Hududiy fondlar</SideNavItem>
                    <SideNavItem href="/suborganizations">
                      Tasarrufidagi tashkilotlar
                    </SideNavItem>
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Statistika"
                    node="div"
                  >
                   
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Matbuot xizmati"
                    node="div"
                  >
                    <SideNavItem href="/press-service">E’lonlar</SideNavItem>
                    <SideNavItem href="/contact-press-service">Matbuot bilan bog’lanish</SideNavItem>
                    <SideNavItem href="/management-statements">Rahbariyat bayonotlari</SideNavItem>
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Ko’ngilli yordam"
                    node="div"
                  >
                   
                    <Collapsible accordion style={{marginLeft:"15px"}}>
                        <CollapsibleItem
                            expanded={false}
                            className="collapseHelp"
                            style={{fontSize:"16px !important"}}
                            header="Yordam bermoq"
                            node="div"
                        >
                            <SideNavItem href="/volunteer-help">Ko’p farzandli oilalar</SideNavItem>
                            <SideNavItem href="/volunteer-help">Kam ta’minlanganlar</SideNavItem>
                            <SideNavItem href="/volunteer-help">Yakka-yolg’iz keksalar</SideNavItem>
                            <SideNavItem href="/volunteer-help">Boquvchisini yoqotgan</SideNavItem>
                            <SideNavItem href="/volunteer-help">Ijtimoiy himoyaga muxtoj</SideNavItem>
                            <SideNavItem href="/volunteer-help">Urush va mehnat faxriylari</SideNavItem>
                            <SideNavItem href="/volunteer-help">Tabiiy ofatdan jabrlanganlar</SideNavItem>
                            <SideNavItem href="/volunteer-help">Nogironligi bo’lgan shaxslarga</SideNavItem>
                        </CollapsibleItem>
                    </Collapsible>
                   
                    <SideNavItem href="/gethelp">Yordam olmoq</SideNavItem>
                    <SideNavItem href="/chairtable-donations">Ko’rsatilgan xayriyalar</SideNavItem>
                    <SideNavItem href="/account-numbers">Hisob raqamlari</SideNavItem>
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Mediateka"
                    node="div"
                  >
                    <SideNavItem href="/mediateka">Fotogalereya</SideNavItem>
                    <SideNavItem href="/videogalereya">Videogalereya</SideNavItem>
                    <SideNavItem href="/audiogalereya">Audiogalereya</SideNavItem>
                  </CollapsibleItem>
                  <CollapsibleItem
                    expanded={false}
                    header="Bog’lanish"
                    node="div"
                  >
                    <SideNavItem href="/contact">Bog’lanish</SideNavItem>
                  </CollapsibleItem>
                </Collapsible>
                <SideNavItem href=''>
                  <p style={{fontWeight:"800",fontSize:"20px",color:"#6B93FF",border:"solid 1px #6B93FF",borderRadius:"8px",textAlign:"center",padding:"10px"}}>Yordam bermoq</p>
                </SideNavItem>
                <SideNavItem href=''>
                  <p  style={{fontWeight:"800",fontSize:"20px",color:"#F7B70D",border:"solid 1px #F7B70D",borderRadius:"8px",textAlign:"center",padding:"10px"}}>Yordam olmoq</p> 
                </SideNavItem>
              </SideNav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeaderMobile;
