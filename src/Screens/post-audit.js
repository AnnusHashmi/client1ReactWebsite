import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './post-audit.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer';


function PostAudit() {

    return(
        
        <div  className = "container-games">
    
            <div className = "section-padding-White">
                    <div className = "heading-allingment heading-green">
                        <h1 >POST AUDIT </h1>
     
                    </div>

                    <div>
                        <Row>

                            <Col sm={6} md={6} lg={3}> <ServiceCard link = 'https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FATL%20SECTION%5B1027%5D.docx?alt=media&token=66a71e51-372f-4cda-b931-6af04fd6458f' title="ATL" post-title = "Army Officers" text="Click to download for further information"  /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FM-Section.docx?alt=media&token=85f8c3db-9af9-4732-8cc1-ad679339eec5' title="M-section" post-title = "JCO/ Soldiers" text="Click to download for further information" /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FE-Section.docx?alt=media&token=cc24268f-d444-4148-8a05-5bae9daed9b8' title="E-section" post-title = "FGEI (C/G)" text="Click to download for further information" /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard link = 'https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FTA-DA%20RECOUPMENT.docx?alt=media&token=53035385-8bd0-44e9-ae59-96cc93e76c03' title="TA-Recoup" post-title = "Army Officers" text="Click to download for further information" /> </Col>

                        </Row>
                    </div>
            </div>
        </div>
    )
}

export default PostAudit;