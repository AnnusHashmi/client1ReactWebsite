import React from 'react';
import Card from 'react-bootstrap/Card'
import './CheckingCard.css'


function ChecklistCard(props) {
    console.log(props);
    return(
        <div className = "cl-main-div ">
                    <div className = "cl-icon-div">
                        <i className='icon' class="fa fa-check-circle fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className = "cl-heading">
                         {props.title} 
                    </div>

                    <ol className = "cl-text">
                            { props.text.map(e=>{
                        return <li>{e}</li>
                            }) }
                    </ol>
                        
                
        </div>
    )
}

export default ChecklistCard