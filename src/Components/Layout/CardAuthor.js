import {BsFillTrashFill, BsPencil} from 'react-icons/bs';
import style from './Css/Card.module.css';

function CardAuthor({name, img, periodo, nation}){
    return(
        <div className={style.card}>
            <img src={`${img}`} alt='Author'/>
            <h3>{name}</h3>
            <p><span>Período Literário:</span> {periodo}</p>
            <p><span>Nacionalidade:</span> {nation}</p>
        </div>
    )
}

export default CardAuthor;