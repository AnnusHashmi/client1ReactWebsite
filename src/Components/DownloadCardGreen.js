import React from 'react';
import Card from 'react-bootstrap/Card'
import './downloadcardGreen.css'


function DownloadCardGreen(props) {
    console.log(props);
    return (
        <a href={props.link} download className="card-padding">
            
                <div className="background-color">
                        <div className="align-icon">
                        <i class="fa fa-download  fa-3x" aria-hidden="true"></i>
                        </div>
                        <div className="serviceCardHeading ">
                             {props.title}
                        </div>

                        <div className="serviceCardtext">
                            {props.text}
                        </div>

                        <div className="serviceCardtext">
                            {props.status}
                        </div>

                   
                </div>

        </a>
    )
}

export default DownloadCardGreen