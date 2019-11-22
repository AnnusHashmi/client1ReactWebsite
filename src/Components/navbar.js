import React from 'react';
import Card from 'react-bootstrap/Card'
import './navbar.css'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class MyNavbar extends React.Component {

    goto(path){
        this.props.history.push(path);
    }
    render(){
    return (
        <div className="navbar-div">
            <div className='navbar-top'>
                <div className='logo-div'>
                    <img className='logo-img' src='https://static.wixstatic.com/media/8011f8_903df46983f3413ba1a3db736da14a49~mv2.png/v1/fill/w_50,h_59,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202019-08-05%20at%2012_30_41%20PM.webp' />
                </div>
                <div className='title-btn-div'>
                    <div className='nav-title-div'>
                <div className='nav-title'>
                    Controller Millitary Accounts
                </div>
                <div className='nav-subtitle'>
                Quetta Command
                </div>
                </div>
                <div className='nav-btn-div'>
                    <button className='nav-btn'>Get In Touch</button>
                </div>
                </div>
            </div>
            <div className='menu-div'>
                <Navbar style={{ width:'100%' }} expand="lg">
                    <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='collapse' id="basic-navbar-nav">
                        <Nav className="mr-auto bt-nav">
                            <Nav.Link  onClick={this.goto.bind(this,'/')} className='links' href="#home">Home</Nav.Link>

                            <NavDropdown className='dropdowns' title="About Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={this.goto.bind(this,'/aboutus/teamMembers')} className='dropLinks' href="#">Team Members</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.goto.bind(this,'/aboutus/humanResource')} className='dropLinks' href="#">Human Resource</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.goto.bind(this,'/aboutus/organizationsetup')} className='dropLinks' href="#">Organizational Setup</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>

                            <NavDropdown className='dropdowns' title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={this.goto.bind(this,'/services/preaudit')} className='dropLinks' href="#">Pre Audit</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.goto.bind(this,'/services/postaudit')} className='dropLinks' href="#">Post Audit</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.goto.bind(this,'/services/civilPension')} className='dropLinks' href="#">Civil Pension</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.goto.bind(this,'/services/internalaudit')} className='dropLinks' href="#">Internal Audit</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.goto.bind(this,'/services/adminSection')} className='dropLinks' href="#">Admin Section</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>

                            <Nav.Link onClick={this.goto.bind(this,'/downloads')} className='links' href="#link">Downloads</Nav.Link>

                            <Nav.Link onClick={this.goto.bind(this,'/Media')} className='links' href="#link">Media</Nav.Link>

                            <Nav.Link onClick={this.goto.bind(this,'/Ventures')} className='links' href="#link">Ventures</Nav.Link>
                            
                            <Nav.Link onClick={this.goto.bind(this,'/news')} className='links' href="#link">News</Nav.Link>

                            <Nav.Link onClick={this.goto.bind(this,'/contact')} className='links' href="#link">Contact</Nav.Link>

                            {/* <Nav.Link className='links' href="#link">Facilation Center</Nav.Link> */}
                            

                            
                        </Nav>
                        
                    </Navbar.Collapse>

                </Navbar>
            </div>


        </div>
    ) 
     }
}

export default withRouter(MyNavbar);