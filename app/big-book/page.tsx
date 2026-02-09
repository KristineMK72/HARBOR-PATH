import Container from "../../components/Container";

export default function BigBookPage() {
  return (
    <main>
      <Container>
        <h1>The Big Book (Alcoholics Anonymous)</h1>
        <p className="muted">
          We link to official A.A. sources for reading/listening to the Big Book.
        </p>

        <div className="card cardWide">
          <h2 style={{ marginTop: 0 }}>Official Big Book hub</h2>
          <p className="muted">
            Read, watch, or listen via A.A.’s official site:
          </p>
          <p>
            <a href="https://www.aa.org/the-big-book" target="_blank" rel="noreferrer">
              aa.org/the-big-book →
            </a>
          </p>
        </div>

        <div className="card cardWide" style={{ marginTop: 14 }}>
          <h2 style={{ marginTop: 0 }}>Popular chapter (official PDF)</h2>
          <p className="muted">
            Chapter 5: “How It Works” (A.A. PDF):
          </p>
          <p>
            <a
              href="https://www.aa.org/sites/default/files/2021-11/en_bigbook_chapt5.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open Chapter 5 PDF →
            </a>
          </p>
        </div>

        <p className="muted small" style={{ marginTop: 14 }}>
          Note: A.A. materials are protected by copyright for web posting; we
          link to official sources rather than reprint full text.{" "}
          <a href="https://www.aa.org/terms-of-use" target="_blank" rel="noreferrer">
            A.A. terms →
          </a>
        </p>
      </Container>
    </main>
  );
}
