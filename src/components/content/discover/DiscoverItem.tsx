import BeerImage from "../../../assets/images/beer.png";

interface DiscoverItemProps {
  label: string;
  content: string;
}

export function DiscoverItem(props: DiscoverItemProps) {
  return (
    <li className="w-lg flex flex-col items-center p-5 text-center gap-y-5">
      <img src={BeerImage} alt="Beer" className="h-80" />
      <h3 className="text-white">{props.label}</h3>
      <p className="text-white">{props.content}</p>
    </li>
  );
}
