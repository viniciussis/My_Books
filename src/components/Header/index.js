import Logo from "../Logo";
import profile from '../../assets/images/perfil.svg'
import bag from '../../assets/images/sacola.svg'
import "./Header.css";

const links = ["CATEGORIAS", "ESTANTE", "FAVORITOS"];
const icons = [profile, bag]

function Header() {
  return (
    <header className="header">
      <Logo />
      <ul className="header__nav">
        {links.map(link => (
          <li className="nav__links">{link}</li>
        ))}
        {icons.map(icon => (
          <li className="nav__icons"><img src={icon} alt="Ícones do menu" /></li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
