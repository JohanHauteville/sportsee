import './style.scss'
import yogaIcon from '../../assets/icons/yoga-icon.svg'
import swimIcon from '../../assets/icons/swimming-icon.svg'
import bikeIcon from '../../assets/icons/bike-icon.svg'
import powerIcon from '../../assets/icons/power-icon.svg'
import NavIcon from '../NavIcon'




function NavBar() {
    return (
        <>
            <nav className='sidebar'>
                <NavIcon icon={yogaIcon} alt="yoga" />
                <NavIcon icon={swimIcon} alt="swimming" />
                <NavIcon icon={bikeIcon} alt="bike" />
                <NavIcon icon={powerIcon} alt="power" />
            </nav>
            <p className='copiryghting'>Copiryght, SportSee 2023</p>
        </>)

}

export default NavBar