import "./globals.css";
import "leaflet/dist/leaflet.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Harbor Path",
  description:
    "A calm, supportive place for people struggling, people in recovery, and families who love them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}

        <footer className="footer">
          <div className="container">
            <p className="muted">
              This site is informational and not medical advice. If you are in
              immediate danger, call 911. If you’re thinking about self-harm,
              call or text 988 (U.S.).
            </p>

            <p className="muted small" style={{ marginTop: 10 }}>
              © {new Date().getFullYear()} Harbor Path • One step at a time.
            </p>

            <p className="muted small" style={{ marginTop: 6 }}>
              Built with care by{" "}
              <a
                href="https://spatialytics-next.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Spatialytics
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
