import React , {Component} from 'react'
import './background.css'
import img2 from '../Images/download.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Background() {

    return(
        <div>
            <div className='bg-first-block'>
            <div className = "bg-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                <div className='bg-heading'>Background</div>
            </div>
        
        <div className = 'bg-container-games'>
            

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
                    <img src='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/photos%2FIMG-20191206-WA0017.jpg?alt=media&token=54d3c9a3-694f-4b00-8bbd-43acc0945025' className='bg-img-right bg-picture-shadow'/>
                </div>
                </Col>
                <Col lg = {1}></Col>
            </Row>
            <div className = 'footerpadding'></div>
        </div>
        </div>
    );
}
export default Background;