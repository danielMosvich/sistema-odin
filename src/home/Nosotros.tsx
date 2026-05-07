import { NavLink } from "react-router-dom"

const Nosotros = () => {
    return (
        <section className='bg-primary text-white'>
            <div className='max-w-7xl mx-auto px-3 py-20'>
                <h2>Nosotros</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, saepe, quos nesciunt doloremque officiis cum qui odit beatae facilis provident modi officia, non unde ut cumque sit dolore perferendis impedit et dolores! Sapiente ducimus, totam nemo magni reprehenderit doloremque aperiam aliquid ipsa quis pariatur atque porro id enim unde eaque itaque magnam perspiciatis numquam mollitia soluta recusandae accusamus! Necessitatibus impedit, a voluptatum architecto quo sapiente, maiores dolores, similique fuga deserunt nulla. Possimus accusantium, ducimus ullam vel esse aut minima animi quam soluta, nostrum illum modi. Eius eveniet vel nihil repudiandae illo similique nam laborum exercitationem distinctio, magni quasi obcaecati omnis beatae corrupti officiis quod? Distinctio numquam tenetur libero aliquam, saepe, velit quod, inventore nemo voluptas et quo? Quibusdam, obcaecati magnam.</p>
                <NavLink to="/inversiones" className="text-secondary">
                    Invierta con nosotros
                </NavLink>
            </div>
        </section>
    )
}

export default Nosotros