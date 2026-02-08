import Container from "@/components/Container";
import Card from "@/components/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <h1>You don’t have to do this alone.</h1>
      <p className="muted">
        Harbor Path is a calm place for people struggling, people in recovery,
        and families who care.
      </p>

      <div className="grid">
        <Card title="I need help now">
          <Link href="/help-now">Go to Help Now →</Link>
        </Card>

        <Card title="Daily grounding">
          <Link href="/daily">Read today’s reflection →</Link>
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
