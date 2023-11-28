import { useState } from 'react'
import './App.css'

function App() {
  const [msgs, setMsgs] = useState([
    {
        "Date": "2023-01-05",
        "Msg": "Hej, vi ses vid bowlinghallen kl 20!",
        "Username": "Lill-Janne"
    },
    {
        "Date": "2023-01-05",
        "Msg": "Ok, jag kommer lite sent!",
        "Username": "Stor-Svenne"
    },
    {
        "Date": "2023-01-06",
        "Msg": "Sorry, jag kunde inte komma, min katt blev sjuk",
        "Username": "Janna"
    },
    {
        "Date": "2023-01-06",
        "Msg": "True story",
        "Username": "Jannas katt"
    }
])

  return (
    <main>
      
    </main>
  )
}

export default App
