import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './media.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './footer';
import HoverImage from '../Components/HoverImage'
import firebase from '../config/firebase'

class Media extends React.Component {
state={
    flag:true,
    media:[],
    album:{}
}
gotoPhotos(e){
    this.setState({flag:false,album:e});
}
goback(){
    this.setState({flag:true})
}
componentDidMount(){
    this.getMedia();
}

getMedia(){
    var arr=[];
firebase.firestore().collection('media').get()
.then((data)=>{
    data.forEach((e)=>{
        arr.push(e.data());
    })
    console.log(arr,'arr');
    this.setState({media:arr})
})
.catch(e=>console.log(e))
}

render(){
    
    return (

        <div className="media-main-container">

        <div className='media-first-block'>
            <div className = "media-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                <div className='media-heading'>Media</div>
            </div>
                {this.state.flag?
                <div className='folders'>
                    <div className='fold-heading'>
                    Events    
                    </div>
                    <div className='event-div'>
                    {this.state.media.map((e,i)=>{
                      return  <div key={i} onClick={this.gotoPhotos.bind(this,e)} className='event'>
                            <HoverImage source={e.photos[0]}/>
                            <div className='event-text'>{e.albumName}</div>
                            <div className='event-subtext'>click to see more photos of this event</div>
                        </div>
                    })}
                    </div>
                </div>
                :
                <div className='insidefolder'>
                <div className='media-photos-head'>
                <div onClick={this.goback.bind(this)} className = "back-icon-div">
                    <i class="fa fa-arrow-left  fa-3x" aria-hidden="true"></i>
                </div>
                <div className='infolder-title'>
                     {this.state.album.albumName}   
                </div>
                </div>   
                <div className='media-photos-div'>
                {this.state.album.photos.map((e,i)=>{
                   return <HoverImage source={e} />  
                })} 
                </div>
                </div>
                }
           
        </div>
    )
    }   
}

export default Media;