import React from 'react';
import os from '../Images/os.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './os.css'
import Footer from '../footer'
function Organistion() {

    return(
        <div className = 'container-games'>
            <div> <h1  className = 'heading-style'>Organistional Setup</h1></div>
            <div className = 'chart-align'>
                <Row>

                    <Col lg={1} sm={1}> </Col>

                    <Col lg={10} sm={10}> <img src = {os} className = 'chart-align' /> </Col>

                    <Col lg = {1} sm={1}> </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Organistion;