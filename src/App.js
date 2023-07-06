import CabecalhoPrincipal from './components/CabecalhoPrincipal';
import TituloPrincipal from './components/TituloPrincipal';
import BannersCorpo from './components/BannersCorpo';

function App() {
  return (
    <>
      <CabecalhoPrincipal />
      <div className="espaco_lados">
        
        <TituloPrincipal/>
        <BannersCorpo />
        
      </div>
    </>
  )

};

export default App;
