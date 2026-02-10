import Container from "../../components/Container";
import Link from "next/link";

export default function Addiction101() {
  return (
    <Container>
      <h1>Alcoholism & Addiction 101</h1>

      <p className="muted" style={{ fontSize: 18, maxWidth: 900 }}>
        Addiction isn’t a “character defect.” It’s a chronic, treatable health
        condition that changes the brain and body over time. People don’t keep
        using because they’re bad — they keep using because their nervous system
        has learned dependence, tolerance, and survival-mode coping.
      </p>

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>A simple way to think about it</h2>
        <ul className="muted">
          <li>
            <strong>Moralizing says:</strong> “Why don’t they just stop?”
          </li>
          <li>
            <strong>Medical reality says:</strong> “What happened to their brain,
            body, and life that made stopping hard — and what treatment/support
            helps?”
          </li>
        </ul>
        <p className="muted">
          Like diabetes, asthma, or allergies, the condition is real — and it
          often requires ongoing care, relapse-prevention skills, and support
          systems. People can and do recover.
        </p>
      </div>

      <div className="grid" style={{ marginTop: 14 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>What “dependence” means</h2>
          <p className="muted">
            With repeated use, the body adapts. Over time, a person may need
            more to feel the same effect (<strong>tolerance</strong>), and
            stopping can trigger withdrawal (<strong>dependence</strong>).
          </p>
          <ul className="muted">
            <li>Shakes, sweating, nausea</li>
            <li>Anxiety, insomnia, agitation</li>
            <li>High heart rate / elevated blood pressure</li>
            <li>Seizures (especially with alcohol/benzos)</li>
          </ul>
          <p className="muted small">
            <strong>Important:</strong> Alcohol withdrawal can be life-threatening.
            Detox or medical support may be needed.
          </p>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>What happens in the brain</h2>
          <p className="muted">
            Alcohol and drugs affect reward, stress, and decision-making circuits.
            Over time, the brain learns “use = relief,” and cravings can feel
            urgent even when someone truly wants to stop.
          </p>
          <ul className="muted">
            <li>Increased stress sensitivity</li>
            <li>Reduced impulse control under pressure</li>
            <li>Strong cue-triggered cravings (people/places/feelings)</li>
            <li>Worsening anxiety/depression symptoms for many</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Long-term effects (alcohol)</h2>
          <p className="muted">
            Alcohol impacts nearly every organ system. Long-term heavy use can
            contribute to:
          </p>
          <ul className="muted">
            <li><strong>Liver:</strong> fatty liver, hepatitis, cirrhosis</li>
            <li><strong>Heart:</strong> high blood pressure, cardiomyopathy, stroke risk</li>
            <li><strong>Pancreas:</strong> pancreatitis</li>
            <li><strong>Immune system:</strong> higher infection risk</li>
            <li><strong>Sleep:</strong> disrupted sleep architecture</li>
            <li><strong>Mood:</strong> depression, anxiety, irritability</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Long-term effects (other drugs)</h2>
          <p className="muted">
            Different substances have different risks, but common harms include:
          </p>
          <ul className="muted">
            <li><strong>Opioids:</strong> overdose risk, breathing suppression</li>
            <li><strong>Stimulants:</strong> heart strain, anxiety, sleep loss</li>
            <li><strong>Benzos:</strong> dependence, memory/cognition effects, dangerous withdrawal</li>
            <li><strong>Smoking/vaping:</strong> lung and cardiovascular harms</li>
          </ul>
          <p className="muted small">
            Mixing substances (especially opioids + benzos/alcohol) increases danger.
          </p>
        </div>

        <div className="card cardWide">
          <h2 style={{ marginTop: 0 }}>Wernicke-Korsakoff and nutrition</h2>
          <p className="muted">
            Heavy alcohol use can lead to serious vitamin deficiencies,
            especially <strong>thiamine (B1)</strong>. This can contribute to a
            spectrum of brain injury often discussed as <strong>Wernicke
            encephalopathy</strong> and <strong>Korsakoff syndrome</strong>.
          </p>
          <ul className="muted">
            <li>
              Possible signs include confusion, trouble with balance/coordination,
              and vision changes.
            </li>
            <li>
              Memory problems can become severe if not treated promptly.
            </li>
          </ul>
          <p className="muted small">
            If someone has severe confusion, trouble walking, or seems “not
            themselves,” seek medical care urgently.
          </p>
        </div>

        <div className="card cardWide">
          <h2 style={{ marginTop: 0 }}>Why stigma makes things worse</h2>
          <p className="muted">
            Shame and judgment don’t treat addiction — they often deepen it.
            When people feel looked down on, they hide, isolate, and avoid help.
            Compassion and accountability together are what support change.
          </p>
          <ul className="muted">
            <li>
              <strong>Helpful:</strong> “I care about you. I’ll support help.”
            </li>
            <li>
              <strong>Not helpful:</strong> “You’re just weak/selfish.”
            </li>
            <li>
              <strong>Better focus:</strong> safety, treatment, boundaries, and support.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>What recovery often needs</h2>
          <ul className="muted">
            <li>Medical support when needed (detox, medications)</li>
            <li>Therapy / counseling (skills, trauma, mental health)</li>
            <li>Peer support (AA/NA, SMART, community)</li>
            <li>Stable housing + structure</li>
            <li>Family support and healthy boundaries</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>If you want to help someone</h2>
          <ul className="muted">
            <li>Speak with respect and clarity</li>
            <li>Offer help finding treatment, rides, paperwork</li>
            <li>Set boundaries that protect safety</li>
            <li>Get support for yourself too</li>
          </ul>
          <Link href="/families">Go to Families & loved ones →</Link>
        </div>

        <div className="card cardWide">
          <h2 style={{ marginTop: 0 }}>Need help right now?</h2>
          <p className="muted">
            If there’s immediate danger, call <strong>911</strong>. If you or
            someone you love is in crisis or thinking about self-harm, call or
            text <strong>988</strong> (U.S.).
          </p>
          <Link href="/help-now">Go to Help Now →</Link>
        </div>
      </div>

      <p className="muted small" style={{ marginTop: 16 }}>
        Note: This page is educational, not medical advice. If you’re concerned
        about withdrawal, overdose risk, severe confusion, chest pain, seizures,
        or high blood pressure symptoms, seek medical care.
      </p>
    </Container>
  );
}
