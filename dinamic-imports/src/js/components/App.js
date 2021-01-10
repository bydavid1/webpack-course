import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../sass/sass.scss'

console.log(data)
function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import ('./alert.js')
    alerta('Modulo cargado dinamicamente')
  }
  return (
    <div>
      <h1>React application</h1>
      <video src={video} width="200" controls poster={logo}></video>
      <ul>
        {
          loaderList.map((item) => <Loader data={item} key={item.id}/>
         )
        }
      </ul>
      <button onClick={handleClick}>Mostrar loaders</button>
      <p className="sass">
        Text with sass style
      </p>
    </div>
  )
}

export default App