export function TechCard({ icon, name }) {
  return (
    <li className={"card sm"}>
      <img src={icon} alt={name} />
      <h3 className={"title sm"}>{name}</h3>
    </li>
  );
}
