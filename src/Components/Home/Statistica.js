import React from 'react';
import 'materialize-css'
import { Container, Row, Col,Tabs,Tab,DatePicker, Icon } from 'react-materialize'
import { Slide,Fade } from "react-awesome-reveal";
import MultiAxisLine from './MultiAxisLIne'
import DoughnutChart from './PieChart'

const Statistica = () => {
  return (
    
      <Slide duration={2000} triggerOnce="true">
        <Fade duration={2500}  triggerOnce="true">
              <h1 className="statisticaHead">Statistica</h1>
              <Tabs
                  className="tab-demo z-depth-1 statisticaTabs"
                  options={{
                    swipeable: true
                  }}
                >
                <Tab
                    active
                    className="statisticaTab"
                    options={{
                      duration: 300,
                      onShow: null,
                      responsiveThreshold: Infinity,
                      swipeable: false
                    }}
                    title="Yordam pullari"
                >
                  <div className="statisticaTabContent">
                    <Row>
                      <div className="tabHeader" >
                        <h2 className="statisticaTabHeaderHead">Platfomaga kelib tushgan pullar</h2>
                        
                        <div className="Datepickers">
                          <span>Sana:</span>
                          <DatePicker
                              className="datepiker1"
                              id="DatePicker-5"
                              options={{
                                autoClose: false,
                                container: null,
                                defaultDate: null,
                                disableDayFn: null,
                                disableWeekends: false,
                                events: [],
                                firstDay: 0,
                                format: 'mmm dd, yyyy',
                                i18n: {
                                  cancel: 'Cancel',
                                  clear: 'Clear',
                                  done: 'Ok',
                                  months: [
                                    'January',
                                    'February',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'September',
                                    'October',
                                    'November',
                                    'December'
                                  ],
                                  monthsShort: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec'
                                  ],
                                  nextMonth: '›',
                                  previousMonth: '‹',
                                  weekdays: [
                                    'Sunday',
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday'
                                  ],
                                  weekdaysAbbrev: [
                                    'S',
                                    'M',
                                    'T',
                                    'W',
                                    'T',
                                    'F',
                                    'S'
                                  ],
                                  weekdaysShort: [
                                    'Sun',
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat'
                                  ]
                                },
                                isRTL: false,
                                maxDate: null,
                                minDate: null,
                                onClose: null,
                                onDraw: null,
                                onOpen: null,
                                onSelect: null,
                                parse: null,
                                setDefaultDate: false,
                                showClearBtn: false,
                                showDaysInNextAndPreviousMonths: false,
                                showMonthAfterYear: false,
                                yearRange: 10
                              }}
                            />
                        
                          <DatePicker
                            className="datepiker1"
                            id="DatePicker-6"
                            options={{
                              autoClose: false,
                              container: null,
                              defaultDate: null,
                              disableDayFn: null,
                              disableWeekends: false,
                              events: [],
                              firstDay: 0,
                              format: 'mmm dd, yyyy',
                              i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: [
                                  'January',
                                  'February',
                                  'March',
                                  'April',
                                  'May',
                                  'June',
                                  'July',
                                  'August',
                                  'September',
                                  'October',
                                  'November',
                                  'December'
                                ],
                                monthsShort: [
                                  'Jan',
                                  'Feb',
                                  'Mar',
                                  'Apr',
                                  'May',
                                  'Jun',
                                  'Jul',
                                  'Aug',
                                  'Sep',
                                  'Oct',
                                  'Nov',
                                  'Dec'
                                ],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: [
                                  'Sunday',
                                  'Monday',
                                  'Tuesday',
                                  'Wednesday',
                                  'Thursday',
                                  'Friday',
                                  'Saturday'
                                ],
                                weekdaysAbbrev: [
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S'
                                ],
                                weekdaysShort: [
                                  'Sun',
                                  'Mon',
                                  'Tue',
                                  'Wed',
                                  'Thu',
                                  'Fri',
                                  'Sat'
                                ]
                              },
                              isRTL: false,
                              maxDate: null,
                              minDate: null,
                              onClose: null,
                              onDraw: null,
                              onOpen: null,
                              onSelect: null,
                              parse: null,
                              setDefaultDate: false,
                              showClearBtn: false,
                              showDaysInNextAndPreviousMonths: false,
                              showMonthAfterYear: false,
                              yearRange: 10
                            }}
                          />
                        </div>
                      </div>
                      <Row>
                        <Col s={12} l={9}>
                            <MultiAxisLine/>
                        </Col>
                        
                        <Col s={12} l={3} >
                          <div className="statisticaSidebar">
                            <h1 className="statisticaSidebarHead">Xayriya ko’makchilari</h1>
                            <div className="piechartSection">
                              <Row>
                                <Col s={7}>
                                  <div className="DoughnutChart">
                                      <DoughnutChart />
                                  </div>  
                                </Col>
                                <Col s={3}>
                                  <div className="persentageWrapper">
                                    <span className="persentageCount">69</span><span className="persentageSymbol">%</span>
                                    <p>Erkaklar</p>
                                  </div>
                                  
                                </Col>
                                <Col s={2}>
                                  <div className="persentageUpAndDown">
                                    <Icon className="persentageIcon">arrow_upward</Icon>
                                    <span>2%</span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="piechartSection">
                              <Row>
                                <Col s={7}>
                                  <div className="DoughnutChart">
                                      <DoughnutChart />
                                  </div>
                                </Col>
                                <Col s={3}>
                                  <div className="persentageWrapper">
                                    <span className="persentageCount">23</span><span className="persentageSymbol">%</span>
                                    <p>Ayollar</p>
                                  </div>
                                  
                                </Col>
                                <Col s={2}>
                                  <div className="persentageUpAndDown">
                                      <Icon className="persentageIconDown">arrow_downward</Icon>
                                      <span className="persentageIconDown">0.2%</span>
                                  </div>
                                  
                                </Col>
                              </Row>
                            </div>
                            <div className="piechartSection">
                              <Row>
                                <Col s={7}>
                                  <div className="DoughnutChart">
                                      <DoughnutChart />
                                  </div>
                                  
                                </Col>
                                <Col s={3}>
                                  <div className="persentageWrapper">
                                    <span className="persentageCount">8</span><span className="persentageSymbol">%</span>
                                    <p>Bolalar</p>
                                  </div>
                                  
                                </Col>
                                <Col s={2}>
                                  <div className="persentageUpAndDown">
                                    <Icon className="persentageIcon">arrow_upward</Icon>
                                    <span>1.2%</span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                  </div>
                  
                  </Tab>
                  <Tab
                    active
                    className="statisticaTab"
                    options={{
                      duration: 300,
                      onShow: null,
                      responsiveThreshold: Infinity,
                      swipeable: false
                    }}
                    title="Yordamga muhtojlar"
                >
                  <div className="statisticaTabContent">
                    <Row>
                      <div className="tabHeader" >
                        <h2 className="statisticaTabHeaderHead">Platfomaga kelib tushgan pullar</h2>
                        
                        <div className="Datepickers">
                          <span>Sana:</span>
                          <DatePicker
                              className="datepiker1"
                              id="DatePicker-5"
                              options={{
                                autoClose: false,
                                container: null,
                                defaultDate: null,
                                disableDayFn: null,
                                disableWeekends: false,
                                events: [],
                                firstDay: 0,
                                format: 'mmm dd, yyyy',
                                i18n: {
                                  cancel: 'Cancel',
                                  clear: 'Clear',
                                  done: 'Ok',
                                  months: [
                                    'January',
                                    'February',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'September',
                                    'October',
                                    'November',
                                    'December'
                                  ],
                                  monthsShort: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec'
                                  ],
                                  nextMonth: '›',
                                  previousMonth: '‹',
                                  weekdays: [
                                    'Sunday',
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday'
                                  ],
                                  weekdaysAbbrev: [
                                    'S',
                                    'M',
                                    'T',
                                    'W',
                                    'T',
                                    'F',
                                    'S'
                                  ],
                                  weekdaysShort: [
                                    'Sun',
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat'
                                  ]
                                },
                                isRTL: false,
                                maxDate: null,
                                minDate: null,
                                onClose: null,
                                onDraw: null,
                                onOpen: null,
                                onSelect: null,
                                parse: null,
                                setDefaultDate: false,
                                showClearBtn: false,
                                showDaysInNextAndPreviousMonths: false,
                                showMonthAfterYear: false,
                                yearRange: 10
                              }}
                            />
                        
                          <DatePicker
                            className="datepiker1"
                            id="DatePicker-6"
                            options={{
                              autoClose: false,
                              container: null,
                              defaultDate: null,
                              disableDayFn: null,
                              disableWeekends: false,
                              events: [],
                              firstDay: 0,
                              format: 'mmm dd, yyyy',
                              i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: [
                                  'January',
                                  'February',
                                  'March',
                                  'April',
                                  'May',
                                  'June',
                                  'July',
                                  'August',
                                  'September',
                                  'October',
                                  'November',
                                  'December'
                                ],
                                monthsShort: [
                                  'Jan',
                                  'Feb',
                                  'Mar',
                                  'Apr',
                                  'May',
                                  'Jun',
                                  'Jul',
                                  'Aug',
                                  'Sep',
                                  'Oct',
                                  'Nov',
                                  'Dec'
                                ],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: [
                                  'Sunday',
                                  'Monday',
                                  'Tuesday',
                                  'Wednesday',
                                  'Thursday',
                                  'Friday',
                                  'Saturday'
                                ],
                                weekdaysAbbrev: [
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S'
                                ],
                                weekdaysShort: [
                                  'Sun',
                                  'Mon',
                                  'Tue',
                                  'Wed',
                                  'Thu',
                                  'Fri',
                                  'Sat'
                                ]
                              },
                              isRTL: false,
                              maxDate: null,
                              minDate: null,
                              onClose: null,
                              onDraw: null,
                              onOpen: null,
                              onSelect: null,
                              parse: null,
                              setDefaultDate: false,
                              showClearBtn: false,
                              showDaysInNextAndPreviousMonths: false,
                              showMonthAfterYear: false,
                              yearRange: 10
                            }}
                          />
                        </div>
                      </div>
                      <Row>
                        <Col s={12} l={9}>
                            <MultiAxisLine/>
                        </Col>
                        
                        <Col s={12} l={3} >
                          <div className="statisticaSidebar">
                            <h1 className="statisticaSidebarHead">Xayriya ko’makchilari</h1>
                            <div className="piechartSection">
                              <Row>
                                <Col s={8} m={7}>
                                  <div className="DoughnutChart">
                                      <DoughnutChart />
                                  </div>  
                                </Col>
                                <Col s={2}  m={3}>
                                  <div className="persentageWrapper">
                                    <span className="persentageCount">69</span><span className="persentageSymbol">%</span>
                                    <p>Erkaklar</p>
                                  </div>
                                  
                                </Col>
                                <Col s={2}>
                                  <div className="persentageUpAndDown">
                                    <Icon className="persentageIcon">arrow_upward</Icon>
                                    <span>2%</span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="piechartSection">
                              <Row>
                                <Col s={7}>
                                  <div className="DoughnutChart">
                                      <DoughnutChart />
                                  </div>
                                </Col>
                                <Col s={3}>
                                  <div className="persentageWrapper">
                                    <span className="persentageCount">23</span><span className="persentageSymbol">%</span>
                                    <p>Ayollar</p>
                                  </div>
                                  
                                </Col>
                                <Col s={2}>
                                  <div className="persentageUpAndDown">
                                      <Icon className="persentageIconDown">arrow_downward</Icon>
                                      <span className="persentageIconDown">0.2%</span>
                                  </div>
                                  
                                </Col>
                              </Row>
                            </div>
                            <div className="piechartSection">
                              <Row>
                                <Col s={7}>
                                  <div className="DoughnutChart">
                                      <DoughnutChart />
                                  </div>
                                  
                                </Col>
                                <Col s={3}>
                                  <div className="persentageWrapper">
                                    <span className="persentageCount">8</span><span className="persentageSymbol">%</span>
                                    <p>Bolalar</p>
                                  </div>
                                  
                                </Col>
                                <Col s={2}>
                                  <div className="persentageUpAndDown">
                                    <Icon className="persentageIcon">arrow_upward</Icon>
                                    <span>1.2%</span>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                  </div>
                  
                  </Tab>
              </Tabs>
        </Fade>
        
      </Slide>
  )
}

export default Statistica