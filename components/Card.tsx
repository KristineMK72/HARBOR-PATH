export default function Card({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`card ${wide ? "cardWide" : ""}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
