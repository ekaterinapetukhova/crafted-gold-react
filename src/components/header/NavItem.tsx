import { LinkTo } from "../common/LinkTo";

export function NavItem(props: { label: string }) {
  return (
    <li>
      <LinkTo label={props.label} url="/" className="text-white text-xl hover:text-yellow transition" />
    </li>
  );
}
