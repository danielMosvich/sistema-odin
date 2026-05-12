import { CONFIG } from "../config";
import type { Categoria } from "../types/Categoria";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.CATEGORIAS}`;

export const fetchCategorias = async (
  signal?: AbortSignal,
): Promise<Categoria[]> => {
  const response = await fetch(API_URL, {
    signal,
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      `Error al obtener empleados: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
