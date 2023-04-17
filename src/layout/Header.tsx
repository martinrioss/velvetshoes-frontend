import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import IconButton from '../components/pure/IconButton';


export default function Nav() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start lg:flex">
        <Navbar></Navbar>
      </div>
      <div className="navbar-center">
        <img src={logo} alt="logo" width={300}/>
      </div>
      <div className="navbar-end">
        <IconButton icon="search"></IconButton>
        <IconButton icon="account_circle"></IconButton>
        <IconButton icon="shopping_cart"></IconButton>
      </div>
    </nav>
  );
}
