import { useEmpleados } from "./useEmpleados";

const EmpleadosTabla = () => {
  const { data, cargando, error, hasEmpleados } = useEmpleados();

  if (cargando)
    return (
      <div className="p-20 text-center space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          Cargando Empleados...
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
      {!hasEmpleados ? (
        <div>No se encotradon datos de Empleados</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((empleado) => (
            <article
              key={empleado.idempleado}
              className="group bg-background rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <figure className="mb-3 overflow-hidden">
                <img
                  src={"https://servicios.campus.pe" + "/" + empleado.foto}
                  alt={`Foto de ${empleado.nombres}`}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {empleado.nombres + " " + empleado.apellidos}
                </h3>
                <p>{empleado.cargo}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
};

export default EmpleadosTabla;
