import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import siraziz from '../Images/siraziz.png'
import sirsyed from '../Images/sirsyed.png'
import sirsajjad from '../Images/sirsajjad.png'
import sirraza from '../Images/sirraza.png'
import './about.css'
import Card from 'react-bootstrap/Card'
import Footer from '../footer';

function AboutUs() {

    return(

        <div >
            
            {/* MY TEAM PARTY */}
            
            <div className=' backgroundColor'>
                <div className = 'team-heading-style'><h1> The Team </h1></div>
                    <Row>
                        <Col lg={1}> </Col>

                        <Col lg={5}>
                            <div className='team-padding'>
                                <img src={sirsajjad} className='img-left '/>
                                
                                <div className = 'text-style-team padding-top-name'>
                                    <h3 className='h3'>Sir Sajjad Hyder</h3>
                                    <h5 className='h5'>Military Accountant General</h5>
                                </div>
                            </div>
                            
                            
                        </Col>

                        <Col lg={5}>
                        
                                <img src={sirraza} className='img-left'/>

                                <div className = 'text-style-team padding-top-name'>
                                    <h3 className='h3'>Khurram Raza Qureshi</h3>
                                    <h5 className='h5'>Chief Controller Military Accounts</h5>
                                </div>
                   
                            
                        </Col>

                        <Col lg={1}> </Col>
                    </Row>

                    <Row>
                        <Col lg={1}> </Col>

                        <Col lg={5}>
                            <div className='padding-cards'>
                            <img src={siraziz} className='img-left'/>
                                <div className = 'text-style-team padding-top-name'>
                                    <h3 className='h3'>Azeez Ahmad Zai</h3>
                                    <h5 className='h5'>Controller Military Accounts</h5>
                                </div>
                            </div>
                        </Col> 

                        <Col lg={5}>
                            <div className = 'padding-cards'>
                                <img src={sirsyed} className='img-left'/>
                                <div className = 'text-style-team padding-top-name'>
                                    <h3 className='h3'>Syed Roohullah</h3>
                                    <h5 className='h5'>Deputy Controller Military Accounts</h5>
                                </div>
                            </div>
                            
                        </Col>

                        <Col lg={1}> </Col>
                    </Row>
            </div>
            
        </div>
    );
}

export default AboutUs;