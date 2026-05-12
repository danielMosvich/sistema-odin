import { useQuery } from "@tanstack/react-query";
import { fetchCategorias } from "../../services/categorias.service";
import { useState } from "react";
import type { Categoria } from "../../types/Categoria";

export const useTienda = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<Categoria | null>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["categorias"],
    queryFn: ({ signal }) => fetchCategorias(signal),
  });
  return {
    categorias: Array.isArray(data) ? data : [],
    cargando: isLoading,
    error: error?.message || null,
    hasCategorias: Array.isArray(data) && data.length > 0,
    categoriaActual: categoriaSeleccionada,
    seleccionarCategoria: setCategoriaSeleccionada,
  };
};
