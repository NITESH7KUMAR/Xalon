import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import Contact from './components/contact/contact.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
