import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './post-audit.css'
import ServiceCard from '../Components/serviceCards'

function CivilPension() {

    return(
        
        <div  className = "container-games">
    
            <div className = "section-padding-White">
                    <div className = "heading-allingment heading-green">
                        <h1>Civil Pension</h1>
     
                    </div>

                    <div>
                        <Row>

                            <Col sm={6} md={6} lg={3}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FP.S.O%20Section.docx?alt=media&token=577739d0-0c5f-486e-b260-4cd3fce7e305' title="Pension Sub Office (P.S.O)"  text="Click to downlode for further detail "  /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FD.C.S.docx?alt=media&token=e1cc751f-f418-45c7-adff-9447785f69b5' title="Direct Credit System (D.C.S)"  text=" Click to downlode for further detail " /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Direct Credit System"  text="Details to be added soon" /> </Col>
                            <Col sm={6} md={6} lg={3}> <ServiceCard title="Monthly Pension"  text="Details to be added soon" /> </Col>

                        </Row>
                    </div>
            
            </div>

        </div>
    )
}

export default CivilPension