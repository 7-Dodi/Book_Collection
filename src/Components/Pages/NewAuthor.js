import Input from '../Form/Input';
import Submit from '../Form/Submit';
import style from './Css/NewAuthor.module.css';

import {useState} from 'react'

function NewAuthor(){

    const [project, setProject] = useState({});

    function handleAuthor(e){
        setProject({...project, [e.target.name]:e.target.value});   
    }

    function createAuthor(e){
        e.preventDefault();
        
        fetch('http://localhost:5000/Author', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp)=> resp.json())
        .then((data)=> {
        console.log(data)
        alert("Finalizado")
        })
        .catch((err)=>
            console.log(err))
    }

    return(

        <div className={style.project}>
            <h1>Adicionar Autor</h1>
            <p>Adicione primeiro seus outores preferidos para depois adiconar os seus livros preferidos!</p>
            <form onSubmit={createAuthor}>
                <Input text="Nome do Autor" name="name" placerholder="Informe o nome do autor" type="text" handleChange={handleAuthor}/>
                <Input text="Imagem do Autor" name="image" placerholder="Adicione um link de uma imagem do autor" type="text" handleChange={handleAuthor}/>
                <Input text="Nacionalidade do Autor" name="nation" placerholder="Informe a nacionalidade" type="text" handleChange={handleAuthor}/>
                <Input text="Escola ou período literário do autor" name="school" placerholder="Informe a escola literária" type="text" handleChange={handleAuthor}/>
                <Submit text="Adicionar Autor"/>
            </form>
            
        </div>

    )
}

export default NewAuthor;