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
                            <Col sm={12} md={12} lg={12}> <ServiceCard title="ATL"  text="Click to download for further information"  /> </Col>
                        </Row>
                    </div>
            </div>

        </div>
    )
}

export default Internal;