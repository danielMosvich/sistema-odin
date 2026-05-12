import ProductosCategoria from "../productos";
import { useTienda } from "./useTienda";

export default function CategoriasLista() {
  const {
    categorias,
    cargando,
    error,
    hasCategorias,
    seleccionarCategoria,
    categoriaActual,
  } = useTienda();
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
    <div className="flex gap-10">
      <div className="w-full md:w-1/4 px-3">
        <h3>Categorias</h3>
        {!hasCategorias ? (
          <div>No se encontraron datos</div>
        ) : (
          <ul>
            {categorias.map((cat, _i) => (
              <li
                className={
                  "p-2 cursor-pointer hover:text-primary " +
                  (cat.idcategoria === categoriaActual?.idcategoria
                    ? "bg-primary text-white hover:text-white"
                    : "")
                }
                key={cat.idcategoria}
                title={cat.descripcion}
                onClick={() => seleccionarCategoria(cat)}
              >
                {cat.nombre} ({cat.total})
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full md:w-3/4 px-3">
        {categoriaActual ? (
          <>
            <h3>{categoriaActual.nombre}</h3>
            <ProductosCategoria
              idCategoriaActual={categoriaActual.idcategoria}
            />
          </>
        ) : (
          <div>Seleccionar una categoria</div>
        )}
      </div>
    </div>
  );
}
