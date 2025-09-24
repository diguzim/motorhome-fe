import { navItems } from "./navItems";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}
