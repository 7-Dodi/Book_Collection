import style from './Css/Container.module.css';

function Container(props){
    return(
        <div className={`${style.container} ${style[props.class]}`}>
            {props.children}
        </div>
    )
}

export default Container;