import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceCard from '../Components/serviceCards'
import './pre-audit.css'
import ServiceCardGreen from '../Components/serviceCardGreen'
import Footer from './footer';


function PreAudit () {

    return(
    <div className = "container-games">


        <div className = "section-padding-White">
            <div className = "heading-allingment heading-green">
                <h1 >Pay and Allowances </h1>
                <h6>Payment Section</h6>
            </div>

            <div>
                <Row>

                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Army Officer" text="Army Officers Payment Sections. . . ."  /> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="JCO Soldiers" text=" JCO / Soldiers Payment Sections  . . .  " /> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Civilians" text="Civilian Payment Sections. . ." /> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="FGEI (C/G)" text="Pay and Allowances for FGEI Teachers and Staff. . . " /> </Col>

                </Row>
            </div>
        </div>


        <div className = "section-padding-green">
        <div className = 'heading-Whitesmoke heading-allingment'>
            <h1>TA / DA Payments</h1>
            <h6>Payment Section</h6>
        </div>
        <div>
                <Row>

                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Army Officers TA / DA" text="Army Officers Payment Sections. . . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="JCO Soldiers TA / DA" text=" JCO / Soldiers Payment Sections  . . .  "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Civilians & PMAD TA / DA" text="Civilian Payment Sections. . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="FGEI (C/G) TA / DA" text="Pay and Allowances for FGEI Teachers and Staff. . . "/> </Col>

                </Row>
        </div>

        </div>


        <div className = "section-padding-White">
            <div>
                <div className = "heading-allingment heading-green">
                    <h1>Medical Bills</h1>
                    <h6>Payment Section</h6>
                </div>

                <Row>

                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Medical Bill 1" text="Army Officers Payment Sections. . . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Medical Bill 2" text=" JCO / Soldiers Payment Sections  . . .  "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Medical Bill 3" text="Civilian Payment Sections. . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Medical Bill 4" text="Pay and Allowances for FGEI Teachers and Staff. . . "/> </Col>

                </Row>
            </div>
        </div>


        <div className = "section-padding-green">
            <div>
                <div className = "heading-allingment heading-Whitesmoke">
                    <h1>Contract Bills</h1>
                    <h6>Payment Section</h6>
                </div>

                <Row>

                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Contract Bill 1" text="Army Officers Payment Sections. . . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Contract Bill 2" text=" JCO / Soldiers Payment Sections  . . .  "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Contract Bill 3" text="Civilian Payment Sections. . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Contract Bill 4" text="Pay and Allowances for FGEI Teachers and Staff. . . "/> </Col>

                </Row>
            </div>
        </div>


        <div className = "section-padding-White">
            <div>
                <div className = "heading-allingment heading-green">
                    <h1>Ration Bills</h1>
                </div>

                <Row>

                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Ration Bill 1" text="Army Officers Payment Sections. . . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Ration Bill 2" text=" JCO / Soldiers Payment Sections  . . .  "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Ration Bill 3" text="Civilian Payment Sections. . ."/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard title="Ration Bill 4" text="Pay and Allowances for FGEI Teachers and Staff. . . "/> </Col>

                </Row>
            </div>
        </div>

        <Footer></Footer>

    </div>
       
    )
}

export default PreAudit;