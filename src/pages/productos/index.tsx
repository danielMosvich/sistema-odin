import { useProductos } from "./useProductos";

interface IProductsCategoriaProps {
  idCategoriaActual: number;
}
const ProductosCategoria = ({ idCategoriaActual }: IProductsCategoriaProps) => {
  const { productos, cargando, error, hasProductos } =
    useProductos(idCategoriaActual);
  if (cargando)
    return (
      <div className="p-20 text-center space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          Cargando productos...
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
    <div>
      <>
        {!hasProductos ? (
          <div>No hay productos</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((product) => (
              <article
                key={product.idproducto}
                className="group bg-background rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <figure className="mb-3 overflow-hidden w-full">
                  <img
                    src={
                      "https://servicios.campus.pe" + "/" + product.imagenchica
                    }
                    alt={`Foto de ${product.nombre}`}
                    className="group-hover:scale-105 transition-transform duration-500 w-full"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="text-xl font-bold line-clamp-2">
                    {product.nombre}
                  </h3>
                  <p className="font-semibold">S/ {product.precio}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default ProductosCategoria;
