import { useState, useEffect } from 'react'

function Euro() {
  const [fechasDisponibles, setFechasDisponibles] = useState([])
  const [selectedFecha, setSelectedFecha] = useState('')
  const [valorUf, setValorUf] = useState(null)
  const [error, setError] = useState('')
  useEffect(() => {
    const cargarFechas = async () => {
      try {
        const res = await fetch('https://mindicador.cl/api/euro')
        const json = await res.json()
        if (json?.serie?.length > 0) {
          const fechas = json.serie.map((item) => ({
            fecha: item.fecha.split('T')[0],
            valor: item.valor,
          }))
          setFechasDisponibles(fechas)
        } else {
          setError('No hay datos disponibles')
        }
      } catch (e) {
        console.error(e)
        setError('Error al cargar las fechas disponibles')
      }
    }
    cargarFechas()
  }, [])
  const manejarSeleccion = (e) => {
    const fecha = e.target.value
    setSelectedFecha(fecha)
    const dato = fechasDisponibles.find((f) => f.fecha === fecha)
    if (dato) {
      setValorUf(dato.valor)
      setError('')
    } else {
      setValorUf(null)
      setError('No se encontró el valor para esa fecha')
    }
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Consulta de Euro (solo fechas con datos)</h2>
      {fechasDisponibles.length > 0 ? (
        <div className="mb-3">
          <label className="form-label">Selecciona una fecha:</label>
          <select className="form-select" onChange={manejarSeleccion} value={selectedFecha}>
            <option value="">-- Selecciona una fecha --</option>
            {fechasDisponibles.map((f) => (
              <option key={f.fecha} value={f.fecha}>
                {f.fecha}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p>Cargando fechas disponibles...</p>
      )}
      {error && <div className="alert alert-warning mt-3">{error}</div>}
      {valorUf && selectedFecha && (
        <div className="alert alert-success mt-3">
          <strong>Fecha:</strong> {selectedFecha} <br />
          <strong>Valor Euro:</strong> ${valorUf.toLocaleString('es-CL')}
        </div>
      )}
    </div>
  )
}

export default Euro
