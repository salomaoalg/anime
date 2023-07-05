import Comeco from './components/Comeco';
import styles from './components/modulos.css'
import capa from "./imagens/capaanimes.jpg"

function App() {
  return (
    <div className="App">
      <div className="div_imagem_capa">
      <img className="imagemcapa" src={capa} alt="animes"/> 
        <div>
            <nav>
                <a href="">Animes</a>
                <a href="">Comédia</a>
                <a href="">Drama</a>
                <a href="">Romance</a>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
