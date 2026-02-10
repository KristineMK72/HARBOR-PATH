import Container from "../../components/Container";
import MeetingsMap from "../../components/MeetingsMap";
import { CROW_WING_MEETINGS } from "../../lib/crowWingMeetings";

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] as const;

function getToday() {
  return DAYS[new Date().getDay()];
}

export default function Meetings() {
  const today = getToday();
  const todays = CROW_WING_MEETINGS.filter((m) => m.day === today).sort((a,b) => a.time.localeCompare(b.time));

  return (
    <Container>
      <h1>Crow Wing County meetings</h1>
      <p className="muted">
        Default view shows <strong>{today}</strong>. Tap a pin for meetings at that location.
      </p>

      <MeetingsMap />

      <div className="card cardWide" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Today’s meetings ({today})</h2>
        {todays.length === 0 ? (
          <p className="muted">No meetings listed for today yet.</p>
        ) : (
          <ul>
            {todays.map((m, i) => (
              <li key={`${m.name}-${i}`}>
                <strong>{m.time}</strong> — {m.program}: {m.name} @ {m.location} ({m.city})
                {m.notes ? <span className="muted"> — {m.notes}</span> : null}
              </li>
            ))}
          </ul>
        )}
        <p className="muted small" style={{ marginTop: 10 }}>
          Tip: we can add more locations + meetings and refine accuracy as you gather them.
        </p>
      </div>
    </Container>
  );
}
