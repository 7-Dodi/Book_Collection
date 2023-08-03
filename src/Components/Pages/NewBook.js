import style from './Css/NewAuthor.module.css';
import CreateBook from '../Project/CreateBook';

function NewBook(){
    
    function createBook(book){
        fetch('http://localhost:5000/Books', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then((resp)=> resp.json())
        .then((data)=> {
        console.log(data)
        alert("Finalizado")
        })
        .catch((err)=>
            console.log(err))
      }

    return (
        <div className={style.project}>
            <h1>New Book</h1>
            <p>Adicione os seus livros preferidos para depois realizar as suas avaliações!</p>
            <CreateBook textBtn="Adicionar Livro" handleChange={createBook}/>
        </div>
    )
}

export default NewBook;