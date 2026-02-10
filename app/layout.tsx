import "./globals.css";
import "leaflet/dist/leaflet.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Harbor Path",
  description:
    "A calm, supportive place for people struggling with addiction, people in recovery, and families who love them.",

  openGraph: {
    title: "Harbor Path",
    description:
      "Education, resources, and hope for people affected by alcoholism and addiction.",
    url: "https://harbor-path.vercel.app",
    siteName: "Harbor Path",
    images: [
      {
        url: "/9446A848-04AF-4706-B38A-A85333CCCB88.png",
        width: 1024,
        height: 1024,
        alt: "Safe Harbor — a calm anchor for recovery",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Harbor Path",
    description:
      "Education, resources, and hope for people affected by alcoholism and addiction.",
    images: ["/9446A848-04AF-4706-B38A-A85333CCCB88.png"],
  },
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
