import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './post-audit.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer'

function Admin() {

    return(
        
        <div  className = "container-games">
    
            <div className = "section-padding-White">
                    <div className = "heading-allingment heading-green">
                        <h1> Admin Section </h1>
     
                    </div>

                    <div>
                        <Row>

                            <Col sm={6} md={6} lg={3}> <ServiceCard title="HR Management"  text="Army Officers Payment Sections. . . ."  /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Transfer and Posting"  text=" JCO / Soldiers Payment Sections  . . .  " /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Reports Preparation"  text="Civilian Payment Sections. . ." /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Over All Office Management"  text="Pay and Allowances for FGEI Teachers and Staff. . . " /> </Col>

                        </Row>
                    </div>
                    <Footer></Footer>
            </div>

        </div>
    )
}

export default Admin;