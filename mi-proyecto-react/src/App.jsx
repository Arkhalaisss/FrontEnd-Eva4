import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Uf from './Pages/UF';
import Inicio from './Pages/Inicio';
import Ivp from './Pages/Ivp';
import Ipc from './Pages/Ipc';
import Utm from './Pages/UTM';
import Dolar from './Pages/Dolar';
import Euro from './Pages/Euro';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Inicio />
        <Routes>
           <Route path="/UF" element={<Uf />} />
          <Route path="/Ivp" element={<Ivp />} />
          <Route path="/Ipc" element={<Ipc />} />
          <Route path="/UTM" element={<Utm />} />
          <Route path="/Dolar" element={<Dolar />} />
          <Route path="/Euro" element={<Euro />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
