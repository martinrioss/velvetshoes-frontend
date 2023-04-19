import IconButton from './pure/IconButton';
import NavItem from './pure/NavItem';


export default function Navbar() {

  function navbar_items() {
    return (
      <>
        <NavItem title="men" href=""></NavItem>
        <NavItem title="women" href=""></NavItem>
        <NavItem title="kids" href=""></NavItem>
      </>
    );
  }

  return (
    <>
      <div className="dropdown dropdown-hover">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/no-noninteractive-tabindex */}
        <IconButton icon="menu" className="sm:hidden"></IconButton>
        <ul className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
          {navbar_items()}
        </ul>
      </div>
      <ul className="hidden sm:flex menu menu-horizontal px-1">
        {navbar_items()}
      </ul>
    </>

  );
}
