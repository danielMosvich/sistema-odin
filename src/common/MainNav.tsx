import { faBars, faCartShopping, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, NavLink, type NavLinkRenderProps } from "react-router-dom"

const NAV_ITEMS = [
  {
    id: "inversiones",
    etiqueta: "Inversiones",
    titulo: "Invierta con nosotros",
    ruta: "/inversiones"
  },
  {
    id: "oficinas",
    etiqueta: "Oficinas",
    titulo: "Nuestras sedes",
    ruta: "/oficinas"
  },
  {
    id: "proveedores",
    etiqueta: "Proveedores",
    titulo: "Nuestros socios",
    ruta: "/proveedores"
  },
  {
    id: "empleados",
    etiqueta: "Empleados",
    titulo: "Nuestros colaboradores",
    ruta: "/empleados"
  },
  {
    id: "tienda",
    etiqueta: "Tienda",
    titulo: "Compre de todo",
    ruta: "/tienda"
  },
]

const MainNav = () => {
  const [menuMovilVisible, setMenuMovilVisible] = useState(false)

  const navLinkStyles = ({ isActive }: NavLinkRenderProps): string => {
    return `inline-block px-5 py-3 text-sm hover:bg-accent hover:text-black transition-all duration-300 ${
      isActive ? "bg-white text-black" : "hover:text-white hover:bg-accenet" 
    }`
  }

  return (
    <nav className="bg-foreground text-white sticky z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="hidden md:flex list-none h-full ml-8 items-center">
          <Link to="/" className="text-xl font-bold hover:opacity-70">
            SISTEMA HERA
          </Link>

          {NAV_ITEMS.map(itemMenu => (
            <li key={itemMenu.id}><NavLink to={itemMenu.ruta} title={itemMenu.titulo}
              className={navLinkStyles}>
              {itemMenu.etiqueta}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ml-auto">
          <NavLink to="/login" className={navLinkStyles}>
            <FontAwesomeIcon icon={faUser} className="size-5" />
          </NavLink>
          <NavLink to="/carrito" className={navLinkStyles}>
            <FontAwesomeIcon icon={faCartShopping} className="size-5" />
          </NavLink>
          <button className="md:hidden p-2 hover:text-accent transition-colors cursor-pointer"
              onClick={() => setMenuMovilVisible(!menuMovilVisible)}>
            <FontAwesomeIcon icon={menuMovilVisible ? faXmark : faBars} className="size-5" />
          </button>
        </div>



      </div>


      {menuMovilVisible && (    
      <div className="md:hidden bg-foreground border-t border-white/10 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300" >
        <ul className="flex flex-col list-none py-4">
          {NAV_ITEMS.map(itemMenu => (
            <li key={itemMenu.id}><NavLink to={itemMenu.ruta} title={itemMenu.titulo}
              className={navLinkStyles}>
              {itemMenu.etiqueta}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )}
    </nav>
  )
}

export default MainNav