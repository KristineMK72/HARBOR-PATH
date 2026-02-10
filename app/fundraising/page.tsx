import Container from "../../components/Container";

export default function TreatmentFund() {
  return (
    <Container>
      <h1>Treatment Fund</h1>

      <p className="muted" style={{ fontSize: 18, maxWidth: 820 }}>
        When someone is ready for help, cost should not be the reason treatment
        doesn’t happen. The Harbor Path Treatment Fund exists to help people and
        families navigate safe, transparent ways to raise or access money for
        care.
      </p>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What the Treatment Fund supports</h2>
        <p className="muted">
          Treatment needs look different for everyone. Fundraising or financial
          help may be used to support <strong>all levels of care</strong>,
          depending on individual needs and availability.
        </p>

        <ul className="muted">
          <li><strong>Detox / withdrawal management</strong></li>
          <li><strong>Residential or inpatient treatment</strong></li>
          <li><strong>Outpatient or intensive outpatient (IOP)</strong></li>
          <li><strong>Sober or transitional living</strong></li>
          <li><strong>Medication-assisted treatment (MAT)</strong></li>
        </ul>
      </div>

      <div className="grid" style={{ marginTop: 14 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Before you fundraise</h2>
          <ul className="muted">
            <li>
              Ask the treatment provider if funds can be paid{" "}
              <strong>directly to the facility</strong>.
            </li>
            <li>
              Be clear about what funds will cover (assessment, detox, days of
              care, housing, medications, etc.).
            </li>
            <li>
              Protect privacy — share only what is necessary.
            </li>
            <li>
              Designate one trusted person to manage funds when possible.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Common fundraising platforms</h2>
          <p className="muted">
            These platforms are commonly used by families and communities to
            raise money for treatment:
          </p>
          <ul>
            <li>
              <a href="https://www.gofundme.com/" target="_blank" rel="noreferrer">
                GoFundMe →
              </a>
            </li>
            <li>
              <a
                href="https://www.givesendgo.com/"
                target="_blank"
                rel="noreferrer"
              >
                GiveSendGo →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Minnesota financial assistance</h2>
        <p className="muted">
          Before or alongside fundraising, explore public and insurance-based
          options. These programs may fully or partially cover treatment.
        </p>

        <ul>
          <li>
            <a
              href="https://mn.gov/dhs/people-we-serve/adults/health-care/alcohol-drugs-addictions/programs-and-services/ccdtf.jsp"
              target="_blank"
              rel="noreferrer"
            >
              Minnesota Chemical Dependency Treatment Fund (CCDTF) →
            </a>
          </li>
          <li>
            <a href="https://www.mnsure.org/" target="_blank" rel="noreferrer">
              MNsure & Medical Assistance →
            </a>
          </li>
          <li>
            <a href="https://fasttrackermn.org/" target="_blank" rel="noreferrer">
              Fast-Tracker MN (treatment search & funding guidance) →
            </a>
          </li>
        </ul>
      </div>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Transparency & trust</h2>
        <p className="muted">
          Harbor Path does <strong>not</strong> collect or manage money directly.
          Our role is to help individuals and families find ethical, transparent
          options to access care.
        </p>

        <p className="muted small">
          Whenever possible, funds should be paid directly to treatment providers
          and documented clearly. This protects both the person seeking care and
          those offering support.
        </p>
      </div>
    </Container>
  );
}
