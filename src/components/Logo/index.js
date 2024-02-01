import './Logo.css'
import logo from '../../assets/images/logo.svg'

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo do my books" />
      <p className="logo__name">
        my<strong>Books</strong>
      </p>
    </div>
  );
}

export default Logo