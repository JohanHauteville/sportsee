import logo from '../../assets/logo.png'
import './style.scss'

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo SportSee" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header