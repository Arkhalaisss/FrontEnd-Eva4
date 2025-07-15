import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Uf from './pages/Uf';
import Inicio from './Pages/Inicio';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Inicio />
      <main className="container my-4">
        <Routes>
          <Route path="/uf" element={<Uf />} />
          <Route path="/ivp" element={<Ivp />} />
          <Route path="/ipc" element={<Ipc />} />
          <Route path="/utm" element={<Utm />} />
          <Route path="/dolar" element={<Dolar />} />
          <Route path="/euro" element={<Euro />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
