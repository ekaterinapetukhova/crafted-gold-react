interface SpecialItemProps {
  icon: string;
  label: string;
  content: string;
}

export function SpecialItem(props: SpecialItemProps) {
  return (
    <li className="flex flex-col w-56 justify-center text-center gap-y-5">
      <img src={props.icon} alt={props.label} className="h-20" />
      <h3 className="text-white">{props.label}</h3>
      <p className="text-white">{props.content}</p>
    </li>
  );
}
