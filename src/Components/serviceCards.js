import React from 'react';
import Card from 'react-bootstrap/Card'
import './serviceCards.css'


function ServiceCard(props) {
    console.log(props);
    return(
        <a href={props.link} download className = "main-div ">
                    <div className = "icon-div">
                        <i className='icon' class="fa fa-check-circle fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className = "heading">
                         {props.title} 
                    </div>

                    <div className = "text">
                            { props.text }
                    </div>
                        
                
        </a>
    )
}

export default ServiceCard