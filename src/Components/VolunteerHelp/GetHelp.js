import React from 'react'
import 'materialize-css';
import { Fade, Slide } from "react-awesome-reveal";
import { Col, Row, TextInput, DatePicker, Select, Chip, Icon, Textarea, Checkbox, Button } from 'react-materialize';




const GetHelp = () => {
    return (
        <Row>
            <form action="" className="gethelpForm">
                <Col s={12}>
                    <h1 className="gethelpHead">
                        Ariza to’ldirish
                    </h1>
                </Col>
                <Col s={12}>
                    <Row>
                        <h2>
                            Shaxsiy ma’lumotlar
                        </h2>
                        <Col s={4}>
                            <TextInput
                                className="input"
                                text
                                id="TextInput-4"
                                label="Ismingiz"
                            />
                        </Col>
                        <Col s={4}>
                            <TextInput
                                className="input"
                                text
                                id="TextInput-5"
                                label="Familiyangiz"
                            />
                        </Col>
                        <Col s={4}>
                            <DatePicker
                                id="DatePicker-10"
                                className="input"
                                options={{
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
                                label="Tug’ilgan sanangiz"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col s={12}>
                    <Row>
                        <h2>
                            Manzil
                        </h2>
                        <Col s={4}>
                            <Select
                                className="select"
                                id="Select-10"
                                multiple={false}
                                onChange={function noRefCheck() { }}
                                options={{
                                    classes: '',
                                    dropdownOptions: {
                                        alignment: 'bottom',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                    }
                                }}
                                value=""
                            >
                                <option
                                    disabled
                                    value=""
                                >
                                    Xudud nomi
                                </option>
                                <option value="1">
                                    Toshkent Shahar
                                </option>
                                <option value="2">
                                    Toshkent viloyati
                                </option>
                                <option value="3">
                                    Andijon viloyati
                                </option>
                                <option value="4">
                                    Buxoro viloyati
                                </option>
                                <option value="5">
                                    Jizzax viloyati
                                </option>
                                <option value="6">
                                    Farg'ona viloyati
                                </option>
                                <option value="7">
                                    Namangan viloyati
                                </option>
                                <option value="8">
                                    Navoiy viloyati
                                </option>
                                <option value="9">
                                    Samarqand Shahar
                                </option>
                                <option value="10">
                                    Sirdaryo viloyati
                                </option>
                                <option value="11">
                                    Surxondaryo viloyati
                                </option>
                                <option value="12">
                                    Qashqadaryo Shahar
                                </option>
                                <option value="13">
                                    Xorazm viloyati
                                </option>
                                <option value="14">
                                    Qoraqalpog'iston Respublikasi
                                </option>
                            </Select>
                        </Col>
                        <Col s={4}>
                            <TextInput
                                className="input"
                                text
                                id="TextInput-6"
                                label="Tuman"
                            />
                        </Col>
                        <Col s={4}>
                            <TextInput
                                text
                                className="input"
                                id="TextInput-7"
                                label="Ko’cha / Uy / Honadon"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col s={12}>
                    <Row>
                        <h2>
                            Aloqa
                        </h2>
                        <Col s={4}>
                            <Select
                                id="Select-11"
                                className="select"
                                multiple={false}
                                onChange={function noRefCheck() { }}
                                options={{
                                    classes: '',
                                    dropdownOptions: {
                                        alignment: 'bottom',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                    }
                                }}
                                value=""
                            >
                                <option
                                    disabled
                                    value=""
                                >
                                    Jinsingiz
                                </option>
                                <option value="1">
                                    Ayol
                                </option>
                                <option value="2">
                                    Erkak
                                </option>
                            </Select>
                        </Col>
                        <Col s={4}>
                            <TextInput
                                text
                                className="input"
                                id="TextInput-8"
                                label="Telefon raqamingiz"
                            />
                        </Col>
                        <Col s={4}>
                            <TextInput
                                email
                                className="input"
                                id="TextInput-9"
                                label="Email"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col s={12}>
                    <Row className="chipsRow">
                        <h2>
                            Yordamga muxtojlik
                        </h2>

                        <Chip
                            className="active"
                            close={false}
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Boquvchisini yoqotgan
                            </Chip>


                        <Chip
                            close={false}
                            className="active"
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Ijtimoiy himoyaga muxtoj
                            </Chip>


                        <Chip
                            close={false}
                            
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Tabiiy ofatdan jabrlangan
                            </Chip>


                        <Chip
                            close={false}
                            className="active"
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Nogiron
                            </Chip>


                        <Chip
                            close={false}
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Urush va mehnat faxriysi
                            </Chip>


                        <Chip
                            close={false}
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Kam ta’minlangan
                            </Chip>

                        <Chip
                            close={false}
                            className="active"
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Ko’p farzandli oila
                            </Chip>

                        <Chip
                            close={false}
                            closeIcon={<Icon className="close">close</Icon>}
                            options={null}
                        >
                            Yakka-yolg’iz keksa
                            </Chip>
                    </Row>
                </Col>
                <Col s={12}>
                    <Textarea
                        data-length={420}
                        className="textarea"
                        id="Textarea-12"
                        label="Boshqa sababi bo’lsa yozib qoldiring!"
                    />
                </Col>
                <Col s={12}>
                    <Row>
                        <h2>Murojaat oshkoraligi</h2>
                        <Col s={4}>
                            <Row>
                                <Col s={6} style={{marginTop:"20px"}}>
                                <label className="checkbox">
                                    <input name="group1" type="radio" checked />
                                    <span>Ha</span>
                                </label>
                                </Col>
                                <Col s={6} style={{marginTop:"20px"}}>
                                <label className="checkbox">
                                    <input name="group1" type="radio" />
                                    <span>Yo'q</span>
                                </label>
                                </Col>
                            </Row>
                        </Col>
                        <Col s={8}>
                        <div class="file-field input-field">
                            <div class="btn" style={{ backgroundColor:"#6b93ff", borderRadius:"12px 0 0 12px",height:"54px",boxShadow:"none"}}>
                                <span style={{padding:"20px 20px 10px 20px"}}>Rasmni yuklang</span>
                                <input type="file"/>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text"/>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col s={12}>
                    <Row>
                        <Col s={4}>
                            <Button node="button" type="submit" waves="light" style={{borderRadius:"12px",backgroundColor:"#6B93FF",boxShadow:"none",fontSize: "20px",padding:"15px 147px",height:"65px"}}>
                                yuborish
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </form>

        </Row>
    );
};
export default GetHelp