import { navItems } from "./navItems";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}
