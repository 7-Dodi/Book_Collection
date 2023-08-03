import style from './Css/CardAvaliation.module.css';
import { BsFillTrashFill } from 'react-icons/bs'

function CardAvaliation({id, title, note, description, handleRemove}){

    function removeAv(e){
        e.preventDefault();

        handleRemove(id);
    }
    return(
        <div className={style.card}>
            <h3><span>Título:</span> {title}</h3>
            <p><span>Nota:</span> {note}</p>
            <p><span>Descrição:</span> {description}</p>

            {
                handleRemove !== '' &&(
                    <div className={style.actions}>
                        <button onClick={removeAv}>
                            <BsFillTrashFill/> Excluir
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default CardAvaliation;