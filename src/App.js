import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/components/userinterface/homepage';
import Login from '../src/components/userinterface/login';
import ResetPassword from './components/userinterface/ResetPassword';
import SignUp from './components/userinterface/SignUp';
import Contact from './components/userinterface/contact';
import HeaderDemo from './components/userinterface/HeaderDemo';
import Header from './components/Header';
import About from './components/userinterface/about';
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Router>
        {/* Header is included globally for all routes except HeaderDemo which has its own header */}
        <Routes>
          <Route path="/header-demo" element={<HeaderDemo />} />
          <Route path="/" element={
            <>
              <Header />
              <Homepage />
      
            </>
          } />
          <Route path="/login" element={
            <>
              <Header />
              <Login />
            </>
          } />
          <Route path="/reset-password" element={
            <>
              <Header />
              <ResetPassword />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Header />
              <SignUp />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
            </>
          } />
          <Route path="/articles" element={
            <>
              <Header />
              <Typography variant="h4" sx={{ textAlign: 'center', mt: 5 }}>
                Articles Page (Under Construction)
              </Typography>
            </>
          } />
          <Route path="/JournalOverview" element={
            <>
              <Header />
              <Typography variant="h4" sx={{ textAlign: 'center', mt: 5 }}>
                Journal Overview Page (Under Construction)
              </Typography>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;