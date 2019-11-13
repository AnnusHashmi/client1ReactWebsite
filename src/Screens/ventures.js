import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './ventures.css'
import firebase from '../config/firebase'



class  Ventures extends React.Component {

    state={
        ventures:[]
    }
    componentDidMount(){
        this.getVentures();
    }
getVentures(){
    var arr=[];
    firebase.firestore().collection('ventures').get()
    .then((data)=>{
        data.forEach((e)=>{
            arr.push(e.data());
        })
        console.log(arr,'arr');
        this.setState({ventures:arr})
    })
    .catch(e=>console.log(e))
}
    render(){
    
    return (

        <div className="main-container">
            <div className='first-block'>
                <div className='title'>
                Ventures
                </div>
                <div className='para'>
                The Military Accountant General as well as the Chief Controller Military Accounts have assigned multiples tasks to this office, in order to 
                improve service delivery and smooth functioning of the Pakistan Military Accounts Department.
                </div>
            </div>
            {this.state.ventures.map((e,i)=>{

               return  <div key={i} className='card'>
                <div className='text-div'>
                    <div className='text-title'>{e.venturetitle}</div>
                    <div className='text-detail'>{e.venturedetail}</div>
                </div>
                <div className='img-div'>
                    <img className='img' src={e.photo}/>
                </div>
           </div>
            })}

          
        </div>
    )
}
}
export default Ventures;