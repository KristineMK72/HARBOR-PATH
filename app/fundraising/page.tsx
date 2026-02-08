import Container from "../../components/Container";

export default function FundraisingPage() {
  return (
    <Container>
      <h1>Fundraising for treatment</h1>
      <p className="muted">
        If you’re trying to get someone into treatment, cost should not be the
        thing that stops you.
      </p>

      <h2>Before you fundraise</h2>
      <ul>
        <li>Ask the treatment center if funds can be paid directly to them</li>
        <li>Be clear about what funds will cover</li>
        <li>Protect privacy — share only what’s necessary</li>
      </ul>

      <h2>Common fundraising platforms</h2>
      <ul>
        <li>
          <a href="https://www.gofundme.com/" target="_blank">
            GoFundMe
          </a>
        </li>
        <li>
          <a href="https://www.givesendgo.com/" target="_blank">
            GiveSendGo
          </a>
        </li>
      </ul>

      <h2>Minnesota financial assistance</h2>
      <ul>
        <li>
          <a
            href="https://mn.gov/dhs/people-we-serve/adults/health-care/alcohol-drugs-addictions/programs-and-services/ccdtf.jsp"
            target="_blank"
          >
            MN Chemical Dependency Treatment Fund
          </a>
        </li>
        <li>
          <a href="https://www.mnsure.org/" target="_blank">
            MNsure (Medical Assistance)
          </a>
        </li>
      </ul>

      <p className="muted">
        Harbor Path does not collect money directly. We help people find safe,
        transparent options.
      </p>
    </Container>
  );
}
