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

  const toggleMode = (mode) => {
    if (mode === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", 'success');
      document.title = 'TextUtils - Dark Mode';
    } else if (mode === 'red') {
      setMode('red');
      document.body.style.backgroundColor = '#FF6347';
      showAlert("Red mode has been enabled", 'success');
      document.title = 'TextUtils - Red Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", 'success');
      document.title = 'TextUtils - Light Mode';
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
