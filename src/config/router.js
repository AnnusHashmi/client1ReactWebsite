import React , {Component} from 'react'
import Admin from '../Screens/admin'
import CivilPension from '../Screens/civilPension'
import InternalAudit from '../Screens/internalAudit'
import PostAudit from '../Screens/post-audit'
import MyNavbar from '../Components/navbar'
import PreAudit from '../Screens/pre-audit'
import Media from '../Screens/media'
import Footer from '../Screens/footer'
import Crousel from '../Screens/Crousel'
import Home from '../Screens/Home' 
import Ventures from '../Screens/ventures'
import AboutUs from '../Screens/AboutUs/about'
import HumanResource from '../Screens/AboutUs/hr'
import Organistion from '../Screens/AboutUs/OS'
import Downloads from '../Screens/downloads'
import News from '../Screens/new'
import Contact from '../Screens/contact'
import { BrowserRouter as Router , Route, Link} from 'react-router-dom'
import Background from '../Screens/AboutUs/background'

export default class Navigation extends Component{
state={
    dashboard:false,
    RestDashboard:false
}
    render(){
    console.log(this.state,'navigation prosp')
    return(
        <Router>
            <MyNavbar/>
            <div style={{backgroundColor:'white'}}>

                <Route exact path='/' component={Home}/>
                <Route exact path='/Ventures' component={Ventures}/>
                <Route exact path='/Media' component={Media}/>
                <Route exact path='/downloads' component={Downloads}/>
                <Route path='/services/preaudit' component={PreAudit}/>
                <Route path='/services/civilPension' component={CivilPension}/>
                <Route path='/services/internalaudit' component={InternalAudit} />
                <Route path='/services/Postaudit' component={PostAudit}/>
                {/* <Route path='/services/adminSection' component={Admin}/> */}
                <Route path='/aboutus/background' component={Background}/>
                <Route path='/aboutus/teamMembers' component={AboutUs}/>
                <Route path='/aboutus/humanResource' component={HumanResource}/>
                <Route path='/aboutus/organizationsetup' component={Organistion}/>
                <Route path='/news' component={News}/>
                <Route path='/Crousel' component={Crousel}/>
                <Route path='/contact' component={Contact}/>
                
                {/* <Route path='/dashboard' render={(props)=><Dashboard {...props} dashboardon={()=>{this.setState({dashboard:true,RestDashboard:true})}} dashboardoff={()=>{
                    console.log('dashboard on');
                    this.setState({dashboard:false})}}/>} /> */}
                <Route path='/preAudit' component={PreAudit} />

                {/* <Route exact path='/RestaurantDashboard' render={(props)=><RestaurantDashboard {...props} RestDashboardon={()=>{this.setState({RestDashboard:true,dashboard:true})}} restdashboardoff={()=>{this.setState({RestDashboard:false})}}/>}/> */}
                </div> 
            <Footer></Footer>
        </Router>
    )
}

}