import { useState } from 'react'
import './App.css'
import Header from './Components/Header&Footer/Header'
import NoteBody from './Components/Notepad_Components/NoteBody'
import Footer from './Components/Header&Footer/Footer'

function App() {

  return (
    <div >
      <Header />
        <NoteBody />
      <Footer />
    </div>
  )
}

export default App
