import style from './Css/Select.module.css';

function Select({name, text, options, handleChange, value, size}){
    return(
        <div className={style.selectControler}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleChange} value={value || ''} size={size}>
                <option>Selecione uma opção</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;