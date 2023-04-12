import { React, useState } from "react";
import logo from './imagens/DeliverizeLogo.svg';
import user from './imagens/user.png';
import carrinho from './imagens/cart.png';
import './App.css';

function App() {
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
                  <option value="endereco">R. Antonio Braune, 222</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
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

            <div className="login__menu">
              <img src={user} className="user__img" alt="ícone de usuário" />
              <button
                className="button__login">
                Entrar
              </button>
            </div>

            <div className="cart__menu">
              <img src={carrinho} className="cart__img" alt="ícone do carrinho de compras" />
              <button
                className="cart__infos">
                Carrinho
              </button>
            </div>

            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
