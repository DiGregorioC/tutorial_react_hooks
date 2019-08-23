import React, { useState, useEffect } from 'react';

import ResourceList from './ResourceList';
import Users from './User'

const App = () => {
  const [ resourceName, setResourceName ] = useState('posts')

// const arr = [1, 2]
// const [first, second] = arr
// console.log(second)
//
// resource name === currentState resourceName
// setResourceName === function that chances resourceName
// useState === function (param === initialState)

  return (
        <React.Fragment>
        <Users />
          <button onClick={() => setResourceName ('posts') }>Posts</button>
          <button onClick={() => setResourceName('todos') }>Todos</button>
          <ResourceList resourceName={resourceName}/>
        </React.Fragment>
      )
}
export default App;
