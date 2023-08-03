import {BsFillTrashFill, BsPencil} from 'react-icons/bs';
import {Link} from 'react-router-dom';

import style from './Css/Card.module.css';

function Card({title, img, id, autor, handleRemove}){

    function remove(e){
        e.preventDefault();

        handleRemove(id);
    }

    return(
        <div className={style.card}>
            <img src={`${img}`} alt='Livro'/>
            <h3>{title}</h3>
            <p><span>Autor:</span>{autor}</p>
            <div className={style.actions}>
                <Link to={`/editBook/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default Card;