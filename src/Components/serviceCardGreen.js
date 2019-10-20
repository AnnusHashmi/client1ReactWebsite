import React from 'react';
import Card from 'react-bootstrap/Card'
import './serviceCardGreen.css'


function ServiceCardGreen(props) {
    console.log(props);
    return(
        <div className = "card-padding">
            
            <Card>
                <div className = "background-color">    
                <Card.Body>
                    <div className = "align-icon"><i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i></div>
                    <div className = "serviceCardHeading ">
                         <Card.Title><h4> {props.title} </h4></Card.Title>
                    </div>

                    <div className = "serviceCardtext">
                        <Card.Text>
                            { props.text }
                        </Card.Text>
                    </div>
                        
                </Card.Body>
                </div>
            </Card>
            

        </div>
    )
}

export default ServiceCardGreen