import { useState, useEffect } from 'react'
import Starship from './components/Starship'
import './App.css'

function App() {

  let [data, getData ] = useState([])

  useEffect (() => {
  async function getStarships() {
      
      try {
          const response = await fetch("https://swapi.dev/api/starships/")
          const data = await response.json()
          getData(data.results)
      } catch (err) {
          console.log(err)
      }
  }
      getStarships()

    }, []) 
  
      return(
          <div>
              <h1> STAR WARS STARSHIPS </h1>
              <Starship data={data} />
          </div>
      )
     
  }

export default App
