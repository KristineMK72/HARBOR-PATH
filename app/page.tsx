import Container from "../components/Container";
import Card from "../components/Card";
import Link from "next/link";
import { DAILY_DEVOTIONS } from "../lib/dailyDevotions";

function todayIndex() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const diff = today.getTime() - start.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return day % DAILY_DEVOTIONS.length;
}

export default function HomePage() {
  const devotion = DAILY_DEVOTIONS[todayIndex()];
  const todayLabel = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Container>
      <h1>You don’t have to do this alone.</h1>
      <p className="muted">
        Harbor Path is a calm place for people struggling, people in recovery,
        and families who care.
      </p>

      <div className="grid">
        <Card title="Just for today">
          <p className="muted small">{todayLabel}</p>
          <h3 style={{ marginTop: 6 }}>{devotion.title}</h3>
          <p className="muted">{devotion.body}</p>
        </Card>

        <Card title="Big Book">
          <p className="muted">Read or listen from official A.A. sources.</p>
          <Link href="/big-book">Open Big Book →</Link>
        </Card>

        <Card title="I need help now">
          <Link href="/help-now">Go to Help Now →</Link>
        </Card>

        <Card title="Local meetings">
          <Link href="/meetings">Find meetings →</Link>
        </Card>

        <Card title="Families & loved ones">
          <Link href="/families">Support for families →</Link>
        </Card>
      </div>
    </Container>
  );
}
