import Avaliation from '../Avaliation/Avaliation';
import CardAvaliation from '../Avaliation/CardAvaliation';
import Container from '../Layout/Container';
import CreateBook from './CreateBook';
import style from './Css/EditBook.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';

function EditBook() {

    const {id} = useParams();

    const [book, setBook] = useState([]);
    const [avaliation, setAvaliation] = useState([]);
    const [button, setButton] = useState(false);
    const [showAvaliation, setShowAvaliation] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/Books/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setBook(data);
                setAvaliation(data.avaliation);
            })
            .catch((err) => console.log(err))
    }, []);

    function editBook(book){
        fetch(`http://localhost:5000/Books/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then((resp)=> resp.json())
        .then((data)=> {
        setBook(data);
        setButton(!button);
        alert("Finalizado")
        })
        .catch((err)=>
            console.log(err))
    }

    function showClickButton(){
        setButton(!button);
    }

    function toglleShowAvaliation(){
        setShowAvaliation(!showAvaliation);
    }

    function handleAvaliation(book){
        const last = book.avaliation[book.avaliation.length-1];
        last.id = uuidV4();

        fetch(`http://localhost:5000/Books/${book.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then((resp)=> resp.json())
        .then((data)=> {
            setShowAvaliation(!showAvaliation)})
        .catch((err)=> console.log(err))
    }

    function removerAvaliation (id){
        const updateFilter = book.avaliation.filter((item)=>(item.id !== id));
        const project = book;
        project.avaliation = updateFilter;

        fetch(`http://localhost:5000/Books/${project.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp)=> resp.json())
        .then((data)=> {
            setBook(project);
            setAvaliation(updateFilter);
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div className={style.details}>
            <Container class="column">
               <div className={style.container}>
                    <h1>Livro: {book.title}</h1>
                    <button className={style.btn} onClick={showClickButton}>{!button ? 'Editar' : 'Fechar Edição'}</button>
                    {!button ? (
                        <div className={style.info}>
                            <h2>Dados do livro</h2>
                            <p><span>Autor:</span> {book.author?.name}</p>
                            { book.genre && (
                                 book.genre.map((item)=>(
                                    <p key={item.id}><span>Gênero:</span> {item.name}</p>
                                    ))
                                )
                            }
                            <p><span>Imagem:</span> <a target='blank' href={`${book.image}`}>Clique aqui para visualizar</a></p>
                        </div>
                    ): (
                        <div className={style.info}>
                            <h2>Editar livro</h2>
                            <CreateBook textBtn="Concluir edição" projectData={book} handleChange={editBook}/>
                        </div>
                    )}
               </div>
               <div className={style.formConteiner}>
                    <h2>Adicionar Avaliação:</h2>
                    <button className={style.btn} onClick={toglleShowAvaliation}>{!showAvaliation ? 'Avaliar': 'Fechar Avaliação'}</button>
                    {
                        showAvaliation && (
                            <div className={style.info}>
                                <Avaliation handleSubmit={handleAvaliation} projectData={book} textBtn="Avaliar"/>
                            </div>
                        )
                    }
               </div>
               <div>
                    <h2>Avaliações:</h2>
                    <Container class='start'>
                        { 
                            avaliation.length > 0 &&(
                                avaliation.map((item)=>(
                                    <CardAvaliation key={item.id} id={item.id} title={book.title} description={item.description} note={item.note} handleRemove={removerAvaliation}/>
                                ))
                            )
                        }
                        {
                            avaliation.length <= 0 && <p>Não foram feitas avaliações</p>
                        }
                    </Container>
               </div>
            </Container>
        </div>
    )
}

export default EditBook;