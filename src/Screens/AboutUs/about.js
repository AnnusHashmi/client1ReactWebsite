import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img2 from '../Images/download.png'
import siraziz from '../Images/siraziz.png'
import sirsyed from '../Images/sirsyed.png'
import sirsajjad from '../Images/sirsajjad.png'
import sirraza from '../Images/sirraza.png'
import './about.css'
import team1 from '../Images/intro-bg.jpg'
import Card from 'react-bootstrap/Card'
import Footer from '../footer';

function AboutUs() {

    return(

        <div >
            <div className = 'about-spacing'>
                <Row>
                    <Col sm={1}>   </Col>

                    <Col sm={5}> 
                        <div ><h1 className='heading-style'> About Us </h1></div>  

                        <p className='word-spacing'> 
                            
                            Controller Military Accounts (Quetta Command) is a regional 
                            controller of Pakistan Military Accounts Department (PMAD).
                            office of CMA (QC) is responsible for timely payment of pay and allowances 
                            to Army Officers, JCOs/SLDRs 
                            ,Civilians , TD/DA, Miscellaneous payments. 
                            The Audit Jurisdiction of CMA (QC) consist of 196 units/formations
                             and covers Quetta, Gawadar, Sibbi, Khuzdar, Loralai, Chamman, Zhob, Kashmore, Sui, Gawadar and allied formations.
                        
                        </p>


                        <p className='word-spacing'>    
                            CMA (QC) Quetta was established in 1990. Since then we have been providing services to 
                            Pakistan Army in entire Balochistan Province and Kashmore.
                        </p>
                        
                    </Col>

                    <Col sm={5}>

                        <img src={img2} alt="Logo" className = 'img-right picture-shadow'/>;

                    </Col>
    
                    <Col sm={1}></Col>
                    
                </Row>
            </div>
            
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