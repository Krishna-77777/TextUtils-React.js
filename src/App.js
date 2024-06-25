import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import MyForm from './components/MyForm';
import About from './components/About';
import Alert from './components/Alert';
 
import React, {useState }from 'react';
 
 function App() {
   const[alert,setAlert]=useState(null);
   const showAlert= (message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null);
},1300)
   }
  return (
    <><Navbar title="Textutils" /> 
      <Alert alert={alert}/>
     <div className="container my-5">
    <MyForm showAlert={showAlert} heading="Enter your text here"/>
    <About/>
    
     </div>
    </>
  );
}

export default App;
