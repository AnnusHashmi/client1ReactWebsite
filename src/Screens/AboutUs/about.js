import React from 'react';
import Row from 'react-bootstrap/Row'
// import div from 'react-bootstrap/div'
import siraziz from '../Images/sirAziz.jpeg'
import sirsyed from '../Images/sirsyed.png'
import sirsajjad from '../Images/sirsajjad.png'
import sirraza from '../Images/sirraza.png'
import './about.css'
import Card from 'react-bootstrap/Card'
import Footer from '../footer';

function AboutUs() {

    return (

        <div >

            {/* MY TEAM PARTY */}
            <div className='tm-first-block'>
            <div className = "tm-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                <div className='tm-heading'>Team Members</div>
            </div>
            <div className=' backgroundColor'>
                
                <div className='team-members-div'>

                    <div className='member-div'>
                        <div class='member-img'>
                            <img src={sirsajjad} className='img-left ' />
                        </div>
                        <div className='text-style-team padding-top-name'>
                            <h3 className='h3'>Sir Sajjad Hyder</h3>
                            <h5 className='h5'>Military Accountant General</h5>
                        </div>
                    </div>

                    <div className='member-div'>
                        <div class='member-img'>
                        <img src={sirraza} className='img-left' />
                    </div>
                    <div className='text-style-team padding-top-name'>
                        <h3 className='h3'>Khurram Raza Qureshi</h3>
                        <h5 className='h5'>Chief Controller Military Accounts</h5>
                    </div>


                </div>



                <div className='member-div'>
                    <div  class='member-img'>
                        <img src={siraziz} className='img-left' />
                    </div>
                    <div className='text-style-team padding-top-name'>
                        <h3 className='h3'>Azeez Ahmad Zai</h3>
                        <h5 className='h5'>Controller Military Accounts</h5>
                    </div>
                </div>

                <div className='member-div'>
                    <div class='member-img'>
                        <img src={sirsyed} className='img-left' />
                    </div>
                    <div className='text-style-team padding-top-name'>
                        <h3 className='h3'>Syed Roohullah</h3>
                        <h5 className='h5'>Deputy Controller Military Accounts</h5>
                    </div>
                </div>
            </div>
        </div>
            
        </div >
    );
}

export default AboutUs;