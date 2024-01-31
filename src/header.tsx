import logo from '../public/images/logo.svg';

function Header() {

    return (
      <header>
        <div>
          <p>My balance</p>
          <p className="balance">$921.48</p>
        </div>
        <div className="logo">
            <img src={logo} alt='A white and black circle overlapping'></img>
        </div>
      </header>
    )
  }
  
  export default Header