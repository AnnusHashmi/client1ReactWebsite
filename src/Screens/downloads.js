import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './downloads.css'
import ChecklistCard from '../Components/ChecklistCard'
import DownloadCard from '../Components/DownloadCard'
import DownloadCardGreen from '../Components/DownloadCardGreen'



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

                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FLeave%20application.docx?alt=media&token=2fae733b-5e86-42f5-b50f-063b384d3954' title="Leave Application Form" text="Casual & Annual" status = "Click to download"/> </Col>
                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FMedical%20Application.docx?alt=media&token=bf148adf-e860-4bb0-a9c7-0c041c1c9a35' title="Medical Treatment Application Form" text="Self / Family " status = "Click to download"/> </Col>
                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FAPPLICATION%20FOR%20RETENTION%20OF%20HOUSE.docx?alt=media&token=9482ff55-f93b-464c-b58b-614ce9cce5a9' title="Application of Retention of Accomodation" text="Govt Accomodation" status = "Click to download"/> </Col>
                    <Col sm={6} md={6} lg={3}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FAPPLICATION%20HBA-MCA.docx?alt=media&token=c094e120-7774-4a7e-b1d4-88f3d5378dd2' title="Advances Form" text="GPF, HBA, MCA etc." status = "Click to download"/> </Col>

                </Row>
            </div>



            <div className="downloads-third-block">
                    <Row>

                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Provisional Payment Application Form" text="Army Officers Payment Sections. . . ." status = "(To be added soon)"/> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="Hajj, Umrah, Abroad" status = "(To be added soon)"/> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Application Form" text="Applying to other departments" status = "(To be added soon)"/> </Col>
                        <Col sm={6} md={6} lg={3}> <DownloadCard title="Advances Form" text="Tenure Completion" status = "(To be added soon)"/> </Col>

                    </Row>
                

            </div>


            <div className="downloads-sec-block">
                    <Row>

                        <Col sm={6} md={6} lg={4}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FApplication%20for%20Hiring.docx?alt=media&token=0d14f085-6585-4286-b41b-94df1046bc93' title="Application Form" text="(Hiring)" status = "Click to download"/> </Col>
                        <Col sm={6} md={6} lg={4}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FApplication%20for%20De%20Hiring.docx?alt=media&token=19d8e951-881c-49fd-8319-b311c8a02e16'title="Application Form" text="(De-Hiring)" status = "Click to download"/> </Col>
                        <Col sm={6} md={6} lg={4}> <DownloadCardGreen link='https://firebasestorage.googleapis.com/v0/b/controllermilitaryaccounts.appspot.com/o/audit%20files%2FApplication%20for%20Rehiring.docx?alt=media&token=03c01241-024e-40d3-8cde-60f3ac38bf8d' title="Application Form" text="(Renewal of Hiring Contract)" status = "Click to download"/> </Col>
                        
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