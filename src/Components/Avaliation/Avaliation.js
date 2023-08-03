import Input from "../Form/Input";
import Submit from "../Form/Submit";
import { useState } from "react";

function Avaliation({textBtn, handleSubmit, projectData}){

    const [avaliation, setAvaliation] = useState({});

    function submit(e){
        e.preventDefault();

        projectData.avaliation.push(avaliation);
        handleSubmit(projectData);
    }

    function handleEdit(e){
        setAvaliation({...avaliation, [e.target.name]: e.target.value});
    }

    return(
        <form onSubmit={submit}>
            <Input text="Informe sua nota (0 a 10)" type="number" name="note" placerholder="Nota do livro" handleChange={handleEdit}/>
            <Input text="Informe a sua avaliação" type="text" name="description" placerholder="Descrição da avaliação" handleChange={handleEdit} />
            <Submit text={textBtn}/>
        </form>
    )
}

export default Avaliation;