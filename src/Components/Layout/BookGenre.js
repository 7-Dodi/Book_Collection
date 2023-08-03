import Card from "./Card";
import style from "./Css/BookGenre.module.css";
import {useState, useEffect} from "react";
import Container from '../Layout/Container';

function BookGenre({title}){

    const [arrayBook, setArrayBook] = useState([]);

    useEffect(()=>{ //Consumindo API
        fetch('http://localhost:5000/Books', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp) =>resp.json())
        .then((data)=> {
             setArrayBook(data);
             console.log(data)
        })
        .catch((err)=> console.log(err))
    }, []);

    function deleteBook(id){
        fetch(`http://localhost:5000/Books/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp) =>resp.json())
        .then((data)=> {
             setArrayBook(arrayBook.filter((item)=> item.id !== id));
             alert("Livro removido");
        })
        .catch((err)=> console.log(err));
    }

    return(
        <div className={style.bookGenre}>
            <h2>{title}</h2>
            <Container clas="start">
                {
                    arrayBook.length > 0 &&(
                        arrayBook.map((item)=>(
                            <Card key={item.id} id={item.id} img={item.image} title={item.title} autor={item.author?.name} handleRemove={deleteBook}/>
                        ))
                    )
                }
                {arrayBook.length === 0 && <p>Não há livros cadastrados!!</p>}
            </Container>
        </div>
    )
}

export default BookGenre;