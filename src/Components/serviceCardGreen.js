import React from 'react';
import Card from 'react-bootstrap/Card'
import './serviceCardGreen.css'


function ServiceCardGreen(props) {
    console.log(props);
    return (
        <a href={props.link} className="card-padding">

                <div className="background-color">
                        <div className="align-icon">
                        <i class="fa fa-check-circle  fa-3x" aria-hidden="true"></i>
                        </div>
                        <div className="serviceCardHeading ">
                             {props.title}
                        </div>

                        <div className="serviceCardtext">
                            {props.text}

                        </div>

                   
                </div>

        </a>
    )
}

export default ServiceCardGreen