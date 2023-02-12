import './Header.css';

import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return (
    <header>
        <NavLink to="/"><img src={props.data.logo} alt="logo" className='logo'/></NavLink>
        <nav className='header-nav'>
            <NavLink to="/vinyl_players">{props.data.nav.players}</NavLink>
            <NavLink to="/acoustic">{props.data.nav.acoustic}</NavLink>
            <NavLink to="/headPhones">{props.data.nav.headPhones}</NavLink>
            <NavLink to="/stuff">{props.data.nav.stuff}</NavLink>
            <NavLink to="/vinyl_plates">{props.data.nav.plates}</NavLink>
            <NavLink to="/DJ_studio">{props.data.nav.DJ_studio}</NavLink>
            <NavLink to="/contacts">{props.data.nav.contacts}</NavLink>
        </nav>
    </header>
)
}
