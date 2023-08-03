import { useEffect, useState } from 'react';
import style from './Css/BookGenre.module.css';
import CardAuthor from './CardAuthor';
import Container from './Container';

function AddedAuthor({title}){

    const [arrayAuthor, setArrayAuthor] = useState([]);

    useEffect(()=>{ //Consumindo API
        fetch('http://localhost:5000/Author', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp) =>resp.json())
        .then((data)=> {
             setArrayAuthor(data);
        })
        .catch((err)=> console.log(err))
    }, []);
    return(
        <div>
            <div className={style.bookGenre}>
                <h2>{title}</h2>
                <Container clas="start">
                    {
                        arrayAuthor.length > 0 &&(
                            arrayAuthor.map((item)=>(
                                <CardAuthor key={item.id} img={item.image} name={item.name} periodo={item.school} nation={item.nation}/>
                            ))
                        )
                    }
                    {arrayAuthor.length === 0 && <p>Não há livros cadastrados!!</p>}
                </Container>
            </div>
        </div>
    )
}

export default AddedAuthor;