import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
