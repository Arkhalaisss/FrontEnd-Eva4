import { useEffect, useState } from 'react';

function Uf() {
  const [data, setData] = useState(null);
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState('');
  const cargarDatos = async () => {
    try {
      const url = fecha ? `https://mindicador.cl/api/uf/${fecha}` : 'https://mindicador.cl/api/uf';
      const res = await fetch(url);
      const json = await res.json();
      setData(fecha ? json.serie[0] : json);
      setError('');
    } catch {
      setError('Error al obtener los datos');
    }
  };
  useEffect(() => { cargarDatos(); }, []);
  return (
    <div className="container mt-4">
      <h2>Unidad de Fomento (UF)</h2>
      <input type="date" className="form-control" value={fecha} onChange={e => setFecha(e.target.value)} />
      <button className="btn btn-primary mt-2" onClick={cargarDatos}>Buscar</button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {data && (
        <div className="alert alert-success mt-3">
          <strong>Fecha:</strong> {data.fecha?.slice(0, 10)} <br />
          <strong>Valor:</strong> {data.valor?.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
        </div>
      )}
    </div>
  );
}
export default Uf