import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceCard from '../Components/serviceCards'
import ServiceCardGreen from '../Components/serviceCardGreen'
import './downloads.css'
import ChecklistCard from '../Components/ChecklistCard'
import DownloadCard from '../Components/DownloadCard'
import DownloadCardGreen from '../Components/DownloadCardGreen'
import Footer from './footer';


function Downloads() {

    return (
        <div className="downloads-container-games">


            <div className="downloads-first-block">
                <div className="downloads-heading">
                    Downloads
            </div>
                <div className='downloads-subheading'>
                    Click below links to Download
            </div>
            </div>
            <div className='downloads-sec-block'>
                <div className='downloads-sec-heading'>
                    Forms
                </div>
                <Row>

                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Leave Application Form" text="(Casual & Annual)" /> </Col>
                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Medical Treatment Application Form" text="(Self / Family) " /> </Col>
                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Application of Retention of Accomodation" text="(Govt Accomodation)" /> </Col>
                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Advances Form" text="(GPF, HBA, MCA etc.)" /> </Col>

                </Row>
            </div>



            <div className="downloads-third-block">
                    <Row>

                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Provisional Payment Application Form" text="Army Officers Payment Sections. . . ." /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="(Hajj, Umrah, Abroad)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="(Applying to other departments)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Advances Form" text="(Tenure Completion)" /> </Col>

                    </Row>
                

            </div>


            <div className="downloads-sec-block">

                    <Row>

                        <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Application Form" text="(Hiring)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Application Form" text="(De-Hiring)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Application Form" text="(Renewal of Hiring Contract)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCardGreen title="Advances Form" text="(Change of Address for Hiring)" /> </Col>
                        
                    </Row>
              
            </div>


            <div className="downloads-third-block">
               
                    <Row>

                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="(Hiring)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="(De-Hiring)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="(Renewal of Hiring Contract)" /> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Advances Form" text="(Change of Address for Hiring)" /> </Col>
                    </Row>
               
            </div>

            <div className='checklist-heading-div'>
                Checklists
        </div>
            <div className='checklist-div'>
                <Row>

                    <Col sm={6} md={6} lg={3}> <ChecklistCard title="Provisional Payments" text={[
                                                                                             "Application for Provisional Payment",
                                                                                             "Office Order Regarding ' Taken on Strength'",
                                                                                             " Photocopy of CNIC",
                                                                                             "Photocopy of Last Payment Certificate (LPC) or Pay Slip issued by his / her previous CMA",
                                                                                             "Completion of HR Proforma",
                                                                                            
                                                                                            ]} /> </Col>
                      <Col sm={6} md={6} lg={3}> <ChecklistCard title="TA / DA Claims" text={[
                                                                                             "PAFT - 1715 (Duly Completed)",
                                                                                             " Move Sanction",
                                                                                             " Move Order",
                                                                                             "Guest Room Bill",
                                                                                             " LPC (permanent posting)",
                                                                                             "Occupation / Vacation of both old and new duty station",
                                                                                             "Causality Return (CR)",
                                                                                             " Road Millage Certificate",
                                                                                             " Luggage Certificate in terms of JSI - 1385",
                                                                                             ". Car Transportation (EVK) in terms of JSI - 583",
                                                                                            
                                                                                            ]} /> </Col>
                    <Col sm={6} md={6} lg={3}> <ChecklistCard title="Pension Claims (Civilians)" text={[
                                                                                             "Pension Application Form - 25 (Revised - 2016)",
                                                                                             "Retirement Sanctioning",
                                                                                             "Original Service Book or Gazetted History",
                                                                                             "LPC (PAFA-447) counter signed",
                                                                                             "Three Passport Size Photos",
                                                                                             "Photocopy of CNIC",
                                                                                             "DCS Option Form duly verified / signed by the concerned Bank",
                                                                                             "Indemnity Bond",
                                                                                             "No Demand Certificate",
                                                                                             
                                                                                            ]} /> </Col>
                                  <Col sm={6} md={6} lg={3}> <ChecklistCard title="TA / DA Recoupment" text={[
                                                                                             " Countersigned bill by the Competent Authority (PAO 39/93)",
                                                                                             " Payment Order (PAFT - 1715) dully signed by OC / CO and Unit Accountant",
                                                                                             "Movement Order",
                                                                                             "Hotel / Guest Room Charges to be furnished in original bearing serial No and duly signed by the Hotel Manager / Mes Secretary (Rubber Stamp",
                                                                                             
                                                                                             
                                                                                            ]} /> </Col>
                </Row>
            </div>


        </div>

    )
}

export default Downloads;