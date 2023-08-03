import style from './Css/Home.module.css';
import book from '../../Img/favicon.png';
import Button from '../Layout/Button';

function Home(){
    return(
        <section className={style.home}>
            <div>
                <h1>Seja bem vindo ao <span>Book Collection</span></h1>
                <p>O seu destino literário definitivo! Aqui, mergulhamos nas 
                páginas dos melhores livros e exploramos os universos criativos 
                dos autores mais talentosos. O Book Collection é um espaço virtual vibrante 
                e acolhedor, dedicado a todos os amantes da leitura que buscam descobrir 
                novas obras, autores inspiradores e compartilhar suas avaliações literárias.
                </p>
                <p>Em nosso catálogo digital, você pode facilmente adicionar seus livros favoritos 
                e os escritores que mais admira. Nossa comunidade de leitores é apaixonada por 
                enriquecer nosso banco de dados com títulos diversificados e informações detalhadas,
                tornando o Book Collection um verdadeiro tesouro literário.
                </p>
                <Button to="/book" text="Começar" type="primary"/>
                <Button to="/company" text="Saiba mais" type="secondary"/>
            </div>
            <div>
                <img src={book} alt='Livros'/>
            </div>
        </section>
    )
}

export default Home;