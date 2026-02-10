import Container from "../../components/Container";
import Link from "next/link";

export default function Families() {
  return (
    <Container>
      <h1>Families & loved ones</h1>
      <p className="muted" style={{ fontSize: 18, maxWidth: 850 }}>
        You didn’t cause this. You can’t control it. You can care for yourself —
        and you can still be a steady, loving presence without losing yourself.
      </p>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Start here (today)</h2>
        <ul>
          <li>
            <strong>Get support for you.</strong> A family support meeting can
            change everything. <Link href="/meetings">See meetings →</Link>
          </li>
          <li>
            <strong>Make a simple safety plan.</strong> If there’s any risk of
            overdose, learn about naloxone (Narcan) and what to do.
          </li>
          <li>
            <strong>Focus on what you can control.</strong> Your boundaries,
            your choices, your safety, and how you respond.
          </li>
        </ul>
      </div>

      <div className="grid" style={{ marginTop: 14 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>If you’re scared right now</h2>
          <p className="muted">
            If someone is in immediate danger, call <strong>911</strong>. If you
            need crisis support, call or text <strong>988</strong> (U.S.).
          </p>
          <p className="muted small">
            If you think overdose is possible: call 911, give naloxone if
            available, and start rescue breathing if needed.
          </p>
          <Link href="/help-now">Go to Help Now →</Link>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>What to say (and what helps)</h2>
          <p className="muted">
            Keep it simple. Lead with care. Avoid arguing while they’re
            intoxicated.
          </p>
          <ul className="muted">
            <li>“I love you and I’m worried.”</li>
            <li>“I can’t support using, but I will support help.”</li>
            <li>“When you’re ready, I’ll help you find treatment.”</li>
            <li>“I’m setting a boundary to keep our home safe.”</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Boundaries aren’t punishment</h2>
          <p className="muted">
            Boundaries protect everyone. They make expectations clear and reduce
            chaos.
          </p>
          <ul className="muted">
            <li>No substances in the home</li>
            <li>No driving if using</li>
            <li>No money that supports addiction</li>
            <li>Safety rules for kids</li>
            <li>“I will leave / end the call if you’re intoxicated.”</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Common family traps (no shame)</h2>
          <p className="muted">
            Families do the best they can. These patterns are common — and
            changeable.
          </p>
          <ul className="muted">
            <li>Covering up consequences</li>
            <li>Trying to control everything</li>
            <li>Threats you can’t follow through on</li>
            <li>Getting pulled into endless arguing</li>
            <li>Ignoring your own health</li>
          </ul>
        </div>

        <div className="card cardWide">
          <h2 style={{ marginTop: 0 }}>A simple family plan (print this)</h2>
          <ol className="muted">
            <li>
              <strong>Support yourself first:</strong> attend a family meeting
              (Al-Anon, Nar-Anon, or SMART Family & Friends).
            </li>
            <li>
              <strong>Set 1–2 clear boundaries</strong> and follow through calmly.
            </li>
            <li>
              <strong>Learn overdose safety</strong> (naloxone + what to do).
            </li>
            <li>
              <strong>Offer help with next steps</strong> (assessment, detox, treatment).
            </li>
            <li>
              <strong>Document resources</strong> so you’re not searching in a crisis.
            </li>
          </ol>
        </div>
      </div>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Family support options (you deserve support)</h2>
        <ul>
          <li>
            <strong>Al-Anon</strong> (families & friends of alcoholics):{" "}
            <a href="https://al-anon.org/" target="_blank" rel="noreferrer">
              al-anon.org
            </a>
          </li>
          <li>
            <strong>Nar-Anon</strong> (families & friends of addicts):{" "}
            <a href="https://www.nar-anon.org/" target="_blank" rel="noreferrer">
              nar-anon.org
            </a>
          </li>
          <li>
            <strong>SMART Recovery Family & Friends</strong> (skills-based):{" "}
            <a
              href="https://smartrecovery.org/family"
              target="_blank"
              rel="noreferrer"
            >
              smartrecovery.org/family
            </a>
          </li>
        </ul>
        <p className="muted small" style={{ marginTop: 10 }}>
          If you’re not sure where to start, Al-Anon is a great first step.
        </p>
      </div>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Overdose safety (important)</h2>
        <p className="muted">
          If opioid use is possible, consider having naloxone (Narcan) available.
          It can reverse opioid overdose. You can also learn about fentanyl test
          strips and safer-use education.
        </p>
        <ul>
          <li>
            <a href="https://www.samhsa.gov/" target="_blank" rel="noreferrer">
              SAMHSA overdose education resources
            </a>
          </li>
          <li>
            <a
              href="https://www.cdc.gov/stopoverdose/naloxone/"
              target="_blank"
              rel="noreferrer"
            >
              CDC: Naloxone information
            </a>
          </li>
        </ul>
        <p className="muted small">
          If you want, we can add specific Minnesota naloxone access links and
          local distribution options.
        </p>
      </div>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Treatment navigation (Minnesota)</h2>
        <p className="muted">
          If your loved one is willing, the fastest path is usually: assessment →
          detox (if needed) → treatment level of care → ongoing support.
        </p>
        <ul>
          <li>
            <a href="https://fasttrackermn.org/" target="_blank" rel="noreferrer">
              Fast-Tracker MN (treatment search)
            </a>
          </li>
          <li>
            <a href="https://findtreatment.gov/" target="_blank" rel="noreferrer">
              FindTreatment.gov (SAMHSA locator)
            </a>
          </li>
          <li>
            <a
              href="https://mn.gov/dhs/people-we-serve/adults/health-care/alcohol-drugs-addictions/get-help/"
              target="_blank"
              rel="noreferrer"
            >
              MN DHS: Get help for alcohol & drug use
            </a>
          </li>
        </ul>
      </div>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>When they don’t want help yet</h2>
        <p className="muted">
          You can’t force recovery — but you can create conditions where help is
          more likely:
        </p>
        <ul className="muted">
          <li>Stay calm, consistent, and clear</li>
          <li>Stop funding or enabling the addiction</li>
          <li>Offer help with treatment steps (rides, calls, paperwork)</li>
          <li>Keep boundaries focused on safety</li>
          <li>Take care of your own support system</li>
        </ul>
      </div>

      <p className="muted small" style={{ marginTop: 16 }}>
        Want this page to include specific Crow Wing County phone numbers,
        clinics, detox locations, and family support groups? Tell me what towns
        you want included (Brainerd, Baxter, Crosby, Pequot Lakes, Pine River,
        etc.) and I’ll format it cleanly for Harbor Path.
      </p>
    </Container>
  );
}
