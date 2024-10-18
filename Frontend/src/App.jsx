import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Info from './pages/Info';

function App() {

  return (
    <>
      <style>
        {`
          body {
            background-color: #343a40;
            color: white;
            font-family: Arial, 'sans-serif';
            min-height: 100vh;
          }
        `}
      </style>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </Router>
    </>
  )
}

export default App