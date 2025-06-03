import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import IPOForm from './pages/IPOForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ipo-form" element={<IPOForm />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;