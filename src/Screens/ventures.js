import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './ventures.css'



function Ventures() {

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
           <div className='card'>
                <div className='text-div'>
                    <div className='text-title'>Tree Plantation</div>
                    <div className='text-detail'>MAG Orders for Tree Plantation. . . .</div>
                </div>
                <div className='img-div'>
                    <img className='img' src='https://static.wixstatic.com/media/515c2410e09149e89d8d70b84beaba0a.jpg/v1/fill/w_460,h_320,al_c,q_80,usm_0.66_1.00_0.01/Speaker.webp' />
                </div>
           </div>

           <div className='card'>
                <div className='text-div'>
                    <div className='text-title'>Salary Credit into Personal Bank Accounts</div>
                    <div className='text-detail'>Credit of Salary Bank Accounts . .</div>
                </div>
                <div className='img-div'>
                    <img className='img' src='https://static.wixstatic.com/media/f1f4ee0090a541ffb13d5ca415956608.jpg/v1/fill/w_460,h_320,al_c,q_80,usm_0.66_1.00_0.01/Businessman%20in%20a%20Car.webp' />
                </div>
           </div>

           <div className='card'>
                <div className='text-div'>
                    <div className='text-title'>Removal of Duplicate Personal Numbers</div>
                    <div className='text-detail'>ABC 123 . . .</div>
                </div>
                <div className='img-div'>
                    <img className='img' src='https://static.wixstatic.com/media/7f9581f65ce84a56be7dd86b6fc97b48.jpeg/v1/fill/w_460,h_320,al_c,q_80,usm_0.66_1.00_0.01/Handshake.webp' />
                </div>
           </div>

           <div className='card'>
                <div className='text-div'>
                    <div className='text-title'>Tree Plantation</div>
                    <div className='text-detail'>MAG Orders for Tree Plantation. . . .</div>
                </div>
                <div className='img-div'>
                    <img className='img' src='https://static.wixstatic.com/media/0a8802f2cb234551bc855be44c0f34de.jpg/v1/fill/w_460,h_320,al_c,q_80,usm_0.66_1.00_0.01/Experts%20Panel.webp' />
                </div>
           </div>
        </div>
    )
}

export default Ventures;