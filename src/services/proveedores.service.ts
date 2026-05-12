import { CONFIG } from "../config";
import type { Proveedor } from "../types/Proveedor";

const API_URL =`${CONFIG.API_URL}${CONFIG.ENDPOINTS.PROVEEDORES}`;

export const fetchProveedores = async (signal?: AbortSignal): Promise<Proveedor[]> => {
    const response = await fetch(API_URL, {signal})
    if(!response.ok){
        throw new Error(`Error al obtener los proveedores: ${response.status} ${response.statusText}`)
    }
    return response.json()
}