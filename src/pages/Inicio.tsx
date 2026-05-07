import Aviso from "../home/Aviso"
import Envios from "../home/Envios"
import Eventos from "../home/Eventos"
import Historia from "../home/Historia"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Noticias from "../home/Noticias"
import NuestraEmpresa from "../home/NuestraEmpresa"

const Inicio = () => {
  return (
    <>
        <MainBanner/>
        <Nosotros/>
        <Noticias/>
        <Historia/>
        <Envios/>
        <Aviso/>
        <NuestraEmpresa/>
        <Eventos/>
    </>
  )
}

export default Inicio