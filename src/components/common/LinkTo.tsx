interface LinkProps {
  url: string;
  label: string;
  className: string;
}

export function LinkTo(props: LinkProps) {
  return (
    <a href={props.url} className={props.className}>
      {props.label}
    </a>
  );
}
