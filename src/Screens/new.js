import React from 'react';
import ServiceCard from '../Components/serviceCards'
import './news.css'
import {shortCourse,computerCourse} from '../config/courses'

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
                <a className='news-links' href='#pipfa'>PIPFA Notifications & Circulars </a>
                <a className='news-links' href='#achievement'>Achievements</a>
                <a className='news-links' href='#tender'>Tender and Jobs Notifications</a>
                <div className='mati-heading'>MATI Courses  Calender</div>
                <a className='news-links' href='#shortCourses'>Short Courses</a>
                <a className='news-links' href='#compCourses'>Computer Courses</a>
                
            </div>
            <div id='pipfa' className='circulars-div'>
                <div className='circulars-heading'>
                    PIPFA Notifications & Circulars
                </div>
                <div className='circulars'>
                    <div className='table-headings'>
                        <div className='sno-head'>S.No.</div>
                        <div className='notification-head'>Notifications</div>
                        <div className='date-head'>date</div>
                    </div>
                    <div className='circular'>
                        <div className='sno'>1</div>
                        <div className='noti-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
                        </div>
                        <div className='noti-date'>
                            11/11/2019
                        </div>
                    </div>

                    <div className='circular'>
                        <div className='sno'>1</div>
                        <div className='noti-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
                        </div>
                        <div className='noti-date'>
                            11/11/2019
                        </div>
                    </div>

                    <div className='circular'>
                        <div className='sno'>1</div>
                        <div className='noti-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
                        </div>
                        <div className='noti-date'>
                            11/11/2019
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <div className='news-third-block'>
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
            <div id='tender' className='circulars-div'>
                <div className='circulars-heading'>
                    Tender & Job Notifications
                </div>
                <div className='circulars'>
                    <div className='table-headings'>
                        <div className='sno-head'>S.No.</div>
                        <div className='notification-head'>Notifications</div>
                        <div className='date-head'>date</div>
                    </div>
                    <div className='circular'>
                        <div className='sno'>1</div>
                        <div className='noti-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
                        </div>
                        <div className='noti-date'>
                            11/11/2019
                        </div>
                    </div>

                    <div className='circular'>
                        <div className='sno'>1</div>
                        <div className='noti-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
                        </div>
                        <div className='noti-date'>
                            11/11/2019
                        </div>
                    </div>

                    <div className='circular'>
                        <div className='sno'>1</div>
                        <div className='noti-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
                        </div>
                        <div className='noti-date'>
                            11/11/2019
                        </div>
                    </div>
                </div>

            </div>
            </div>

            <div className='courses-div'>
            <div className='courses-heading-div'>
            <div className = "news-icon-div">
                    <i class="fa fa-check-circle  fa-5x" aria-hidden="true"></i>
                </div>
                <div className='courses-heading'>
                    Course Plan - 2019
                </div>
                <div className='courses-subheading'>
                    Rawalpindi, Lahore, Multan, Karachi, Wah, Peshawar, Quetta
                </div>
            </div>
                <div id='shortCourses' className='shortc-div'>
                    <div className='shortc-head'>
                        Short Courses
                    </div>
                    <div className='shortc'>
                <div className='shortc-table-heads'>
                    <div className='shortc-sno-head'>
                    S. No.
                    </div>
                    <div className='shortc-cname-head'>
                    Course Name
                    </div>
                    <div className='shortc-month-head'>
                    Month
                    </div>
                    <div className='shortc-level-head'>
                    Level
                    </div>
                    <div className='shortc-duration-head'>
                    Duration
                    </div>
                    <div className='shortc-date-head'>
                    Dates
                    </div>
                </div>
                {shortCourse.map((e)=>{
                   return <div className='shortc-table-items'>
                    <div className='shortc-sno'>
                    {e.sno}
                    </div>
                    <div className='shortc-cname'>
                    {e.name}
                    </div>
                    <div className='shortc-month'>
                    {e.month}
                    </div>
                    <div className='shortc-level'>
                    {e.level}
                    </div>
                    <div className='shortc-duration'>
                    {e.duration}
                    </div>
                    <div className='shortc-date'>
                    {e.dates}
                    </div>
                </div>
                })}
                    </div> 

                </div>
                <div id='compCourses' className='compc-div'>
                    <div className='compc-head'>Computer Courses</div>
                    <div className='compc'>
                    <div className='shortc-table-heads'>
                    <div className='shortc-sno-head'>
                    S. No.
                    </div>
                    <div className='shortc-cname-head'>
                    Course Name
                    </div>
                    <div className='shortc-month-head'>
                    Month
                    </div>
                    <div className='shortc-level-head'>
                    Level
                    </div>
                    <div className='shortc-duration-head'>
                    Duration
                    </div>
                    <div className='shortc-date-head'>
                    Dates
                    </div>
                    <div className='compc-station-head'>
                    Station
                    </div>
                </div>
                {computerCourse.map((e)=>{
                   return <div className='shortc-table-items'>
                    <div className='shortc-sno'>
                    {e.sno}
                    </div>
                    <div className='shortc-cname'>
                    {e.name}
                    </div>
                    <div className='shortc-month'>
                    {e.month}
                    </div>
                    <div className='shortc-level'>
                    {e.level}
                    </div>
                    <div className='shortc-duration'>
                    {e.duration}
                    </div>
                    <div className='shortc-date'>
                    {e.dates}
                    </div>
                    <div className='compc-station'>
                        {e.station}
                        </div>
                </div>
                })}
                    </div>    
                </div>
            </div>

            <div id='achievement' className='achievements-div'>
                <div className='achievements-heading'>
                    Achievements
                </div>
                <div className='achievements'>

                <div className='card'>
                <div className='text-div'>
                    <div className='text-title'>Tree Plantation</div>
                    <div className='text-detail'>MAG Orders for Tree Plantation. . . .</div>
                </div>
                <div className='img-div'>
                    <img className='img' src='https://static.wixstatic.com/media/0a8802f2cb234551bc855be44c0f34de.jpg/v1/fill/w_460,h_320,al_c,q_80,usm_0.66_1.00_0.01/Experts%20Panel.webp' />
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
            </div>

        </div>
    )
}

export default News;