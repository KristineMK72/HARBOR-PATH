import Container from "../../components/Container";

export default function FacilitiesPage() {
  return (
    <Container>
      <h1>Treatment facilities in Minnesota</h1>
      <p className="muted">
        This is a starting point. Availability, payment options, and levels of
        care can change — always call to confirm.
      </p>

      <h2>Official search tools</h2>
      <ul>
        <li>
          <a href="https://fasttrackermn.org/" target="_blank">
            Fast-Tracker MN (recommended)
          </a>
        </li>
        <li>
          <a href="https://findtreatment.gov/" target="_blank">
            FindTreatment.gov (SAMHSA)
          </a>
        </li>
      </ul>

      <h2>Examples of Minnesota providers</h2>
      <ul>
        <li>Hazelden Betty Ford (multiple MN locations)</li>
        <li>Meridian Behavioral Health</li>
        <li>NUWAY</li>
        <li>Minnesota Adult & Teen Challenge</li>
        <li>Northland Recovery Center</li>
      </ul>

      <p className="muted">
        We do not endorse a single provider. This page exists to help people
        take the next right step.
      </p>
    </Container>
  );
}
