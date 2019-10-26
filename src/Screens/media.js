import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './media.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer';
import HoverImage from '../Components/HoverImage'


function Media() {

    return (

        <div className="main-container">

            <div className="first-block">
                <div>
                <div className = "icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                </div>
                <div className="title-div">
                    <h1 className='title'>Media </h1>
                </div>
                <div className='subtitle-div'>
                    <h3 className='subtitle'>Click thumbnail for full view</h3>
                </div>
                </div>
                <div style={{display:'flex',border:'1px solid black'}} className='photos-div'>
                    <HoverImage source='../assets/image1.jpeg'/>  
                    <div style={{display:'flex', width:200}}>
                        <img src='../assets/image1.jpeg'/>
                    </div>
                </div>
           
        </div>
    )
}

export default Media;