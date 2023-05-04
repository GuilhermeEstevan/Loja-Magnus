import { useGlobalContext } from './Context';
import logo from './assets/logo-white.svg'
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
    const { isCartOpen, setIsCartOpen } = useGlobalContext()
    const { itemsAmount } = useGlobalContext()


    return (
        <nav className="navbar">
            <div className="nav-center">
                <div>
                    <button className="toggle-nav"
                        onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
                        <FaBars />
                    </button>
                    <ul className='nav-links'>
                        <li><a className='nav-link' href="">Principal</a></li>
                        <li><a className='nav-link' href="#products">Produtos</a></li>
                        <li><a className='nav-link' href="#about">Saiba Mais</a></li>
                    </ul>
                </div>
                <img src={logo} alt="" className="nav-logo" />
                <div className="toggle-container">
                    <button className='toggle-cart'
                        onClick={() => { setIsCartOpen(!isCartOpen) }}>
                        <FaShoppingCart />
                    </button>
                    {itemsAmount > 0 ? <span className="cart-item-count">{itemsAmount}</span> : null}
                </div>
            </div>
        </nav>
    )
}
export default Navbar