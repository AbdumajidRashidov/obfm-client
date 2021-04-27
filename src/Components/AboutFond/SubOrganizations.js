import React from 'react';
import 'materialize-css'
import { Col,Card,Icon,CardTitle, Row } from 'react-materialize'
import logosaxovat from '../../Images/static/logosaxovat.png'

const SubOrganizations = () => {
    return (
        <div className="SubOrganizations">
            <Row>
                <Col s={12} m={6}>
                    <Card
                    className="SubOrganizationsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={logosaxovat} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Saxovat va ko’mak</h1>
                        <p>Ular pul mablag‘lari, kundalik iste’mol tovarlari, dori vositalari va boshqa mahsulotlar bilan ta’minlanadi.</p>
                    </Card>
                </Col>
                <Col s={12} m={6}>
                    <Card
                    className="SubOrganizationsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={logosaxovat} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Saxovat va ko’mak</h1>
                        <p>Ular pul mablag‘lari, kundalik iste’mol tovarlari, dori vositalari va boshqa mahsulotlar bilan ta’minlanadi.</p>
                    </Card>
                </Col>
                <Col s={12} m={6}>
                    <Card
                    className="SubOrganizationsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={logosaxovat} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Saxovat va ko’mak</h1>
                        <p>Ular pul mablag‘lari, kundalik iste’mol tovarlari, dori vositalari va boshqa mahsulotlar bilan ta’minlanadi.</p>
                    </Card>
                </Col>
                <Col s={12} m={6}>
                    <Card
                    className="SubOrganizationsCard"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={logosaxovat} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h1>Saxovat va ko’mak</h1>
                        <p>Ular pul mablag‘lari, kundalik iste’mol tovarlari, dori vositalari va boshqa mahsulotlar bilan ta’minlanadi.</p>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}
export default SubOrganizations