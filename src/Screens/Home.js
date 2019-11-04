import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './home.css'
import MyMap from '../Components/MyMap'


function Home() {

    return (

        <div className="main-container">

            <div className="home-first-block">
                <div className="home-title-div">
                <div className='home-title'>
                <div className='home-title1'>Controller Military Accounts </div>
                <div className='home-title2'>(Quetta Command)</div>
                <div className='home-subtitle-div'>
                    <h3 className='home-subtitle'>Expect Great Changes</h3>
                </div>
                <div className='btn-div' >
                    <a href='#more' className='btn'>
                        Tell me more
                    </a>
                </div>
                </div>
                </div>
                </div>
                <div className='home-noti-div'>
                   <div className='imp-alerts-div'>
                    <div className='alert-head'>
                        Alerts
                    </div>
                    <div className='imp-alerts'>
                        No alerts right now
                    </div>
                   </div>
                   <div className='news-sidebar'>
                <div className='useful-links-div'>
                    <div className='mati-heading'>Useful Links</div>
                    <div className='useful-links'>
                        <a className='useful-news-links' href='http://www.pakistan.gov.pk'>Government of Pakistan</a>
                        <a className='useful-news-links' href='http://www.agp.gov.pk'>Auditor General of Pakistan</a>
                        <a className='useful-news-links' href='http://www.mod.gov.pk'>Ministry of Defence</a>
                        <a className='useful-news-links' href='http://www.finance.gov.pk'>Ministry of Finance</a>
                        <a className='useful-news-links' href='http://www.establishment.gov.pk'>Establishment Division</a>
                    </div>

            </div>
            </div>
            <div className='news-sidebar'>
            <div className='cma-links-div'>
                    <div className='mati-heading'>CMA Links</div>
                    <div className='useful-links'>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/#'>Controller Military Account (RC) Rawalpindi</a>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/op'>Controller Military Account (OP) Rawalpindi</a>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/cmap'>Controller Military Account (pension) Lahore</a>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/cladp'>Controller Local Audit (DP) Rawalpindi</a>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/caaf'>Controller Accounts of AirForce (CAAF) Peshawar</a>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/#'>Controller Local Audit (DS) Lahore</a>
                        <a className='useful-news-links' href='http://www.pmad.gov.pk/mc'>Controller Military Accounts (MC) Multan</a>
                    </div>

            </div>
    
                
            </div>
                    </div>
                <div id='more' className='sec-block'> 
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
                    <div id='contact' className='contact-div'>
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