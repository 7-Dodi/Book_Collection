import style from './Css/Author.module.css';
import Button from '../Layout/Button';
import AddedAuthor from '../Layout/AddedAuthor';

function Author(){
    return(
        <div className={style.author}>
             <h1>Coleções de Autores</h1>
           <div className={style.title}>
                <Button to="/newAuthor" type="primary" text="Adicionar Autor"/>
            </div>
            <AddedAuthor title="Coleção de autores:"/>
        </div>
    )
}

export default Author;