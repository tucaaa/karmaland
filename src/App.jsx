import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartaDeTragos from './pages/CartaDeTragos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<CartaDeTragos />} />
      </Routes>
    </Router>
  );
}

export default App;
