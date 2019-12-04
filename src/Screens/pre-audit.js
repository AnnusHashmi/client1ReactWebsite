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

                    <Col sm={6} md={6} lg={4}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FPAY%20OFFICER.docx?alt=media&token=2af72e0e-5b57-4568-a891-c3d66de62b4b' title="Army Officer" text="Click to download for further detail"  /> </Col>
                    <Col sm={6} md={6} lg={4}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FPay%20JCOs-SLDRs.docx?alt=media&token=fe1608cb-f598-470f-8d46-3c6bce0377a8' title="JCO Soldiers" text=" Click to download for further detail " /> </Col>
                    <Col sm={6} md={6} lg={4}> <ServiceCard  link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FPay%20Civil%20Section.docx?alt=media&token=13317b40-82ff-4394-83db-a9b1ca741d80' title="Civilians" text="Click to download for further detail" /> </Col>
        

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

                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Army Officers TA / DA" text="Details to be added soon"/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FTA-DA%20JCOs-SLRDs.docx?alt=media&token=039d3b22-85b7-44df-ab7b-b7a20a8595fc' title="JCO Soldiers TA / DA" text="Click to download for further detail "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen title="Civilians & PMAD TA / DA" text="Details to be added soon"/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen link = "https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FTA-DA%20FGEI%5B1029%5D.docx?alt=media&token=261ff507-029f-4343-9eaa-71dc411aaa74" title="FGEI (C/G) TA / DA" text="Details to be added soon"/> </Col>

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

                    <Col sm={6} md={6} lg={3}> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FMEDICAL%20BILL%20CIVIL.docx?alt=media&token=818037df-1e45-45d3-b959-0c787cd6fd28' title="Civilians FGEI" text=" Click to download for further detail  "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FM-Section.docx?alt=media&token=85f8c3db-9af9-4732-8cc1-ad679339eec5' title="M-Section" text="Click to download for further detail "/> </Col>
                    <Col sm={6} md={6} lg={3}> </Col>

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
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen  title="FEGI-Section" text="Click to download for further detail "/></Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FSTORE%20SECTION.docx?alt=media&token=352773c1-db4c-4dbb-b12c-cda148131b39' title="Store Section" text="Click to download for further detail "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FE-Section.docx?alt=media&token=cc24268f-d444-4148-8a05-5bae9daed9b8' title="E-Section" text="Click to download for further detail "/> </Col>
                    <Col sm={6} md={6} lg={3}> <ServiceCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FM-Section.docx?alt=media&token=85f8c3db-9af9-4732-8cc1-ad679339eec5' title="M-Section" text="Click to download for further detail "/></Col>

                </Row>
            </div>
        </div>


    </div>
       
    )
}

export default PreAudit;