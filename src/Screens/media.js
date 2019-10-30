import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './media.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer';
import HoverImage from '../Components/HoverImage'


function Media() {

    return (

        <div className="media-main-container">

            <div className="media-first-block">
                <div>
                <div className = "media-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                </div>
                <div className="media-title-div">
                    <h1 className='media-title'>Media </h1>
                </div>
                <div className='subtitle-div'>
                    <h3 className='subtitle'>Click thumbnail for full view</h3>
                </div>
                </div>
                <div className='media-photos-div'>
                    <HoverImage source='image1' />  
                    <HoverImage source='image2' />  
                    <HoverImage source='image3' />  
                    <HoverImage source='image4' />  
                    <HoverImage source='image5' />  
                    <HoverImage source='image6' />  
                    <HoverImage source='image7' />  
                    <HoverImage source='image8' />  
                    <HoverImage source='image9' />  
                    <HoverImage source='image10' />  
                    <HoverImage source='image12' />  
                    <HoverImage source='image13' />  
                    <HoverImage source='image14' />  
                    <HoverImage source='image15' />  
                    <HoverImage source='image16' />  
                    <HoverImage source='image17' />  
                </div>
           
        </div>
    )
}

export default Media;