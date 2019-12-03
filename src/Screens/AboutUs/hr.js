import React from 'react';
import chart from '../Images/chart.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './hr.css'
import Footer from '../footer'
    function HumanResource() {

    return(
        <div className = 'container-games'>
            <div> <h1  className = 'heading-style'>Human Resource</h1></div>
            <div className = 'chart-align'>
                <Row>

                    <Col lg={1} sm={1}> </Col>

                    <Col lg={10} sm={10}> <img src = {chart} className = 'chart-align' /> </Col>

                    <Col lg = {1} sm={1}> </Col>
                </Row>
            </div>
        </div>
    );
}

export default HumanResource;