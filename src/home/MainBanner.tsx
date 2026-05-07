import slide1 from "./../assets/images/banner1.jpg"
import slide2 from "./../assets/images/banner2.jpg"
import slide3 from "./../assets/images/banner3.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const MainBanner = () => {
  return (
    <section className="w-full">
      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white !important;
          opacity: 0.4;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .swiper-pagination-bullet-active {
          width: 40px !important; /* Estilo píldora larga */
          border-radius: 8px;
          background: #b91c1c !important; /* Rojo corporativo */
          opacity: 1;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
      `}</style>
      <Swiper

        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-100 md:h-125"
      >
        <SwiperSlide className="relative overflow-hidden">
          <figure className="relative h-full w-full group overflow-hidden">
            <img src={slide1} alt="" className="h-full w-full object-cover" />
            {/* Overlay profundo para legibilidad */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

            {/* Contenedor de Texto Artístico */}
            <figcaption className="absolute inset-0 flex flex-col justify-center px-[10%] text-white z-10 max-w-7xl mx-auto">

              {/* SUBTÍTULO (Estilo pre-título ligero) */}
              <span className="text-gray-300 text-lg md:text-xl font-light italic tracking-[0.3em] uppercase mb-4 animate-fadeInLeft">
                Liderazgo con Visión
              </span>

              {/* TÍTULO PRINCIPAL (Impacto Visual) */}
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6">
                Forjando el <br />
                <span className="relative inline-block">
                  Éxito
                  {/* Línea decorativa roja debajo de Éxito */}
                  <span className="absolute left-0 bottom-0 h-2 w-full bg-[#b91c1c] rounded-full"></span>
                </span>
              </h2>

              {/* PÁRRAFO CORTO (Estilo de lectura cómodo) */}
              <p className="text-gray-100 text-xl md:text-2xl font-light leading-relaxed max-w-xl mb-12 opacity-90 animate-fadeInLeft delay-200">
                Nuestro equipo de especialistas combina <strong className="font-semibold text-white">maestría estratégica</strong> y pasión para elevar su visión corporativa.
              </p>

              {/* BOTÓN (Estilo Moderno/Lujoso) */}
              <div className="animate-fadeInUp delay-500">
                <button className="relative group overflow-hidden border-2 border-white/50 bg-white/5 px-10 py-4 text-white font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:border-[#b91c1c] hover:bg-[#b91c1c]">
                  <span className="relative z-10">Agendar Consulta</span>
                </button>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="h-full w-full">
            <img src={slide2} alt="" className="h-full w-full object-cover" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="h-full w-full">
            <img src={slide3} alt="" className="h-full w-full object-cover" />
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default MainBanner