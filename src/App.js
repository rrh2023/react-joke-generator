import React, {useState, useEffect} from 'react'
import Joke from './Joke'

const App = () =>  {
  const [body, setBody] = useState(<Joke/>)

  return (

  <div className="box">
    <h3>Random Joke Generator</h3>
    {body}
  </div>

  )
  
}

export default App;