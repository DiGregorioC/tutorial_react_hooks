import React from 'react'

import useResources from './useResources'

const Users = ({ resourceName }) => {
  const users = useResources('users')

  return (
      <div>
      <h1> Users </h1>
       <ul>
         {users.map(user => (
           <li key={user.id}>{user.name}</li>
         ))}
       </ul>
       </div>
     )
}

export default Users