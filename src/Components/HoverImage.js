import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBCol } from "mdbreact";
import './HoverImage.css'


class HoverImage extends React.Component {

  render() {
    return (
      <div class="hoverimage-container">
  <img src={this.props.source} alt="Avatar" class="hoverimage"
  style={{width:'100%',height:'100%'}}
   />
  <div class="middle">
    <div class="text">
      <div className='heart-icon-div'>
    {/* <i className='heart-icon' class="fa fa-heart-o  fa-2x" aria-hidden="true"></i> */}
      </div>
    <div className='share-icon-div'>
    {/* <i className='share-icon' class="fa fa-share-alt  fa-2x" aria-hidden="true"></i> */}
    </div>
    </div>
  </div>
    </div>
    );
  }
}

export default HoverImage;