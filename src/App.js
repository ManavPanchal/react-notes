import React, { createContext, useState } from 'react'
import "./App.css"
import MainBox from './MainBox'

export const appContext = React.createContext();

function App() {

   const [title, setTitle] = useState("");
  return (
    <appContext.Provider value={{title,setTitle}}>
      <div id="note_application" className='mt-5' >
        {title}
        <MainBox/>
        dfgfdgfdg
      </div>
    </appContext.Provider>
  )
}

export default App
