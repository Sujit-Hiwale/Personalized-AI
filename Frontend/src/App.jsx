import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Info from './pages/Info';
import Layout from "./pages/Layout";
import I from './pages/I';
import AlphabetAdventure from './pages/AlphabetAdventure';
import NumberFun from './pages/NumberFun';
import StoryTime from './pages/Story';
import DailyChallenge from './pages/DailyChallenge';

function App() {
  return (
    <Router>
      <Layout>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/info" element={<Info />} />
          <Route path="/first_front" element={<I />} />
          <Route path="/alphabets" element={<AlphabetAdventure />} />
          <Route path="/numbers" element={<NumberFun />} />
          <Route path="/story" element={<StoryTime />} />
          <Route path="/daily" element={<DailyChallenge />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
