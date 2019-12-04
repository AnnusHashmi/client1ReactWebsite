import React , {Component} from 'react'
import './background.css'
import img2 from '../Images/download.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Background() {

    return(
        <div className = 'bg-container-games'>
            <h2 className = 'bg-heading-align'>BACKGROUND</h2>

            <Row>
                <Col lg = {1}></Col>
                <Col lg = {5}>
                <p className = 'bg-text-setting'>
                    Controller Military Accounts (Quetta Command) is a regional 
                    controller of Pakistan Military Accounts Department (PMAD).
                    office of CMA (QC) is responsible for timely payment of pay and allowances 
                    to Army Officers, JCOs/SLDRs 
                    ,Civilians , TD/DA, Miscellaneous payments. 
                    The Audit Jurisdiction of CMA (QC) consist of 196 units/formations
                    and covers Quetta, Gawadar, Sibbi, Khuzdar, Loralai, Chamman, Zhob, Kashmore, Sui,
                    Gawadar and allied formations.
                </p>
                </Col> 
            
                <Col lg = {5}>
                <div>
                    <img src='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/photos%2Fbackground.jpeg?alt=media&token=4c1fe2d6-23ae-4676-9135-ff47f10e6a1f' className='bg-img-right bg-picture-shadow'/>
                </div>
                </Col>
                <Col lg = {1}></Col>
            </Row>
            <div className = 'footerpadding'></div>
        </div>
    );
}
export default Background;