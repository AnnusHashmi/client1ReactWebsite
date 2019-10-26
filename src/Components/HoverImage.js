import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBCol } from "mdbreact";
import '../assets/image1.jpeg'


class HoverImage extends React.Component {
    constructor(){
        super()
        this.state={
            photos:[
            '../assets/image1.jpeg',
            '../assets/image2.jpeg',
            '../assets/image3.jpeg',
            '../assets/image4.jpeg',
            '../assets/image5.jpeg',
            '../assets/image6.jpeg',
            '../assets/image7.jpeg',
            '../assets/image8.jpeg',
            '../assets/image9.jpeg',
            '../assets/image10.jpeg',
            '../assets/image11.jpeg',
            '../assets/image12.jpeg',
            '../assets/image13.jpeg',
            '../assets/image14.jpeg',
        ]
        }
    }
  render() {
    return (
      <MDBContainer className="mt-5">
           <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
              <MDBView hover>
                <img
                  src={this.props.source}
                  className="img-fluid"
                  alt=""
                />
                <MDBMask className="flex-center" overlay="red-strong">
                  <p className="white-text">Strong overlay</p>
                </MDBMask>
              </MDBView>
            </div>          
      </MDBContainer>
    );
  }
}

export default HoverImage;