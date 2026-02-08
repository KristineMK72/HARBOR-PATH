import Container from "../../components/Container";

export default function ResourcesPage() {
  return (
    <Container>
      <h1>Help paying for treatment & finding support</h1>
      <p className="muted">
        Trusted resources for people seeking treatment, financial help, and
        guidance in Minnesota.
      </p>

      <h2>Find treatment</h2>
      <ul>
        <li>
          <a href="https://fasttrackermn.org/" target="_blank">
            Fast-Tracker MN
          </a>{" "}
          — Minnesota’s official treatment search
        </li>
        <li>
          <a href="https://findtreatment.gov/" target="_blank">
            FindTreatment.gov
          </a>{" "}
          — SAMHSA national locator
        </li>
        <li>
          <a
            href="https://mn.gov/dhs/people-we-serve/adults/health-care/alcohol-drugs-addictions/get-help/"
            target="_blank"
          >
            MN DHS: Get help for alcohol & drug use
          </a>
        </li>
      </ul>

      <h2>Financial help for treatment</h2>
      <ul>
        <li>
          <a
            href="https://mn.gov/dhs/people-we-serve/adults/health-care/alcohol-drugs-addictions/programs-and-services/ccdtf.jsp"
            target="_blank"
          >
            MN Chemical Dependency Treatment Fund (CDTF)
          </a>
        </li>
        <li>
          <a href="https://www.mnsure.org/" target="_blank">
            MNsure (Medical Assistance & MinnesotaCare)
          </a>
        </li>
        <li>
          <a
            href="https://mn.gov/dhs/people-we-serve/adults/health-care/alcohol-drugs-addictions/programs-and-services/rule-25.jsp"
            target="_blank"
          >
            Rule 25 assessment (required for public funding)
          </a>
        </li>
      </ul>

      <h2>24/7 help</h2>
      <ul>
        <li>Call or text <strong>988</strong> (Suicide & Crisis Lifeline)</li>
        <li>SAMHSA Helpline: <strong>1-800-662-HELP (4357)</strong></li>
      </ul>
    </Container>
  );
}
