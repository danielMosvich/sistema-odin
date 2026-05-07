import { DATA_NOTICIAS } from "../data/noticiasData"


const Noticias = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-3 py-20'>
                <h2>Noticias</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    {DATA_NOTICIAS.map(itemNoticia => (
                        <article key={itemNoticia.id}>
                            <figure className="mb-3">
                                <img src={itemNoticia.foto} alt="" />
                            </figure>
                            <h3>{itemNoticia.titulo}</h3>
                            {itemNoticia.contenido.map((itemParrafo, index) => (
                                <p key={index}>{itemParrafo}</p>
                            ))}
                        </article>
                    ))}
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Noticias