import React from 'react'

const UnitsInStock = () => {
    document.title = "Units In Stock"
  return (
      <div id="content">
          <div className="boxmenu">
              <h2 className="headline">Units In Stock</h2>
              <a href="" className="selected">e-Mini MY Lite 2022</a>
              <a href="">Toilet Service Truck 2020</a>
          </div>
          <div className="boxcontent">
              <div>
                  <h2 className="headline" style={{ display: "inline-block" }}>e-Mini MY Lite 2022</h2>
                  <button style={{ float: "right" }} >Contact Sales</button>
              </div>

              <table>
                  <tr>
                      <td>Unit Number</td>
                      <td><input type="text" name="unit_number" value="2153153" readOnly /></td>
                      <td style={{ width: "35%" }}></td>
                      <td>Software version</td>
                      <td><input type="text" name="software_version" value="r01.24.14" readOnly /></td>
                  </tr>
                  <tr>
                      <td>Chassie number</td>
                      <td><input type="text" name="chassie_number" value="5321531" readOnly /></td>
                      <td></td>
                      <td>Tanksize</td>
                      <td><input type="text" name="software_version" value="31.5L" readOnly /></td>
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
                      <td>e-Mini MY Lite</td>
                      <td className="right"><a href=""><img src="pdf.png" className="icon" /></a></td>
                  </tr>
              </table>
          </div>
      </div>

  )
}

export default UnitsInStock