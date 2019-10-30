import React from 'react';
import Card from 'react-bootstrap/Card'
import './serviceCards.css'


function DownloadCard(props) {
    console.log(props);
    return(
        <div className = "main-div ">
                    <div className = "icon-div">
                        <i className='icon' class="fa fa-download fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className = "heading">
                         {props.title} 
                    </div>

                    <div className = "text">
                            { props.text }
                    </div>
                        
                
        </div>
    )
}

export default DownloadCard