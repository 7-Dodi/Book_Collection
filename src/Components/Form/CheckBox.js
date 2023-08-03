function CheckBox({id, name, text, to, handleChange}){
    return(
        <div>
            <input type="checkbox" id={id} name={name} onChange={handleChange}/>
            <label htmlFor={to}>{text}</label>
        </div>
    )
}

export default CheckBox