import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './post-audit.css'
import ServiceCard from '../Components/serviceCards'
import Footer from './footer'

function CivilPension() {

    return(
        
        <div  className = "container-games">
    
            <div className = "section-padding-White">
                    <div className = "heading-allingment heading-green">
                        <h1>Civil Pension</h1>
     
                    </div>

                    <div>
                        <Row>

                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Pre Audit"  text="Army Officers Payment Sections. . . ."  /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Payment of Commutation"  text=" JCO  Payment Sections  . . .  " /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Direct Credit System"  text="Civilian Payment Sections. . ." /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Monthly Pension"  text="Pay and Allowances for FGEI Teachers and Staff. . . " /> </Col>

                        </Row>
                    </div>
                    <Footer></Footer>
            </div>

        </div>
    )
}

export default CivilPension