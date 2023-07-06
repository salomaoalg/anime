// eslint-disable-next-line no-unused-vars
import styles from './modulos.css'
import capa from '../imagens/capaanimes.jpg'

function CabecalhoPrincipal() {
    return (
        <>
            <div className="App">
                <div className="div_imagem_capa">
                    <img className="imagemcapa" src={capa} alt="animes" />
                    <div>
                        <nav>
                            <a href="https://google.com.br"target="_blank" rel="noreferrer">Animes</a>
                            <a href="https://google.com.br"target="_blank" rel="noreferrer">Comédia</a>
                            <a href="https://google.com.br"target="_blank" rel="noreferrer">Drama</a>
                            <a href="https://google.com.br"target="_blank" rel="noreferrer">Romance</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CabecalhoPrincipal