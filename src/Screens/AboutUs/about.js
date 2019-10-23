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
            
            <div className=' container-games'>
                <div className = 'team-heading-style'><h1> The Team </h1></div>
            <Row>
                <Col sm={1}></Col>

                <Col sm={5}>  
                <div className='team-padding'>
                    <Card className='card-shadow' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={sirsajjad} />
                        <Card.Body>
                            <Card.Title><h4> Syes Sajjad Hyder</h4></Card.Title>
                            <Card.Text>
                                    Military Accountant General
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                </Col>

                <Col sm={5}>
                <div className='team-padding'>
                    <Card className='card-shadow' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={sirraza} />
                        <Card.Body>
                            <Card.Title>Khurram Raza Qureshi</Card.Title>
                            <Card.Text>
                                Chief Controller Military Accounts
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </Col>

                <Col sm={1}></Col>
                </Row>

                <Row>
                <Col sm={1}></Col>

                <Col sm={5}>  
                <div className='team-padding' >
                    <Card className='card-shadow' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={siraziz} />
                        <Card.Body>
                            <Card.Title>Azeez Ahmad Zai</Card.Title>
                            <Card.Text>
                                Controller Military Accounts
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                </Col>

                <Col sm={5}>
                <div className='team-padding'>
                    <Card className='card-shadow' style={{ width: '19rem'}}>
                        <Card.Img variant="top" src={sirsyed} />
                        <Card.Body>
                            <Card.Title>Syed Roohullah</Card.Title>
                            <Card.Text>
                                Deputy Controller Military Accounts
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </Col>

                <Col sm={1}></Col>
                </Row>               
            </div>
            <Footer></Footer>
        </div>
    );
}

export default AboutUs;