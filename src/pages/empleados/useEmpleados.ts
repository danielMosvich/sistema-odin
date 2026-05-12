import { useQuery } from "@tanstack/react-query";
import { fetchEmpleados } from "../../services/empleados.service";

export const useEmpleados = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["empleados"],
    queryFn: ({ signal }) => fetchEmpleados(signal),
  });
  return {
    data: Array.isArray(data) ? data : [],
    cargando: isLoading,
    error: error?.message || null,
    hasEmpleados: Array.isArray(data) && data.length > 0,
  };
};
