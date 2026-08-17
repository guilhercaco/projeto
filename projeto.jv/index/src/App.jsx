import { BrowserRouter, Routes, Route } from 'react-router-dom';
import inicio from "./pagina/inicio";
import carrinho from "./assets/carrinho.png"

function App() {
  return (
      <div class="logo">
        <h3>MFM</h3>
        <div class="informacao">
          <a href="#">VOLTAR</a>
          <a href="#">ENDEREÇO</a>
          <a href="#">PROMOÇÕES</a>
          <div class="barra-pesquisa"><button>🔍</button><input type="search" placeholder="BUSCAR PRODUTOS"/></div>
          <a href="#">CRIAR CONTA</a>
          <a href="#">CONTA</a>
          <a href="#">CARRINHO</a>
          <img src={carrinho} alt="carrinho" />
        </div>
      </div>

        

  );
}

export default App
