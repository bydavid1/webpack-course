import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)
function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <h1>React application</h1>
      <ul>
        {
          loaderList.map((item) => <Loader data={item} key={item.id}/>
         )
        }
      </ul>
      <button onClick={handleClick}>Mostrar loaders</button>
    </div>
  )
}

export default App