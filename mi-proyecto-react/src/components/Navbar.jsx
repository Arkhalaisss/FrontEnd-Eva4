import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Indicadores Económicos</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/uf">UF</Link>
        <Link className="nav-link" to="/ivp">IVP</Link>
        <Link className="nav-link" to="/ipc">IPC</Link>
        <Link className="nav-link" to="/utm">UTM</Link>
        <Link className="nav-link" to="/dolar">Dólar</Link>
        <Link className="nav-link" to="/euro">Euro</Link>
      </div>
    </nav>
  );
}