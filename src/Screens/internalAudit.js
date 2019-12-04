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
                            <Col sm={12} md={12} lg={12}> 
                            <ServiceCard link = 'https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FATL%20SECTION%5B1027%5D.docx?alt=media&token=66a71e51-372f-4cda-b931-6af04fd6458f' title="ATL" text="Click to download for further information"  /> 
                            </Col>
                        </Row>
                    </div>
            </div>

        </div>
    )
}

export default Internal;