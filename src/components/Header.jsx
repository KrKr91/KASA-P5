import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png' 
import '../styles/Header.scss'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa logo" className="header__logo" />
            
            <nav className="header__nav">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header