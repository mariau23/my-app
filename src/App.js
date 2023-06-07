import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [style, setStyle] = useState({color : 'light'});

  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode=== 'light'){

      setMode('dark');
      setStyle({color : 'white'})
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      setStyle({color : '#042743'})
      document.body.style.backgroundColor = 'white';   
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';      
    }
  }
  const toggleMode2 = ()=>{
    if(mode=== 'light'){

      setMode('dark');
      // style={{ backgroundColor: props.mode === 'dark' ? 'green' : '#0d6efd ' }}
      setStyle({color : 'white'})
      document.body.style.backgroundColor = '#5b766a';
      showAlert("Green mode has been enabled","success");
      document.title = 'TextUtils - DarkGreen Mode';
    }
    else{
      setMode('light');
      setStyle({color : '#042743'})
      document.body.style.backgroundColor = 'white';   
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';           
    }
  }
  return (
  <>
  <Router>
  <Navbar title = "TextUtils"  about = "About"mode = {mode} toggleMode = {toggleMode} toggleMode2 = {toggleMode2} style = {style}   />
  <Alert alert = {alert}/>
  <div className="container my-3">
     <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode} style = {style}/>}>
           
          </Route>
      </Routes> 
  </div>
  </Router>

  </>
    
  );
}

export default App;
