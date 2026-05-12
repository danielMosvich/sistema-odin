import PageHeader from "../../components/PageHeader";
import CategoriasLista from "./CategoriasLista";

const Tienda = () => {
  return (
    <>
      <PageHeader
        tituloPagina="Tienda"
        subtituloPagina="De todo para comprar"
      />
      <section>
        <div className="max-w-7xl mx-auto px-3 py-20">
          <CategoriasLista />
        </div>
      </section>
    </>
  );
};

export default Tienda;
