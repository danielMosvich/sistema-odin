import { useEffect, useState } from "react"
import { CONFIG } from "../config";

export interface Envio {
    idempresaenvio: number;
    nombre: string;
    telefono: string;
    latitud: number;
    longitud: number;
}

const Envios = () => {

    const[listaEnvios, setListaEnvios] = useState<Envio[]>([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch(`${CONFIG.API_URL}${CONFIG.ENDPOINTS.ENVIOS}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaEnvios(data)
            })
    }
  return (
    <section>
        <div className='max-w-7xl mx-auto px-3 py-20'>
            <h2>Envíos</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Empresa</th>
                        <th>Teléfono</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEnvios.map(itemEnvio => (
                        <tr key={itemEnvio.idempresaenvio}>
                            <td>{itemEnvio.idempresaenvio}</td>
                            <td>{itemEnvio.nombre}</td>
                            <td>{itemEnvio.telefono}</td>
                            <td>{itemEnvio.latitud}</td>
                            <td>{itemEnvio.longitud}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Envios