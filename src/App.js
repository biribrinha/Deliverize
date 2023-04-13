import React, { useState, useEffect, useRef } from 'react';
import logo from './imagens/DeliverizeLogo.svg';
import user from './imagens/user.png';
import carrinho from './imagens/cart.png';
import lanche from './imagens/lanche.png';
import notificacao from './imagens/notificacao.png';
import './App.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material/Button";

function App() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <div className="App">
      <header>
        <div className="menu">

          <img src={logo} className="App-logo" alt="logo" />

          <div className="menu__container">

            <div className="dropdow__menu">
              <div className="title__dropdow">
                <span>Entrega</span>
              </div>
              <div className="select__dropdow">
                <select>
                  <option selected value="endereco">R. Antonio Braune, 222</option>
                  <option value="endereco">R. Antonio Braune, 223</option>
                  <option value="endereco">R. Antonio Braune, 224</option>
                  <option value="endereco">R. Antonio Braune, 225</option>

                </select>
              </div>
            </div>

            <div className="search__menu">
              <input
                type="text"
                id="header-search"
                placeholder="Busque por estabelecimento ou produtos"
                name="s"
              />
            </div>

            <div className="entrarCarrinho">
              <div className="login__menu">
                <img src={user} className="user__img" alt="ícone de usuário" />
                <button
                  className="button__login">
                  Entrar
                </button>
              </div>

              <div className="cart__menu">
                <div className={`bolinha__notificacao ${open ? 'active' : 'inactive'}`} >
                  <img src={notificacao} className="notificacao__img" alt="notificacao de compra" />

                </div>
                <img src={carrinho} className="cart__img" alt="ícone do carrinho de compras" />
                <button
                  className="cart__infos">
                  Carrinho
                </button>


              </div>


            </div>
          </div>
        </div>
      </header>

      <div className="posicao__popover">
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
          <span className="cabecalho__popover">Adicionado com Sucesso</span>
          <h3>Oferta Cheddar Bacon</h3>
          <p>Ingredientes:</p>
          <ul>
            <li>
              1 Carne 250gr
            </li>

            <li>
              2 Queijo Cheddar
            </li>

            <li>
              1 Bacon
            </li>

            <li>
              Molho Especial            
            </li>
          </ul>

        </div>
      </div>




      <main>
        <div className="containers">
          <div className="container__1">
            <img src={lanche} className="img__lanche" alt="imagem de um lanche de picanha cheddar e bacon" />

            <div className="descricao">
              <div className="descricao__lanche">
                <h1>Oferta Picanha Cheddar Bacon</h1>
                <p>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</p>
              </div>
              <div className="preco__lanche">
                <p className="atual__preco">R$31,99</p>
                <p className="antigo__preco">R$34,95</p>
              </div>
            </div>

          </div>

          <div className="container__2">
            <div className="menu__ingredientes">
              <div className="cabecalho__ingredientes">
                <span>Adicionar Ingredientes</span>
                <p className="restricao__ingredientes">Até 8 ingredientes.</p>
              </div>


              <div className="card__ingredientes">
                <div className="descricao__ingrediente">
                  <p>Queijo cheddar</p>
                </div>
                <div className="posicao__ingredientes">
                  <div className="adicionar__ingredientes">
                    <input type="button" name="menos" id="menos" value="" />
                    <p className="quantidade__ingredientes">0</p>
                    <input type="button" name="mais" id="mais" value="" />
                  </div>
                </div>

                <div className="preco__ingrediente">
                  <p>+ R$ 4,99</p>
                </div>
              </div>
              <div className="linha__container"></div>

              <div className="card__ingredientes">
                <div className="descricao__ingrediente">
                  <p>Queijo cheddar</p>
                </div>
                <div className="posicao__ingredientes">
                  <div className="adicionar__ingredientes">
                    <input type="button" name="menos" id="menos" value="" />
                    <p className="quantidade__ingredientes">0</p>
                    <input type="button" name="mais" id="mais" value="" />
                  </div>
                </div>

                <div className="preco__ingrediente">
                  <p>+ R$ 4,99</p>
                </div>
              </div>

              <div className="linha__container"></div>


              <div className="card__ingredientes">
                <div className="descricao__ingrediente">
                  <p>Molho cheddar</p>
                </div>
                <div className="posicao__ingredientes">
                  <div className="adicionar__ingredientes">
                    <input type="button" name="menos" id="menos" value="" />
                    <p className="quantidade__ingredientes">0</p>
                    <input type="button" name="mais" id="mais" value="" />
                  </div>
                </div>

                <div className="preco__ingrediente">
                  <p>+ R$3,50</p>
                </div>
              </div>

              <div className="linha__container"></div>

              <div className="card__ingredientes">
                <div className="descricao__ingrediente">
                  <p>Molho de picanha</p>
                </div>
                <div className="posicao__ingredientes">
                  <div className="adicionar__ingredientes">
                    <input type="button" name="menos" id="menos" value="" />
                    <p className="quantidade__ingredientes">0</p>
                    <input type="button" name="mais" id="mais" value="" />
                  </div>
                </div>

                <div className="preco__ingrediente">
                  <p>+ R$3,50</p>
                </div>
              </div>

            </div>


            <div className="rodape">
              <div className="linha__container"></div>

              <div className="rodape__ingredientes">
                <span>Precisa de Talher?</span>
              </div>

              <div className="botoes__rodape">
                <div className="adicionar__talher">
                  <input type="button" name="menos" id="menos" value="" />

                  <p className="quantidade__ingredientes">0</p>
                  <input type="button" name="mais" id="mais" value="" />
                </div>
                <div className='menu-container' ref={menuRef}>
                  <div className="adicionar__lanche" onClick={() => { setOpen(!open) }}>
                    <input type="button" name="adicionar" id="adicionar__lanche__button" value="adicionar" />
                  </div>
                </div>
              </div>
            </div>







          </div>
        </div>
      </main>
    </div>
  );
}


function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;
