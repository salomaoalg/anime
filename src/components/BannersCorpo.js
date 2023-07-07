// eslint-disable-next-line no-unused-vars
import styles from './modulos.css'
import one_piece_p from '../imagens/one_piece_caracters_p.jpeg'
import one_piece_caracters from "../imagens/one_piece_caracters.jpeg"
import dragon_ballz_p from "../imagens/dragonballz_p.jpg" 
import dragon_ballz_normal from "../imagens/dragonballz.jpg"
import hunterx_p from "../imagens/hunterxhunter_p.jpg"
import hunterx_normal from "../imagens/hunterxhunter.jpg"

function BannersCorpo() {
    return (
            <section className="art_animes">
                <div className="container_art">

                    <picture className="picture_banner">
                        <source media="(max-width: 1000px)" srcset={one_piece_p} type="image/jpeg"/>
                        <a href="pages/index_anime_hunterxhunter.html" target="_blank"><img className="imagemcapa" src={one_piece_caracters} alt="personagens de one piece"/></a>
                        <h2>One Piece</h2>
                    </picture>
                    
                    <picture className="picture_banner">
                        <source media="(max-width: 1000px)" srcset={dragon_ballz_p} type="image/jpg"/>
                        <img className="imagemcapa" src={dragon_ballz_normal} alt="personagens dragon ball Z"/>
                        <h2>Dragon Ball Z</h2>
                    </picture>
                            
                    <picture className="picture_banner">
                        <source media="(max-width: 1000px)" srcset={hunterx_p} type="image/jpg"/>
                        <img className="imagemcapa" src={hunterx_normal} alt="personagens dragon ball Z"/>
                        <h2>Hunter x Hunter</h2>
                    </picture>

                    </div>
                </section>
    )
}
export default BannersCorpo