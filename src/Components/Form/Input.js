import style from './Css/Input.module.css';

function Input({type, placerholder, text, name, handleChange, value}){
    return (
        <div className={style.formControler}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placerholder} onChange={handleChange} value={value}/>
        </div>
    )
}

export default Input;