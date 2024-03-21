import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import AppInterface from './pages/AppInterface';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/app" element={<AppInterface/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
