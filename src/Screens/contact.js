import React from 'react'
import './home.css'
import './contact.css'
import MyMap from '../Components/MyMap'
import {contactNumbers} from '../config/contactNumebers'


function Contact() {

    return(
        <div>

            <div id='contact-first-block' className='news-first-block'>
            <div id='icon-div' className = "news-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                <div id='contacts-head' className='news-heading'>Contacts</div>
            </div>



            <div id='shortCourses' className='contact-div'>
                    <div id='contact-head-div' className='shortc-head'>
                        Contact Numbers
                    </div>
                    <div id='contact-main-div' className='shortc'>
                <div className='shortc-table-heads'>
                    <div id='contact-sno' className='shortc-sno-head'>
                    S. No.
                    </div>
                    <div id='contact-name-head' className='shortc-cname-head'>
                    Name
                    </div>
                    <div id='contact-desig-head' className='contact-desig-head'>
                    Degisnation
                    </div>
                    <div id='contact-sec-head' className='contact-section-head'>
                    Section
                    </div>
                    <div id='contact-num-head' className='contact-num-head'>
                    Number
                    </div>
                </div>
                {contactNumbers.map((e)=>{
                   return <div className='shortc-table-items'>
                    <div id='contact-sno' className='shortc-sno'>
                    {e.sno}
                    </div>
                    <div id='contact-name' className='shortc-cname'>
                    {e.Name}
                    </div>
                    <div id='contact-desig' className='contact-desig'>
                    {e.Degisnation}
                    </div>
                    <div id='contact-sec' className='contact-section'>
                    {e.Section || '-'}
                    </div>
                    <div id='contact-num' className='contact-num'>
                    {e.Cell}
                    </div>
                </div>
                })}
                    </div> 

                </div>


                <br/>

  <div className='third-block'>
                    <div className='third-nested-block'>
                        
                    <div className='map-div'>
                    <MyMap
                    isMarkerShown
                    location={{ lat:30.2082979, lng:67.038313 }}
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
      
    );
}


export default Contact;