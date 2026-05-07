import { useOficinas } from "./useOficinas";

const OficinasTabla = () => {
  const { data, cargando, error, hasOficinas } = useOficinas();

  if (cargando)
    return (
      <div className="p-20 text-center space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          Cargando sedes...
        </p>
      </div>
    );
  if (error)
    return (
      <div className="p-20 text-center space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          {error}
        </p>
      </div>
    );

  return (
    <>
      {!hasOficinas ? (
        <div>No se encotradon datos de oficinas</div>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              <th>Código</th>
              <th>Empresa</th>
              <th>Teléfono</th>
              <th>Latitud</th>
              <th>Longitud</th>
            </tr>
          </thead>
          <tbody>
            {data.map((itemOficina) => (
              <tr key={itemOficina.idoficina}>
                <td>{itemOficina.idoficina}</td>
                <td>{itemOficina.nombre}</td>
                <td>{itemOficina.telefono}</td>
                <td>{itemOficina.latitud}</td>
                <td>{itemOficina.longitud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OficinasTabla;
