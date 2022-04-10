import './Header.scss'

const Header = () => {
  return (
    <header className='header container'>
      <div className="header__left">
        <img src="/assets/Group1plus.png" alt="" className="header__item header__item--img"/>
      </div>
      <div className="header__right">
        <div className="header__items">
          <button className="header__item header__button">login</button>
          <button className="header__item header__button">login</button>
          <img src="/assets/account.png" alt={''} className="header__item header__item--img" />
        </div>
      </div>
    </header>
  )
}

export default Header