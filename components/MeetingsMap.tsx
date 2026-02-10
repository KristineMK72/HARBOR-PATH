"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Meeting } from "../lib/crowWingMeetings";
import { CROW_WING_MEETINGS } from "../lib/crowWingMeetings";

const DAYS: Meeting["day"][] = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

function getTodayName(): Meeting["day"] {
  const i = new Date().getDay(); // 0=Sun
  return DAYS[i];
}

function groupByLocation(meetings: Meeting[]) {
  const key = (m: Meeting) => `${m.location}|${m.address}|${m.city}|${m.state}|${m.lat}|${m.lon}`;
  const map = new Map<string, Meeting[]>();
  for (const m of meetings) {
    const k = key(m);
    map.set(k, [...(map.get(k) ?? []), m]);
  }
  return Array.from(map.entries()).map(([k, list]) => {
    const first = list[0];
    return {
      id: k,
      location: first.location,
      address: `${first.address}, ${first.city}, ${first.state}`,
      lat: first.lat,
      lon: first.lon,
      meetings: list,
    };
  });
}

export default function MeetingsMap() {
  const [day, setDay] = useState<Meeting["day"]>(getTodayName());
  const [showAllDays, setShowAllDays] = useState(false);

  const mapRef = useRef<any>(null);
  const layerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    return showAllDays
      ? CROW_WING_MEETINGS
      : CROW_WING_MEETINGS.filter((m) => m.day === day);
  }, [day, showAllDays]);

  const locations = useMemo(() => groupByLocation(filtered), [filtered]);

  useEffect(() => {
    let L: any;
    (async () => {
      L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (!containerRef.current) return;

      // init map once
      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
          center: [46.36, -94.20], // Brainerd area
          zoom: 10,
          scrollWheelZoom: false,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(mapRef.current);
      }

      // clear prior markers layer
      if (layerRef.current) {
        layerRef.current.remove();
      }
      layerRef.current = L.layerGroup().addTo(mapRef.current);

      // emoji icon (avoids image asset issues on Vercel)
      const pinIcon = L.divIcon({
        className: "hp-pin",
        html: `<div class="hp-pin-inner">📍</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -20],
      });

      for (const loc of locations) {
        const popupHtml = `
          <div style="min-width:220px">
            <strong>${loc.location}</strong><br/>
            <span style="opacity:.85">${loc.address}</span>
            <hr style="border:0;border-top:1px solid rgba(0,0,0,.12);margin:10px 0" />
            ${loc.meetings
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((m) => {
                const note = m.notes ? ` <em style="opacity:.85">(${m.notes})</em>` : "";
                const link = m.url ? ` <a href="${m.url}" target="_blank" rel="noreferrer">details</a>` : "";
                return `<div style="margin:6px 0">
                  <strong>${m.day}</strong> • ${m.time}<br/>
                  <span>${m.program}: ${m.name}${note}${link}</span>
                </div>`;
              })
              .join("")}
          </div>
        `;

        L.marker([loc.lat, loc.lon], { icon: pinIcon })
          .addTo(layerRef.current)
          .bindPopup(popupHtml);
      }
    })();

    return () => {
      // keep map persistent; just layers update
    };
  }, [locations]);

  return (
    <div className="card cardWide">
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Meetings map</h2>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <label className="muted small">Day:</label>
          <select
            className="hpSelect"
            value={day}
            onChange={(e) => setDay(e.target.value as Meeting["day"])}
            disabled={showAllDays}
          >
            {DAYS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <label className="hpCheck">
            <input
              type="checkbox"
              checked={showAllDays}
              onChange={(e) => setShowAllDays(e.target.checked)}
            />
            <span className="muted small">Show all days</span>
          </label>
        </div>
      </div>

      <div className="hpMapWrap">
        <div ref={containerRef} className="hpMap" />
      </div>

      <p className="muted small" style={{ marginTop: 12 }}>
        Default view shows meetings for <strong>{getTodayName()}</strong>. Tap a pin to see today’s meetings at that location.
      </p>
    </div>
  );
}
