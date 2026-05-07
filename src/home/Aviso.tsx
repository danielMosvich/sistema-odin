import imagenFondo from "./../assets/images/imagen-fondo.jpg"
const Aviso = () => {
  return (
<aside className="relative h-screen w-full bg-cover bg-center bg-fixed overflow-hidden"
    style={{ backgroundImage: `url(${imagenFondo})` }}>
    
    {/* Overlay para mejorar legibilidad */}
    <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

    <div className="relative flex h-full flex-col items-center justify-center text-center px-4">
        
        {/* Frase Artística Secundaria */}
        <span className="mb-4 text-xl md:text-2xl font-light italic text-gray-200 tracking-[0.3em] uppercase animate-pulse">
            Forjando el futuro
        </span>

        {/* Título Principal con Estilo */}
        <div className="relative group">
            <h2 className="text-white text-4xl md:text-7xl font-black uppercase leading-none border-y-4 border-white/30 py-6 px-12 backdrop-blur-sm bg-black/20 transition-all duration-700 hover:bg-white hover:text-black">
                Nuestros <br /> 
                <span className="text-outline-white">Especialistas</span>
            </h2>
        </div>

        {/* Varias frases con estilos distintos */}
        <div className="mt-12 space-y-4 max-w-2xl">
            <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                "Donde la <span className="text-yellow-400">maestría</span> se encuentra con la <span className="text-blue-400">pasión</span>."
            </p>
            
            <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-white/50"></div>
                <p className="text-gray-300 text-sm uppercase tracking-[0.5em]">
                    Talento sin límites
                </p>
                <div className="h-px w-12 bg-white/50"></div>
            </div>
        </div>

    </div>
</aside>
  )
}

export default Aviso