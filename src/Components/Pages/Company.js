import style from './Css/Company.module.css';

function Company(){
    return(
        <div className={style.company}>
            <h1>Quem <span>somos nós?</span></h1>
            <p>
                Apresentamos o "Book Collection" - o seu novo destino literário online!
                O Book Collection é um site inovador que foi criado com o objetivo de 
                proporcionar uma experiência única para amantes de livros, permitindo 
                que os usuários descubram novas obras, autores e compartilhem suas avaliações.
            </p>
            <p>
                Com uma interface intuitiva e amigável, adicionar livros e autores ao nosso 
                banco de dados é simples e rápido. Os usuários podem cadastrar suas obras 
                favoritas e também contribuir com informações detalhadas sobre os escritores, 
                enredos e outras curiosidades literárias. Dessa forma, construímos uma comunidade 
                engajada e participativa, enriquecendo nossa biblioteca virtual com uma ampla 
                diversidade de títulos.
            </p>
            <p>
                No Book Collection, a avaliação de livros é levada a sério. Nossos membros 
                podem atribuir uma pontuação e deixar suas opiniões e resenhas, fornecendo 
                valiosas perspectivas sobre as obras que já leram. Essas avaliações ajudam 
                outros leitores a descobrir livros adequados aos seus gostos e interesses, 
                tornando a experiência de escolher uma nova leitura mais personalizada e confiável.
            </p>
            <p>
                Além disso, o site oferece recursos adicionais, como listas de livros 
                recomendados, seleções temáticas, rankings dos mais populares e discussões 
                sobre os lançamentos mais recentes. Aqui, a paixão pela literatura se 
                encontra com a tecnologia, proporcionando um ambiente digital acolhedor 
                para todos os bibliófilos.
            </p>
            <p>
                Seja você um leitor ávido, um escritor aspirante ou um apaixonado por 
                descobrir novos talentos literários, o Book Collection é o lugar perfeito 
                para expandir seus horizontes literários. Junte-se a nós hoje mesmo e mergulhe 
                em um universo repleto de conhecimento, imaginação e emoção através das 
                páginas dos mais diversos livros!
            </p>
        </div>
    )
}

export default Company;