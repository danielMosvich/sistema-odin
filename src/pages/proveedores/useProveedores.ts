import { useQuery } from "@tanstack/react-query";
import { fetchProveedores } from "../../services/proveedores.service";

export const useProveedores = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["proveedores"],
    queryFn: ({ signal }) => fetchProveedores(signal),
  });
  return {
    data: Array.isArray(data) ? data : [],
    cargando: isLoading,
    error: error?.message || null,
    hasProveedores: Array.isArray(data) && data.length > 0,
  };
};
