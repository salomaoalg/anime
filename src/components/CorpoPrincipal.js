import grandblueG from "../imagens/grand_blue_g.jpg"
import grandblueM from "../imagens/grand_blue_m.jpg"

function CorpoPrincipal() {
  return (
    <article className="container_corpo">
      <picture>
        <source media="(max-width:900px)" srcset={grandblueM} />
        <img className='corpomargin' src={grandblueG} alt="personagens de anime" />
      </picture>
      <p>
        Sinopse. Kitahara Iori é um jovem cheio de energia que acaba de começar 
        sua carreira universitária na cidade de Izu, a qual fica perto do oceano
        Contudo, ao se mudar para a loja de mergulho de seu tio “Grand Blue”, Iori
        encontra o belo oceano, lindas mulheres e homens que adoram beber e mergulhar.
      </p>
    </article>
  )
};
export default CorpoPrincipal