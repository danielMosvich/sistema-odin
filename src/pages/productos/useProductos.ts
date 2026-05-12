import { useQuery } from "@tanstack/react-query";
import { fetchProductos } from "../../services/productos.service";

export const useProductos = (idCategoria?: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["productos", idCategoria],
    queryFn: ({ signal }) => fetchProductos(idCategoria, signal),
    // retry: false,
  });
  return {
    productos: Array.isArray(data) ? data : [],
    cargando: isLoading,
    error: error ? error.message : null,
    hasProductos: Array.isArray(data) && data.length > 0,
  };
};
