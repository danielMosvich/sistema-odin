import { useProveedores } from "./useProveedores";

const ProveedoresTabla = () => {
  const { data, cargando, error, hasProveedores } = useProveedores();

  if (cargando)
    return (
      <div className="p-20 text-center space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          Cargando proveedores...
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
      {!hasProveedores ? (
        <div>No se encotradon datos de proveedores</div>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              <th>Código</th>
              <th>Empresa</th>
              <th>Contacto</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Ciudad</th>
              <th>País</th>
            </tr>
          </thead>
          <tbody>
            {data.map((itemProveedor) => (
              <tr key={itemProveedor.idproveedor}>
                <td>{itemProveedor.idproveedor}</td>
                <td>{itemProveedor.nombreempresa}</td>
                <td>{itemProveedor.nombrecontacto}</td>
                <td>{itemProveedor.cargocontacto}</td>
                <td>{itemProveedor.telefono}</td>
                <td>{itemProveedor.ciudad}</td>
                <td>{itemProveedor.pais}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProveedoresTabla;
