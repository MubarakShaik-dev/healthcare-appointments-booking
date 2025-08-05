import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './theme/GlobalStyles';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import DoctorProfilePage from './pages/DoctorProfilePage';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
