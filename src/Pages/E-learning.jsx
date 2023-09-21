import React from 'react'

const ELearning = () => {
    document.title= "E-Learning"
  return (
      <div id="content" style={{display:'grid', placeItems:"center"}}>
          <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap:'15px 30px'}}>
              <div className="box-3">
                  <h3 style={{ padding: 0, margin: 0 }}>Operating: e-Mini MY Lite 2022</h3>
                  <p>
                      In this course, you will learn how to operate the "e-Mini MY Lite 2022". After you have reviewed the course, there is a multiple-choice test.
                  </p>
                  <button>Start course</button>
              </div>

              <div className="box-3">
                  <h3 style={{ padding: 0, margin: 0 }}>Operating (Advanced): e-Mini MY Lite 2022</h3>
                  <p>
                      In this course, you will build on your operating skills for the "e-Mini MY Lite 2022". After you have reviewed the course, an online test can be organized.
                  </p>
                  <button>Start course</button>
              </div>

              <div className="box-3">
                  <h3 style={{ padding: 0, margin: 0 }}>Operating (Basic): Toilet Service Truck 2020</h3>
                  <p>
                      In this course, you will learn how to operate the "Toilet Service Truck 2020". After you have reviewed the course, there is a multiple-choice test.
                  </p>
                  <button>Start course</button>
              </div>

              <div className="box-3">
                  <h3 style={{ padding: 0, margin: 0 }}>Operating (Cold weather): Toilet Service Truck 2020</h3>
                  <p>
                      In this course, you will learn how to operate the "Toilet Service Truck 2020" in environments where the temperature is below -20 degrees. After you have reviewed the course, there is a multiple-choice test.
                  </p>
                  <button>Start course</button>
              </div>

              <div className="box-3">
                  <h3 style={{ padding: 0, margin: 0 }}>Maintenance (Basic): Toilet Service Truck 2020</h3>
                  <p>The course goes through basic maintenance for "Toilet Service Truck 2020"</p>
                  <button>Start course</button>
              </div>
          </div>
      </div>

  )
}

export default ELearning