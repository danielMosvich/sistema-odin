import { useEffect, useState } from "react"
import type { Oficina } from "../../types/Oficina"
import { fetchOficinas } from "../../services/oficinas.service"

export const useOficinas = () => {
    const [data, setData] = useState<Oficina[]>([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController()
        fetchOficinas(controller.signal)
            .then(setData)
            .catch(err => err.name !== "AbortError" && setError(err.message))
            .finally(() => !controller.signal.aborted && setCargando(false))
        return () => controller.abort();
    },[])
    return { data, cargando, error, hasOficinas: data.length>0}
}