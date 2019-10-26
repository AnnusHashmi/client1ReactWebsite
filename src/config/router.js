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
import { BrowserRouter as Router , Route, Link} from 'react-router-dom'

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
            <div>

                <Route exact path='/' component={Ventures}/>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Media' component={Media}/>
                <Route path='/services/preaudit' component={PreAudit}/>
                <Route path='/civilPension' component={CivilPension}/>
                <Route path='/services/internalaudit' component={InternalAudit} />
                <Route path='/services/Postaudit' component={PostAudit}/>
                <Route path='/Crousel' component={Crousel}/>
                
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