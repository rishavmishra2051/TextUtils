import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');//Use for dark mode
  const [alert, setAlert] = useState(null);
  document.body.style.backgroundColor='#e7ca74';
  /*setInterval(() => {
    document.title='Welcome to TextUtils';
  }, 2000);
  setInterval(() => {
    document.title='TextUtils - How can we help you';
  }, 1500);*/
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      //document.body.style.backgroundColor='#032a64';
      document.title='TextUtils - Dark Mode';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      //document.body.style.backgroundColor='light';//yellow colour #ffc107
      //document.title='TextUtils - Light Mode';
      showAlert("Light Mode has been enabled","success");
    }
  }
  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} mode={mode} heading="Enter the text"/>
    </div>
    <div className="container my-3">
      <About/>
    </div>
    </>
  );
}

export default App;
