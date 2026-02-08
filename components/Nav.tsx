import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav">
      <div className="navInner">
        <Link className="brand" href="/">⚓ Harbor Path</Link>
        <div>
          <Link className="pill pillDanger" href="/help-now">Help Now</Link>{" "}
          <Link className="pill" href="/daily">Daily</Link>{" "}
          <Link className="pill" href="/meetings">Meetings</Link>{" "}
          <Link className="pill" href="/families">Families</Link>
        </div>
      </div>
    </div>
  );
}
