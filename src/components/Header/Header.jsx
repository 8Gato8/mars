import './Header.css';
import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <header className="app__header header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__links-container">
        <ul className="header__links header-links">
          <li className="header-links__link header-links__link_type_general ">О МАРСЕ</li>
          <li className="header-links__link header-links__link_type_general ">ПРОЦЕСС</li>
          <li className="header-links__link header-links__link_type_general ">БИЛЕТЫ</li>
          <li className="header-links__link header-links__link_type_general ">НОВОСТИ</li>
          <li className="header-links__link header-links__link_type_general ">КОНТАКТЫ</li>
          <li className="header-links__link header-links__link_type_purchase">КУПИТЬ БИЛЕТЫ</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
