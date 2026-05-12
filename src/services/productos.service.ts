import { CONFIG } from "../config";
import type { Producto } from "../types/Producto";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.PRODUCTOS}`;

export const fetchProductos = async (
  idCategoria?: number,
  signal?: AbortSignal,
): Promise<Producto[]> => {
  const url = new URL(API_URL);
  if (idCategoria) {
    url.searchParams.append("iscategoria", idCategoria.toString());
  }
  const response = await fetch(url.toString(), {
    signal,
  });
  if (!response.ok) {
    throw new Error(
      `Error al obtener los productos: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
