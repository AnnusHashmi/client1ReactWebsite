import React from 'react';
import './downloadcard.css'


function DownloadCard(props) {
    console.log(props);
    return(
        <a href={props.link} download className = "main-div ">
                    <div className = "icon-div">
                        <i className='icon' class="fa fa-download fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className = "heading">
                         {props.title} 
                    </div>

                    <div className = "text">
                            { props.text }
                    </div>

                    <div className="serviceCardtext">
                            {props.status}
                        </div>

                        
                
        </a>
    )
}

export default DownloadCard