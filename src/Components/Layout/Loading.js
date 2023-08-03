import style from './Css/Loading.module.css';
import loading from '../../Img/loading.svg';

function Loading(){
    return(
        <div className={style.load}>
            <img className={style.loader} src={loading} alt='Loading...'/>
        </div>
    )
}

export default Loading;