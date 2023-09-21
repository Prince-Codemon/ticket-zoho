
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
    document.title = "Home"
    return (
        <>
            <div id="content">
                <div id="newsbox">

                    {/* <div className="box-2">
                      <h2 className="headline">News</h2>
                      <span className="datafield" id="news"></span>
                  </div> */}
                    <div className="box">
                        <h2 className="headline" title="I hver unit mappe, findes der en fil der hedder feed.in . Denne liste indeholder alle feed.in filer som der er alt efter hvor mange units der er.">News</h2>
                        <table style={{ margin: 0, padding: 0 }}>
                            <tr>
                                <th>Datetime</th>
                                <th>Type</th>
                                <th>Message</th>
                            </tr>
                            <tr>
                                <td>01-13-2023 16:00</td>
                                <td>Information</td>
                                <td><a href="" style={{ color: 'black' }}>Unit: 0761-1, Service Report added</a></td>
                            </tr>
                            <tr>
                                <td>07-24-2022 15:00</td>
                                <td>Information</td>
                                <td><a href="" style={{ color: 'black' }}>Unit: 0761-1, Bulleting added</a></td>
                            </tr>
                            <tr>
                                <td>07-24-2022 15:00</td>
                                <td>Information</td>
                                <td><a href="" style={{ color: 'black' }}>Unit: 0761-1, Bulleting added</a></td>
                            </tr>
                            <tr>
                                <td>07-13-2022 16:00</td>
                                <td>Information</td>
                                <td><a href="" style={{ color: 'black' }}>Unit: 0761-1, Service Report added</a></td>
                            </tr>
                            <tr>
                                <td>02-27-2022 08:00</td>
                                <td>Information</td>
                                <td><a href="" style={{ color: 'black' }}>Unit: 0761-1, Manual added</a></td>
                            </tr>
                        </table>
                    </div>
                    <div className="box-2">
                        <h2 className="headline" title="Units findes i Zoho CRM, til hver unit oprettes der en mappe i Zoho WorkDrive. Til Units bliver der tilføjet en data template, disse har feltet ZohoCRMID som refererer til ID i Zoho CRM for Unit.
			
			https://workdrive.zoho.com/apidocs/v1/search/searchdatatemplate">Units</h2>
                        <table style={{ margin: 0, padding: 0 }}>
                            <tr>
                                <th>Unit</th>
                                <th>Type</th>
                                <th>Location</th>
                                <th>Last service</th>
                                <th>Next service</th>
                            </tr>
                            <tr onClick={()=>navigate('/units')} className="clickable" >
                                
                                <td>0761-1</td>
                                <td>My - De-icer</td>
                                <td>Aéroport de Strasbourg</td>
                                <td>01-13-2023</td>
                                <td>07-13-2023</td>
                                
                            </tr>
                            <tr onClick={()=>navigate('/units')} className="clickable" >
                                <td>0761-2</td>
                                <td>My - De-icer</td>
                                <td>Aéroport de Strasbourg</td>
                                <td>12-22-2022</td>
                                <td>06-22-2023</td>
                            </tr>
                            <tr onClick={()=>navigate('/units')} className="clickable" >
                                <td>1255-1</td>
                                <td>WS - Water Service Unit</td>
                                <td>Aéroport de Strasbourg</td>
                                <td>07-24-2022</td>
                                <td>07-24-2023</td>
                            </tr>
                        </table>
                        <p></p>
                    </div>
                    <div className="box-2" style={{ flexGrow: 1 }}>
                        <h2 className="headline">Tickets</h2>
                        <table style={{ margin: 0, padding: 0 }}>
                            <tr>
                                <th>Status</th>
                                <th>Subject</th>
                            </tr>
                            <tr className="clickable" onClick={()=>navigate('/tickets')} style={{ color: 'orange' }}>
                                <td>Open</td>
                                <td>#3956 My ON762</td>
                            </tr>
                            <tr className="clickable" onClick={()=>navigate('/tickets')} style={{ color: 'orange' }}>
                                <td>Open</td>
                                <td>#3950 Strasbourg Handling</td>
                            </tr>
                            <tr className="clickable" onClick={()=>navigate('/tickets')} style={{ color: 'orange' }}>
                                <td>Closed</td>
                                <td>#3905 Strasbourg Handling</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div></>
    )
}

export default Home