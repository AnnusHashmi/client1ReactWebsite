import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './post-audit.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer';


function Internal() {

    return(
        
        <div  className = "container-games">
    
            <div className = "section-padding-White">
                    <div className = "heading-allingment heading-green">
                        <h1> Internal Audit</h1>
     
                    </div>

                    <div>
                        <Row>

                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Internal Audit" post-title = "Army Officers" text="Army Officers Payment Sections. . . ."  /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Internal Audit" post-title = "JCO/ Soldiers" text=" JCO / Soldiers Payment Sections  . . .  " /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Internal Audit" post-title = "FGEI (C/G)" text="Civilian Payment Sections. . ." /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Internal Audit" post-title = "Army Officers" text="Pay and Allowances for FGEI Teachers and Staff. . . " /> </Col>

                        </Row>
                    </div>
            </div>

        </div>
    )
}

export default Internal;