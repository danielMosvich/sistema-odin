import { CONFIG } from "../config";
import type { Oficina } from "../types/Oficina";

const API_URL =`${CONFIG.API_URL}${CONFIG.ENDPOINTS.OFICINAS}`;

export const fetchOficinas = async (signal?: AbortSignal): Promise<Oficina[]> => {
    const response = await fetch(API_URL, {signal})
    if(!response.ok){
        throw new Error(`Error al obtener oficinas: ${response.status} ${response.statusText}`)
    }
    return response.json()
}