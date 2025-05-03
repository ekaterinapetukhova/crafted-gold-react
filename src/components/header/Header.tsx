import LogoIcon from "../../assets/icons/logo.svg";
import CartIcon from "../../assets/icons/cart.svg";
import { NavItemsLabel } from "../../types/types.ts";
import { NavItem } from "./NavItem.tsx";

export function Header() {
  const labels = Object.values(NavItemsLabel);

  const items = labels.map((label) => {
    return <NavItem label={label} key={label} />;
  });

  return (
    <header className="container mx-auto py-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={LogoIcon} alt="Logo" />
        </div>
        <nav>
          <ul className="flex gap-x-9">{items}</ul>
        </nav>
        <div className="cursor-pointer">
          <img src={CartIcon} alt="Cart" />
        </div>
      </div>
    </header>
  );
}
