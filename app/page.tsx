import Container from "../components/Container";
import Card from "../components/Card";
import Link from "next/link";
import { DAILY_DEVOTIONS } from "../lib/dailyDevotions";

function todayIndex() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % DAILY_DEVOTIONS.length;
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

      <p className="muted" style={{ fontSize: 18, maxWidth: 820 }}>
        Harbor Path is a calm, supportive place for people struggling with
        alcohol or drug use, people in recovery, and families who love them.
      </p>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why Harbor Path exists</h2>
        <p className="muted" style={{ marginTop: 8 }}>
          When someone is ready for help — or when a family is scared and
          searching — it shouldn’t take hours of digging to find a next step.
          Harbor Path brings trustworthy resources together in one place so
          anyone affected by addiction or alcoholism can find support quickly,
          gently, and without judgment.
        </p>

        <div className="grid" style={{ marginTop: 10 }}>
          <div className="card" style={{ gridColumn: "span 6" }}>
            <h3 style={{ marginTop: 0 }}>Mission</h3>
            <p className="muted">
              To provide clear, compassionate, practical resources for anyone
              impacted by addiction — individuals, families, and communities —
              so the next right step is always within reach.
            </p>
          </div>

          <div className="card" style={{ gridColumn: "span 6" }}>
            <h3 style={{ marginTop: 0 }}>Vision</h3>
            <p className="muted">
              A community where help is easy to find, recovery is supported,
              families are not alone, and people can access as many resources as
              they need — for as long as they need them.
            </p>
          </div>
        </div>

        <p className="muted small" style={{ marginTop: 10 }}>
          You’ll find meeting information, treatment navigation, financial help
          options, family support resources, and daily encouragement — all in one
          place.
        </p>
      </div>

      <div className="grid" style={{ marginTop: 14 }}>
        <Card title="Just for today">
          <p className="muted small">{todayLabel}</p>

          <h3 style={{ marginTop: 8 }}>{devotion.title}</h3>

          <p className="muted" style={{ marginTop: 8 }}>
            {devotion.reflection}
          </p>

          <p style={{ marginTop: 10, fontWeight: 700 }}>
            {devotion.anchor}
          </p>

          <p className="muted" style={{ marginTop: 10 }}>
            <em>{devotion.prompt}</em>
          </p>

          <p className="muted small" style={{ marginTop: 10 }}>
            <strong>Practice:</strong> {devotion.practice}
          </p>

          <p className="muted" style={{ marginTop: 10 }}>
            <strong>Just for today:</strong> {devotion.action}
          </p>
        </Card>

        <Card title="Help now">
          <p className="muted">
            If you or someone you love needs immediate support, start here.
          </p>
          <Link href="/help-now">Go to Help Now →</Link>
        </Card>

        <Card title="Meetings (Crow Wing County)">
          <p className="muted">
            Map + today’s meetings so you can find what’s available right now.
          </p>
          <Link href="/meetings">Find meetings →</Link>
        </Card>

        <Card title="Big Book">
          <p className="muted">Read or listen from official A.A. sources.</p>
          <Link href="/big-book">Open Big Book links →</Link>
        </Card>

        <Card title="Families & loved ones">
          <p className="muted">
            Support, clarity, and next steps for families affected by addiction.
          </p>
          <Link href="/families">Family support →</Link>
        </Card>

        <Card title="Resources">
          <p className="muted">
            Treatment navigation, financial help, and trusted statewide resources.
          </p>
          <Link href="/resources">Explore resources →</Link>
        </Card>
      </div>
    </Container>
  );
}
