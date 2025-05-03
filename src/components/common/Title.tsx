export function Title(props: { label: string; className?: string }) {
  return (
    <h2 className={`text-white text-[2.5rem] font-bold text-center pt-6 ${props.className ?? ""}`}>{props.label}</h2>
  );
}
