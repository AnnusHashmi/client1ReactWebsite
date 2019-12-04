import React from 'react';
import chart from '../Images/chart.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {arr} from './humanR'
import './hr.css'
import Footer from '../footer'
    function HumanResource() {

    return(
        <div className = 'container-games'>
            <div> <h1  className = 'heading-style'>Human Resource</h1></div>
            <div className = 'chart'>
                <div className='chart-heads'>
                    <div className='chart-sno-head'>S.No.</div>
                    <div className='chart-desig-head'>Designation</div>
                    <div className='chart-stren-head'>Sanctioned Strength</div>
                </div>
                    {arr.map((e,i)=>{
                     return <div className='chart-data'>
                      <div className='chart-sno'>{i+1}</div>
                      <div className='chart-desig'>{e.desig}</div>
                      <div className='chart-stren'>{e.strength}</div>
                  </div>  
                    })}
                </div>
        </div>
    );
}

export default HumanResource;