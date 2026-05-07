import evento1 from "./../assets/images/evento1.jpg"
import evento2 from "./../assets/images/evento2.jpg"
import evento3 from "./../assets/images/evento3.jpg"
import evento4 from "./../assets/images/evento4.jpg"

const Eventos = () => {
    return (
        <section className="bg-white">
            <div className='max-w-7xl mx-auto px-3 py-20'>
                <h2>Eventos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <article className="group bg-background rounded-xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <figure className="mb-3 overflow-hidden">
                            <img src={evento1} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
                        </figure>
                        <div className="p-6">
                            <h3>Evento 1</h3>
                            <p>Non quia, amet optio sapiente nam assumenda unde doloremque! Iure suscipit eos perspiciatis animi rerum neque repellendus. Quas nostrum, mollitia ipsum aut nobis esse nisi, sint reiciendis magni tempore autem, quasi dignissimos maxime quo hic animi omnis sequi! Esse, accusamus.</p>
                        </div>
                    </article>
                    <article className="group bg-background rounded-xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <figure className="mb-3 overflow-hidden">
                            <img src={evento2} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
                        </figure>
                        <div className="p-6">
                            <h3>Evento 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, praesentium nemo nesciunt neque recusandae cupiditate commodi quos est accusantium unde reprehenderit, veritatis, quibusdam optio assumenda suscipit iure pariatur adipisci doloribus quasi aut repellat dicta tempore et? Fuga at assumenda sed.</p>
                        </div>
                    </article>
                    <article className="group bg-background rounded-xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <figure className="mb-3 overflow-hidden">
                            <img src={evento3} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
                        </figure>
                        <div className="p-6">
                            <h3>Evento 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste error numquam repellendus quos? Hic commodi doloribus architecto iure, distinctio quae natus nisi voluptatem porro deserunt tempore consequuntur, reprehenderit maiores possimus quam molestias et consectetur eum nobis quod. Possimus, omnis.</p>
                        </div>
                    </article>
                    <article className="group bg-background rounded-xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <figure className="mb-3 overflow-hidden">
                            <img src={evento4} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
                        </figure>
                        <div className="p-6">
                            <h3>Evento 4</h3>
                            <p>Culpa, eum beatae obcaecati repellendus reiciendis aut numquam blanditiis ducimus saepe doloremque quidem? Assumenda dolorum beatae ab non ex ratione modi nihil eveniet? Fuga adipisci sed hic nesciunt porro. Neque enim iste minus accusamus totam cumque beatae sed vel vero.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Eventos