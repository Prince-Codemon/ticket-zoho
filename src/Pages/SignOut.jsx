import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {
            document.title= "Sign Out"
            const navigate = useNavigate()
  return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', backgroundColor:"#041C2C"}}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <img src="logo.png" style={{ width: '300px', paddingBottom: '35px', margin: '0px auto' }} />
          <div id="loginbox" style={{ border: '1px solid black', margin: '0px auto' }}>
              <form onSubmit={(e) => {e.preventDefault(); navigate('/')}}  id="loginform">
                  <input type="text" id="email" placeholder="E-mail" />
                  <input type="password" id="pwd" placeholder="Password" />
                  <input type="submit" value="Login" />
              </form>
          </div>
      </div>
      </div>

  )
}

export default SignOut