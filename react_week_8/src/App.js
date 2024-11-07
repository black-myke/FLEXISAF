import React from 'react';
import './App.css';
import NoteBody from './Components/Notepad_Components/NoteBody';
import Header from './Components/Header&Footer/Header';
import Footer from './Components/Header&Footer/Footer';


function App() {


  return (
    <div className="App" >
      <Header />
      <NoteBody />
      <Footer />
    </div>
  );
}

export default App;
