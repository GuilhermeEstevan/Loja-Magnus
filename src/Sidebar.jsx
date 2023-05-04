import { useState } from "react";
import { FaTimes, FaHome, FaShoppingBag, FaBookOpen } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Sidebar = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()

    return (
        <div className={isSidebarOpen ? 'sidebar-overlay show' : 'sidebar-overlay'}>
            <aside className="sidebar">

                <button className="sidebar-close"
                    onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
                    <FaTimes />
                </button>

                <ul className="sidebar-links">
                    <li>
                        <a href="" className="sidebar-link">
                            <FaHome className="icon" />
                            Principal
                        </a>
                    </li>
                    <li>
                        <a href="#products" className="sidebar-link"
                            onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
                            <FaShoppingBag className="icon" />
                            Produtos
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="sidebar-link"
                        onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
                            <FaBookOpen className="icon" />
                            Saiba Mais
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
export default Sidebar