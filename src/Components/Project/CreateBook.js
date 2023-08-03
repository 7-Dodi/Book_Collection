import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import CheckBox from '../Form/CheckBox';
import {useState, useEffect} from 'react';

function CreateBook({textBtn, projectData, handleChange}){

    const [book, setBook] = useState(projectData || {});
    const [author, setAuthor] = useState([]);
    const [genre, setGenre] = useState([]);
    const [bookGenre, setBookGenre] = useState(()=> projectData?.genre || []);
    const [arrayAvaliation, setArrayAvaliation] = useState(()=> projectData?.avaliation || []);
    
    useEffect(()=>{ //Consumindo API
        fetch('http://localhost:5000/Author', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp) =>resp.json())
        .then((data)=> {
             setAuthor(data);
        })
        .catch((err)=> console.log(err))
         }, []);
    
    useEffect(()=>{ //Consumindo API
        fetch('http://localhost:5000/Genres', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp) =>resp.json())
        .then((data)=> {
             setGenre(data)
        })
        .catch((err)=> console.log(err))
        }, []);

    function handleBook(e){
        setBook({...book, [e.target.name]: e.target.value});
    }

    function handleSelect(e){
        setBook({...book, author:{
            id:e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }, })
    }

    function handleGenre(e) {
        const { id, name, checked } = e.target;
    
        // Verificar se o gênero já está selecionado no estado
        const genreSelected = bookGenre.find((genre) => genre.id === id);
    
        // Adicionar ou remover o gênero selecionado
        if (checked && !genreSelected) {
          setBookGenre([...bookGenre, { id, name }]);
        } else if (!checked && genreSelected) {
          const updatedGenres = bookGenre.filter((genre) => genre.id !== id);
          setBookGenre(updatedGenres);
        }
      }
    
      // Função para mapear o objeto bookGenre para um array de objetos contendo os pares de ID e nome
      function mapBookGenreToArray() {
        return bookGenre.map(({ id, name }) => ({ id, name }));
      }
    
      function createBook(e){
        e.preventDefault();

        book.genre = mapBookGenreToArray();
        book.avaliation = arrayAvaliation;
        
        handleChange(book);
      }

    return(
        <form onSubmit={createBook}>
                <Input type="text" text="Título do livro" name="title" placerholder="Informe o título do livro" handleChange={handleBook}/>
                <Input type="text" text="Imagem do livro" name="image" placerholder="Adicione um link da imagem" handleChange={handleBook}/>
                <Input classe="resum" type="text" text="Sinopse do livro" name="resum" placerholder="informe um pequeno resumo" handleChange={handleBook}/>
                <Select text="Selecione o autor do livro" name="author" handleChange={handleSelect} options={author} value={book.author ? book.author.id : " "} size="1"/>
                <div>
                    <h3>Gêneros:</h3>
                    {genre.map((genre)=>(
                        <CheckBox key={genre.id} text={genre.name} name={genre.name} id={genre.id} to={genre.id} handleChange={handleGenre}/>     
                    ))}
                </div>
                <Submit text={textBtn}/>
            </form>
    )
}

export default CreateBook;