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
                    <img className='logo-img' src='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/photos%2Flogo.jpg?alt=media&token=4cdc8fea-1b49-4ddc-8971-aca1224628d0' />
                </div>
                <div className='title-btn-div'>
                    <div className='nav-title-div'>
                <div className='nav-title'>
                    Controller Millitary Accounts
                </div>
                <div className='nav-subtitle'>
                (Quetta Command)
                </div>
                </div>
                <div className='nav-btn-div'>
                    <button onClick={this.goto.bind(this,'/contact')} className='nav-btn'>Get In Touch</button>
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
                            <NavDropdown.Item onClick={this.goto.bind(this,'/aboutus/background')} className='dropLinks' href="#">Background</NavDropdown.Item>
                                {/* <NavDropdown.Item onClick={this.goto.bind(this,'/aboutus/teamMembers')} className='dropLinks' href="#">Team Members</NavDropdown.Item> */}
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

                            <Nav.Link onClick={this.goto.bind(this,'/contact')} className='links' href="#link">Contact Us</Nav.Link>

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