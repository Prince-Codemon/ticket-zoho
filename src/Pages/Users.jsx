import React from 'react'

const Users = () => {
  return (
      <div id="content">
          <div>
              <h1 style={{ display: "block" }}>Manage users in CRM Nordic</h1>
              <h2>Company: </h2>
              <table style={{ display: "block" }}>
                  <tr>
                      <th>User</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th></th>
                      <th></th>
                  </tr>
                  <tr>
                      <td>Jens Jensen</td>
                      <td>jens@crmnordic.dk</td>
                      <td>admin</td>
                      <td><a href="">E</a></td>
                      <td><a href="">D</a></td>
                  </tr>
                  <tr>
                      <td>Jens Jensen</td>
                      <td>jens@crmnordic.dk</td>
                      <td>Owner</td>
                      <td><a href="">E</a></td>
                      <td><a href="">D</a></td>
                  </tr>
              </table>
              <button>Add user</button>
          </div>
      </div>

  )
}

export default Users