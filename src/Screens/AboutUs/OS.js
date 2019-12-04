import React from 'react';
import os from '../Images/os.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './os.css'
function Organistion() {

    return(
        <div className = 'container-games'>
            <div className='heading-div'> <div  className = 'heading-style'>Organizational Setup</div>
            </div>
            <div className = 'chart-align'>
                <Row>

                    <Col lg={1} sm={1}> </Col>

                    <Col lg={10} sm={10}> <img src = {os} className = 'chart-align' /> </Col>

                    <Col lg = {1} sm={1}> </Col>
                </Row>

                <Row>

                    <Col lg={1} sm={1}> </Col>

                    <Col className='colume' lg={10} sm={10}> <img src = 'https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/photos%2ForganizationalImage.png?alt=media&token=58f8d103-0eb7-4a48-b036-01965820e4fd' className = 'chart-align ostree' /> </Col>

                    <Col lg = {1} sm={1}> </Col>
                </Row>
            </div>
        </div>
    );
}

export default Organistion;