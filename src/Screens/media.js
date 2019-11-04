import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './media.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer';
import HoverImage from '../Components/HoverImage'


class Media extends React.Component {
state={
    flag:true
}
gotoPhotos(){
    this.setState({flag:false});
}
goback(){
    this.setState({flag:true})
}
render(){
    
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
                {this.state.flag?
                <div className='folders'>
                    <div className='fold-heading'>
                    Events    
                    </div>
                    <div className='event-div'>
                        <div onClick={this.gotoPhotos.bind(this)} className='event'>
                            <HoverImage source='image1'/>
                            <div className='event-text'>Text</div>
                            <div className='event-subtext'>click to see more photos of this event</div>
                        </div>

                        <div onClick={this.gotoPhotos.bind(this)} className='event'>
                            <HoverImage source='image1'/>
                            <div className='event-text'>Text</div>
                            <div className='event-subtext'>click to see more photos of this event</div>
                        </div>

                        <div className={this.gotoPhotos.bind(this)} className='event'>
                            <HoverImage source='image1'/>
                            <div className='event-text'>Text</div>
                            <div className='event-subtext'>click to see more photos of this event</div>
                        </div>
                    </div>
                </div>
                :
                <div className='insidefolder'>
                <div className='media-photos-head'>
                <div onClick={this.goback.bind(this)} className = "back-icon-div">
                    <i class="fa fa-arrow-left  fa-3x" aria-hidden="true"></i>
                </div>
                <div className='infolder-title'>
                     Text   
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
                }
           
        </div>
    )
    }   
}

export default Media;