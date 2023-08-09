import { CartWidget } from '../components/CartWidget';
export const NavBar = () => (
    <>
     <nav className='nav'>
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contacto</a>
    </nav>   
    <CartWidget/>
    </>
)

