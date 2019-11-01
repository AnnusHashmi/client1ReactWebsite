import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './news.css'

function News() {

    return (

        <div className="news-main-container">
            <div className='news-first-block'>
            <div className = "news-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                <div className='news-heading'>News</div>
            </div>
            <div className='news-sec-block'>
            <div className='news-sidebar'>
            <div className='mati-heading'>Menu</div>
                <a className='news-links' href='#'>PIPFA Notifications & Circulars </a>
                <a className='news-links' href='#'>Achievements</a>
                <a className='news-links' href='#'>Tender and Jobs Notifications</a>
                <div className='mati-heading'>MATI Courses  Calender</div>
                <a className='news-links' href='#'>Short Courses</a>
                <a className='news-links' href='#'>Computer Courses</a>
                
            </div>
            <div className='circulars-div'>
                <div className='circulars-heading'>
                    PIPFA Notifications & Circulars
                </div>
                <div className='circulars'>
                    <div className='table-headings'>
                        <div className='notification-head'>Notifications</div>
                        <div className='date-head'>date</div>
                    </div>
                    <div className='circular'>
                        <div className='noti-text'>
                            Text
                        </div>
                        <div className='noti-date'>
                            date
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <div className='courses-div'>
                <div className='courses-heading'>
                    Course Plan - 2019
                </div>
                <div className='courses-subheading'>
                    Rawalpindi, Lahore, Multan, Karachi, Wah, Peshawar, Quetta
                </div>
                <div className='shortc-div'>
                    <div className='shortc-head'>
                        Short Courses
                    </div>
                    <div className='shortc'>

                    </div> 

                </div>
                <div className='compc-div'>
                    <div className='compc-head'>Computer Courses</div>
                    <div className='compc'>
                        hello world
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default News;