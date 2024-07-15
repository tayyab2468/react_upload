import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
//import {
 // BrowserRouter as Router,
 // Routes,
 // Route
// from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

 
  const toggleMode = (newMode) => {
    setMode(newMode);
    if (newMode === 'dark') {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  };
  return (
    <>
      
        <Navbar title="TextUtils2" about="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
            
            <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        
        </div>
    
    </>
  );
}

export default App;
