import { Link } from 'react-router-dom';
import style from './Css/Navbar.module.css';

import logo from '../../Img/Logo.png';
import Container from './Container';


function Navbar(){
    return(
        <nav className={style.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <ul className={style.list}>
                    <li className={style.item}><Link to="/">Home</Link></li>
                    <li className={style.item}><Link to="/book">Livros</Link></li>
                    <li className={style.item}><Link to="/author">Autores</Link></li>
                    <li className={style.item}><Link to="/company">Book Collection</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;