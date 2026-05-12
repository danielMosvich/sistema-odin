import PageHeader from "../../components/PageHeader";
import ProveedoresTabla from "./ProveedoresTabla";

const Proveedores = () => {
  return (
    <>
      <PageHeader
        tituloPagina="Proveedores"
        subtituloPagina="Nuestros Socios estratégicos"
      />
      <section>
        <div className="max-w-7xl mx-auto px-3 py-20">
          <ProveedoresTabla />
        </div>
      </section>
    </>
  );
};

export default Proveedores;
