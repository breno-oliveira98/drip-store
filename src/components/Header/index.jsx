import { useState } from "react";
import logo from "../../../assets/logo-header.svg";
import cart from "../../../assets/mini-cart.svg";
import InputSearch from "../Input";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "border-b-2 border-b-[var(--primary)] text-[var(--primary)] font-semibold" : "");
  const [itemsCount, setItemsCount] = useState(1);
  return (
    <header className="w-full bg-[var(--white)] py-6">
      <div className="w-full container mx-auto flex items-center justify-between space-x-4">
        {/* Logo com altura fixa */}
        <img src={logo} alt="Logo" className="h-10" />

        {/* Campo de pesquisa que ocupa o espaço restante */}
        <div className="flex-1 mx-4 ">
          {" "}
          {/* Contêiner para garantir espaçamento */}
          <InputSearch placeholder={"Pesquisar produto..."} />
        </div>

        {/* Links e botões à direita */}
        <div className="flex items-center space-x-4">
          {" "}
          {/* Alinha os botões */}
          <a href="#" className="underline">
            Cadastre-se
          </a>
          <button className="rounded-md text-white p-2 px-10 bg-[var(--primary)]">
            Entrar
          </button>
        </div>

        {/* Cart */}
        <div className="relative">
          <img src={cart} className="cursor-pointer w-6 h-6" />
          {itemsCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 flex justify-center items-center rounded-full w-4 h-4 bg-red-600 text-white text-xs">
              {itemsCount}
            </span>
          )}
        </div>
      </div>

      {/* Navegação inferior */}
      <nav className="container mx-auto mt-10">
        <ul className="flex gap-6">
          <li>
            <Link to="/" className={` ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>Produtos</li>
          <li>Categorias</li>
          <li>Meus Pedidos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
