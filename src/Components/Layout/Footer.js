import style from './Css/Footer.module.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li><FaFacebook></FaFacebook></li>
                <li><FaInstagram></FaInstagram></li>
                <li><FaLinkedin></FaLinkedin></li>
            </ul>
            <p className={style.copy_right}><span>Book Collection</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer;