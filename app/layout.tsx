import "./globals.css";
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
              This site is informational and not medical advice.  
              If you are in immediate danger, call 911 or text/call 988.
            </p>
            <p className="muted">
              © {new Date().getFullYear()} Harbor Path
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
