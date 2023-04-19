interface NavItemProps {
  title: string,
  href: string
}


export default function NavItem({ title, href }: NavItemProps) {
  return (
    <li>
      <a href={ href } className="uppercase active:bg-neutral">{title}</a>
    </li>
  );
}
