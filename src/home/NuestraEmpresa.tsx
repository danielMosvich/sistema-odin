import ejecutivos from "./../assets/images/ejecutivos.jpg"
const NuestraEmpresa = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto px-3 py-20'>
                <h2>Nuestra empresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3>Misión</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit nihil soluta placeat nisi minima quaerat ipsa assumenda, ipsam maxime repudiandae nulla iste laudantium.</p>
                        <h3>Visión</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus architecto, quisquam tenetur voluptate atque labore quae rem tempora quasi, magnam unde vitae quidem itaque.</p>
                        <h3>Quienes somos</h3>
                        <p>Lorem ipsum dolor sit, ipsam velit libero in aliquam at placeat vel quaerat tempore ex quod debitis exercitationem modi praesentium quos culpa eligendi. Consequatur porro laboriosam magnam enim molestias dolorem, quod at culpa iusto cum in ipsam id repellendus! Dolorem, saepe animi? Aliquam itaque doloremque laboriosam!</p>

                    </div>
                    <div className="md:col-span-1 lg:col-span-2">
                        <figure className="relative group overflow-hidden rounded-xl shadow-lg">
                            <img src={ejecutivos} alt="" className="w-full h-150 object-cover" />
                            <figcaption className="absolute bottom-6 left-6 text-white bg-black/70 blackdrop-blur-sm p-6 border-l-4 border-accent">
                                <h3>Liderazgo con Experiencia</h3>
                                <p>Le damos la más cordial bienvenida a nuestra firma. Nuestro equipo directivo, con su amplia trayectoria y visión estratégica, está comprometido a guiar su camino hacia un éxito corporativo sólido y sostenible.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NuestraEmpresa