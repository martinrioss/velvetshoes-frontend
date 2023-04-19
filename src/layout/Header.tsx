import logoOnly from '../assets/logo-only.png';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import IconButton from '../components/pure/IconButton';


export default function Nav() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <Navbar></Navbar>
      </div>
      <div className="navbar-center">
        <img src={logo} alt="logo" width="200" className="hidden sm:block"/>
        <img src={logoOnly} alt="logo" className="sm:hidden" width={50}></img>
      </div>
      <div className="navbar-end">
        <IconButton icon="search"></IconButton>
        <IconButton icon="account_circle"></IconButton>
        <IconButton icon="shopping_cart"></IconButton>
      </div>
    </nav>
  );
}
