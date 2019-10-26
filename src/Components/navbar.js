import React from 'react';
import Card from 'react-bootstrap/Card'
import './navbar.css'
import { Navbar, NavbarBrand,OutlinedButtons, Button } from 'react-bootstrap'

const styles = {
    navBtnDiv: {
        justifyContent: "flex-end",
        display: "flex",
        width: "100%"
    },
    navBtn: {
        float: "left",
        backgroundColor: " white",
        color: "#D60665",
        border: "2px solid   #D60665",
        // margin: "20px"
    },
}

function MyNavbar(props) {
    console.log(props);
    return(
        <div className = "navbar-div">
                <div className='navbar-top'>
                <div className='logo-div'>
                    <img className='logo-img' src='https://static.wixstatic.com/media/8011f8_903df46983f3413ba1a3db736da14a49~mv2.png/v1/fill/w_50,h_59,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202019-08-05%20at%2012_30_41%20PM.webp' />
                </div>
                <div className='nav-title'>
                    Controller Millitary Accounts (QC), Quetta Cantt
                </div>
                <div className='nav-btn-div'> 
                    <button className='nav-btn'>Get In Touch</button>
                </div>
                    </div>
                    {/* <div className='navbar-bottom'>
                        <div className='nav-items-div'>
                        <div className='nav-items'>Home</div>
                        <div className='nav-items'>About Us</div>
                        <div className='nav-items'>Services</div>
                        <div className='nav-items'>Downloads</div>
                        <div className='nav-items'>Media</div>
                        <div className='nav-items'>Ventures</div>
                        <div className='nav-items'>Facilitation Center</div>
                        </div>
                        <div className='phone-no-div'>
                        081 9202326
                        </div>
                    </div>     */}
                       <Navbar style={{ borderBottom: "4px solid black", backgroundColor:'white' , padding:30 }} expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div style={{width:'100%'}}>
                            <button style={{borderWidth:0,backgroundColor:'white'}} title="SignUp" click={() => { this.props.history.push('/signup') }} >Services</button>
                            <button style={{borderWidth:0,backgroundColor:'white'}} title="SignIn" click={() => { this.props.history.push('/signin') }} >Downloads</button>
                        </div>
                    </Navbar.Collapse>

                </Navbar>
                  
                
        </div>
    )
}

export default MyNavbar