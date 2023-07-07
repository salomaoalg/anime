import CabecalhoPrincipal from './components/CabecalhoPrincipal';
import TituloPrincipal from './components/TituloPrincipal';
import BannersCorpo from './components/BannersCorpo';
import RodaPe from './components/RodaPe';
import CorpoPrincipal from './components/CorpoPrincipal';

function App() {
  return (
    <>
      <CabecalhoPrincipal />
      <div className="espaco_lados">
        <TituloPrincipal/>
        <BannersCorpo/>
        <CorpoPrincipal/>
        <RodaPe/>
      </div>
    </>
  )

};

export default App;
