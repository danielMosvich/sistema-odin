import PageHeader from "../../components/PageHeader"
import OficinasTabla from "./OficinasTabla"

const Oficinas = () => {
  return (
    <>
      <PageHeader tituloPagina="Oficinas"
        subtituloPagina="Nuestros locales"/>
      <section>
        <div className='max-w-7xl mx-auto px-3 py-20'>
          <OficinasTabla/>
        </div>    
      </section>  
    </>
  )
}

export default Oficinas