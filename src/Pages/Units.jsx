import React from 'react'

const Units = () => {
    document.title = "Units"
  return (
      <div id="content">
          <div className="boxmenu">
              <h2 className="headline">Units</h2>
              <a href="" className="selected">0761-1</a>
              <a href="">0761-2</a>
              <a href="">1255-1</a>
          </div>
          <div className="boxcontent">
              <h2 className="headline">My - De-icer</h2>
              <table>
                  <tr>
                      <td>Unit Number</td>
                      <td><input type="text" name="unit_number" value="2153153" readonly/></td>
                      <td style={{width:'35%'}}>
                      </td>
                      <td>Software version</td>
                      <td><input type="text" name="software_version" value="r01.24.14" readonly/></td>
                  </tr>
                  <tr>
                      <td>Chassie number</td>
                      <td><input type="text" name="chassie_number" value="5321531" readonly/></td>
                      <td>
                      </td>
                      <td>Tanksize</td>
                      <td><input type="text" name="software_version" value="31.5L" readonly/></td>
                  </tr>
                  <tr>
                      <td>Customer unit number</td>
                      <td><input type="text" name="unit_number" value="181" readonly/></td>
                      <td>
                      </td>
                      <td></td>
                      <td></td>
                  </tr>
              </table>


              <hr />
              <h3>Manuals</h3>
              <table className="fullwidth">
                  <tr>
                      <th className="datetime">Published</th>
                      <th className="description">Name</th>
                      <th className="right">PDF</th>
                  </tr>
                  <tr>
                      <td>2-27-2022</td>
                      <td>My - De-icer</td>
                      <td className="right"><a href=""><img src="pdf.png" className="icon"/></a></td>
                  </tr>
              </table>
              <hr />
              <h3>Bulletings</h3>
              <table className="fullwidth">
                  <tr>
                      <th className="datetime">Bulleting date</th>
                      <th className="description">Description</th>
                      <th>Checked</th>
                      <th className="right">PDF</th>
                  </tr>
                  <tr>
                      <td>07-24-2022</td>
                      <td>Loose front wheel.</td>
                      <td><input type="checkbox"/></td>
                      <td className="right"><a href=""><img src="pdf.png" className="icon"/></a></td>
                  </tr>
              </table>
              <hr />
              {/* margin-top: 19px; margin-bottom: 19px; display: flex; justify-content: space-between; align-items: center */}
              <div style={{marginTop: '19px', marginBottom: '19px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h3 style={{padding:0,margin:0}}>Service reports</h3> <span style={{float: 'right'}}><button>Order service</button></span>
              </div>
              <table className="fullwidth">
                  <tr>
                      <th className="datetime">Service date</th>
                      <th className="description">Notes</th>
                      <th className="right">PDF</th>
                  </tr>
                  <tr>
                      <td>01-13-2023</td>
                      <td>Oil has been changed, at next service spring at back wheel should be replaced.</td>
                      <td className="right"><a href=""><img src="pdf.png" className="icon"/></a></td>
                  </tr>
                  <tr>
                      <td>07-13-2022</td>
                      <td>Oil has been changed.</td>
                      <td className="right"><a href=""><img src="pdf.png" className="icon"/></a></td>
                  </tr>
              </table>

          </div>
      </div>
  )
}

export default Units