import Container from "../components/Container";
import Card from "../components/Card";
import Link from "next/link";

function todayLabel() {
  const d = new Date();
  return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

export default function HomePage() {
  const today = todayLabel();

  return (
    <Container>
      <h1>You don’t have to do this alone.</h1>
      <p className="muted">
        Harbor Path is a calm place for people struggling, people in recovery,
        and families who care.
      </p>

      <div className="grid">
        <Card title="Today’s devotions">
          <p className="muted">{today}</p>

          <p style={{ marginTop: 10 }}>
            <a
              href="https://www.aa.org/daily-reflections"
              target="_blank"
              rel="noreferrer"
            >
              AA Daily Reflections (today) →
            </a>
          </p>

          <p style={{ marginTop: 8 }}>
            <a
              href="https://www.hazeldenbettyford.org/thought-for-the-day"
              target="_blank"
              rel="noreferrer"
            >
              24 Hours a Day / Thought for the Day →
            </a>
          </p>

          <p className="muted small" style={{ marginTop: 10 }}>
            Harbor Path note: take the next right step—just for today.
          </p>
        </Card>

        <Card title="Big Book">
          <p className="muted">Read or listen from official A.A. sources.</p>
          <Link href="/big-book">Open Big Book links →</Link>
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
