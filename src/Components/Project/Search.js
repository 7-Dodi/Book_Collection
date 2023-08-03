import style from './Css/Search.module.css';
import Container from '../Layout/Container';
import CardAvaliation from '../Avaliation/CardAvaliation';
import Loading from '../Layout/Loading';

function Search({book}){
    
    return(
        <>
            {
                book.length > 0 &&(
                <div className={style.container}>
                    <div className={style.image}>
                        <img src={`${book[0].image}`}/>
                        <p>Capa do livro</p>
                    </div>

                    <div className={style.data}>
                        <h1>{book[0].title}</h1>
                        <h3>Dados do livro:</h3>
                        <div>
                            <p><span>Autor: </span>{book[0].author?.name}</p>
                            {
                                book[0].genre.map((item)=> (
                                    <p><span>Gênero: </span> {item.name}</p>
                                ))
                            }
                        </div>
                        <h3>Resumo</h3>
                        <div>
                            <p>{book[0].resum}</p>
                        </div>
                        <h3>Avaliações:</h3>
                            <Container class='start'>
                                { 
                                    book[0].avaliation.length > 0 &&(
                                        book[0].avaliation.map((item)=>(
                                            <CardAvaliation key={item.id} id={item.id} title={book[0].title} description={item.description} note={item.note} handleRemove=""/>
                                        ))
                                    )
                                }
                                {
                                    book[0].avaliation.length <= 0 && <p>Não foram feitas avaliações</p>
                                }
                            </Container>
                        </div>
                    </div>
                )
            }
            {
                book.length <= 0 &&(
                    <><p>Livro não encontardo</p></>
                )  
            }
            
        </>
    )
}

export default Search;