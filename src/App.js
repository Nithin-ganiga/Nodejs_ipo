import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import IPOForm from './pages/IPOForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ipo-form" element={<IPOForm />} />
      </Routes>
    </Router>
  );
}

export default App;
