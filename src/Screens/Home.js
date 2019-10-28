import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './home.css'
import MyMap from '../Components/MyMap'


function Home() {

    return (

        <div className="main-container">

            <div className="first-block">
                <div className="title-div">
                <div className='title'>
                <div className='title1'>Controller Military Accounts </div>
                <div className='title2'>(Quetta Command)</div>
                <div className='subtitle-div'>
                    <h3 className='subtitle'>Expect Great Changes</h3>
                </div>
                <div className='btn-div' >
                    <button className='btn'>
                        Tell me more
                    </button>
                </div>
                </div>
                </div>
                
                </div>
                <div className='sec-block'> 
                    <div className='image-div'>
                        <img src='https://static.wixstatic.com/media/8011f8_01e4818052854700ab9577c0eeae2145~mv2_d_2100_1500_s_2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01/5x7%20(1)_JPG.webp'
                        className='image'
                        />
                    </div>
                    <div className='sec-block-title'>
                    Controller Military Accounts
                    </div>
                    <div className='sec-block-title'>
                        (Quetta Command)
                    </div>
                    <div className='sec-block-title2'>
                    February 11, 2023
                    </div>
                    <div className='first-para'>
                        <p className='first-para-text'>
                    Pakistan Military Accounts Department (PMAD) is an attached Department of Ministry of Defence mainly responsible for making payments to the Armed Forces, maintaining accounts thereof and rendering financial advice to defence authorities. It also has a well established internal audit mechanism in the form of Local Audit offices 
                    functioning under the Controller of Local Audit (Defence Services).
                        </p>
                        <p className='first-para-text'>
                        Military Accounts Department deals with payments, accounting and internal audit in respect of three Defence Forces, Defence Production Division and Inter Services Organizations Establishment.
                        </p>
                    </div>
                </div>

                <div className='third-block'>
                    <div className='third-nested-block'>
                        
                    <div className='map-div'>
                    <MyMap
                    isMarkerShown
                    location={{ lat:30.2107328, lng:67.025957 }}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                    </div>
                    <div className='contact-div'>
                        <div className='contact-heading'>Contact</div>
                        <div className='contact-address'>CMA Complex, Malik Kabir Road, Quetta Cantt.</div>
                        <div className='contact-address'>info.cma.qc@gmail.com</div>
                        <div className='contact-address'>081 9202326</div>
                    <div className='form'>
                        <input className='input' placeholder='Name'/>
                        <input className='input' placeholder='Email'/>
                        <input className='input' placeholder='Subject'/>
                        <textarea placeholder='Type your message here...' className='mul-input' rows = "5" cols = "60" name = "description">
                        </textarea>
                        <div className='sb-btn-div'>
                        <button className='sb-btn'>Submit</button>
                        </div>
                        <div className='thanks-msg'>Thanks For Submitting</div>
                    </div> 
                    </div>

                    </div>
                </div>
           
        </div>
    )
}

export default Home;