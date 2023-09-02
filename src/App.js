import About from './Components/About.js';
import NavBar from './Components/Navbar.js';
import TextArea from './Components/TextArea.js';
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <div style={{ height: '100vh' }}>
        <NavBar title='Mender' mode={mode} />
        <Router>
          <Routes>
            <Route exact path="/" element={<><div>Something something.</div></>}/>
            <Route exact path="/textarea" element={<><TextArea mode={mode}/></>}/>
            <Route exact path="/about" element={<><About mode={mode}/></>}/>
          </Routes>
        </Router>
        <div className="container my-3">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Mode Toggle"
            onClick={toggleMode}
          />
        </div>
      </div>
    </>
  );
}
export default App;