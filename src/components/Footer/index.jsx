import logo from "../../../assets/logo-footer.svg";
import fb from "../../../assets/facebook.svg";
import insta from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
    const infos = [
        {
          text: "Sobre Drip Store",
          link: "/about",
        },
        {
          text: "Segurança",
          link: "/security",
        },
        {
          text: "Wishlist",
          link: "/whislist",
        },
        {
          text: "Blog",
          link: "/blog",
        },
        {
          text: "Trabalhe conosco",
          link: "/trabalhe-conosco",
        },
        {
          text: "Meus Pedidos",
          link: "/my-orders",
        },
      ];
    
      const category = [
        {
          text: "Camisetas",
          link: "/t-shirts",
        },
        {
          text: "Calças",
          link: "/lags",
        },
        {
          text: "Bonés",
          link: "/caps",
        },
        {
          text: "Headphones",
          link: "/headphones",
        },
        {
          text: "Tênis",
          link: "/boot",
        },
      ];
      const contacts = [
        {
          text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
          link: "/adrress",
        },
        {
          text: "(85) 3051-3411",
          link: "/contact",
        },
      ];
  return (
    <footer className="bottom-0 w-full p-10 text-white mt-5 bg-darkGray">
      <div className="container mx-auto md:grid md:grid-cols-5">
        <div className="col-span-2">
          <div className="flex flex-col space-y-8">
            <img src={logo} width={200} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore.
            </p>
            <div className="social-media">
              <div className="flex gap-10">
                <img src={fb} alt="image-facebook" />
                <img src={insta} alt="image-instagram" />
                <img src={twitter} alt="image-twiter" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
            <Informacoes title={"Informações"} informations={infos}/>
        </div>
        <div className="md:col-span-1">
            <Informacoes title={"Categorias"} informations={category}/>
        </div>
        <div className="md:col-span-1">
            <Informacoes title={"Contatos"} informations={contacts}/>
        </div>
        <hr className="md:col-span-5 my-4" />
        <span className="md:col-span-5 text-center">@ 2024 Digital College</span>
      </div>
    </footer>
  );
};

export const Informacoes = ({ title, informations }) => {
    return (
      <div className="text-white w-fit">
        <h2 className="text-2xl mb-8">{title}</h2>
        <ul>
          {informations.map((info, index) => (
            <li key={index} className="mb-2">
              <Link to={info.link} className="hover:underline">
                {info.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };