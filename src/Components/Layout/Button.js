import { Link } from 'react-router-dom';
import style from './Css/Button.module.css';

function Button({text, type, to}){
    return(
        <Link to={to} className={style[type]}>{text}</Link>
    )
}

export default Button;