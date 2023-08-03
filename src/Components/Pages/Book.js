import BookGenre from '../Layout/BookGenre';
import Button from '../Layout/Button';
import Search from '../Project/Search';
import style from './Css/Book.module.css';
import { useState, useEffect } from 'react';

function Book(){

    const [input, setInput] = useState(false);
    const [arrayBook, setArrayBook] = useState([]);
    const [book, setBook] = useState({});

    useEffect(()=>{ //Consumindo API
        fetch('http://localhost:5000/Books', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp) =>resp.json())
        .then((data)=> {
             setArrayBook(data);
        })
        .catch((err)=> console.log(err))
    }, []);

    function SearchBook(name){
        setBook( arrayBook.filter((item)=> item.title === name));
    }

    function handleInput(e){

        if(e.key === 'Enter'){
            setInput(true)
            if(e.target.value !== ''){
                SearchBook(e.target.value);
            }
        }
        if(e.target.value === ''){
            setInput(false);
        }
    }
    return (
        <div className={style.book}>
                <h1>Coleções de Livros</h1>
           <div className={style.title}>
                <input type='text' placeholder='Pesquisar livro' onKeyDown={handleInput}/>
                <Button to="/newBook" type="primary" text="Adicionar Livro"/>
            </div>
            {
                !input ? (
                    <BookGenre title="Livros adicionados:"/>
                ):(
                    <div>
                        <Search book={book}/>
                    </div>
                )
            }
        </div>
    )
}

export default Book;