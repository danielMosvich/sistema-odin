import { faFacebookF, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MainFooter = () => {

    const redesSociales = [
        { nombre: "X", vinculo: "http://x.com", icono: faXTwitter},
        { nombre: "Instagram", vinculo: "http://instagram.com", icono: faInstagram},
        { nombre: "Facebook", vinculo: "http://facebook.com", icono: faFacebookF},
        { nombre: "LinkedIn", vinculo: "http://linkedin.com", icono: faLinkedin},
        { nombre: "YouTube", vinculo: "http://youtube.com", icono: faYoutube }
    ]
    return (
        <footer className='bg-foreground text-background'>
            <div className='max-w-7xl mx-auto px-3 py-4 flex flex-col sm:flex-row items-center justify-between gap-4'>

                <div className="text-sm">
                    &copy;  2026 Todos los derechos reservados
                </div>   
                <div className="flex items-center gap-3">
                    {redesSociales.map(iSocial => (
                        <a key={iSocial.nombre}
                            href={iSocial.vinculo} target="_blank"
                            className="hover:text-accent border border-current size-10 flex items-center justify-center rounded-full">
                                <FontAwesomeIcon
                                icon={iSocial.icono}
                                />
                        </a>
                    ))}
                </div>   
            </div>
        </footer>
    )
}

export default MainFooter