export type Devotion = {
  title: string;
  reflection: string;
  anchor: string;
  prompt: string;
  practice: string;
  action: string;
};

export const DAILY_DEVOTIONS: Devotion[] = [
  {
    title: "Just for today",
    reflection:
      "Just for today, I don’t have to solve my whole life. Recovery happens in moments, not in grand plans. When I feel overwhelmed, I can return to what is right in front of me. One honest step is enough for today.",
    anchor: "I only have to do today—one step at a time.",
    prompt:
      "What is the next right step I can take today — not tomorrow, not forever?",
    practice:
      "Place one hand on your chest. Inhale slowly for 4, exhale for 6. Do this three times and name one thing you can do in the next hour.",
    action:
      "Choose one small, healthy action today and do only that.",
  },
  {
    title: "Progress, not perfection",
    reflection:
      "Perfection keeps me stuck; progress sets me free. I don’t have to get everything right to move forward. Showing up honestly matters more than doing things flawlessly. Recovery is built through imperfect practice.",
    anchor: "Honest effort beats perfect plans.",
    prompt: "Where have I been asking too much of myself?",
    practice:
      "Write down one expectation you can soften today. Replace it with: “Good enough for today is enough.”",
    action: "Allow yourself to be imperfect in one area today.",
  },
  {
    title: "One breath at a time",
    reflection:
      "When everything feels overwhelming, I can return to my breath. In this moment, I am safe. I don’t need to escape the feeling — I can move through it gently. A single calm breath is a reset.",
    anchor: "I can come back to this moment.",
    prompt: "What happens when I slow down instead of pushing through?",
    practice:
      "Try ‘box breathing’: inhale 4, hold 4, exhale 4, hold 4 — repeat 4 times.",
    action: "Pause and take five slow breaths when stress rises today.",
  },
  {
    title: "Willingness counts",
    reflection:
      "I don’t need all the answers to begin. Willingness is often quiet and uncertain, but it opens the door to change. Even a small willingness is enough to keep moving.",
    anchor: "Willingness is a beginning.",
    prompt: "Where can I be just a little more open today?",
    practice:
      "Finish this sentence: “I’m willing to try _______ for just today.”",
    action: "Say yes to one supportive suggestion or idea.",
  },
  {
    title: "Letting go",
    reflection:
      "Holding tightly to what I can’t control drains me. Letting go doesn’t mean giving up — it means trusting the process and focusing on my own choices. Peace grows in the space I stop fighting.",
    anchor: "I release what I can’t control.",
    prompt: "What am I trying to control that I can release?",
    practice:
      "Name one worry. Then say: “Not today.” Put it on a list for later and return to what’s in front of you.",
    action: "Consciously let go of one worry today.",
  },
  {
    title: "Keep it simple",
    reflection:
      "Recovery doesn’t have to be complicated. Honesty, openness, and willingness — practiced one day at a time — are enough to carry me forward. Simplicity is strength.",
    anchor: "Simple is strong.",
    prompt: "What would it look like to simplify today?",
    practice:
      "Pick one priority for the next two hours. Let the rest wait.",
    action: "Remove one unnecessary pressure from your day.",
  },
  {
    title: "I am not alone",
    reflection:
      "Others have walked this path before me. I don’t have to do this by myself. Reaching out is a strength, not a weakness. Connection is medicine.",
    anchor: "Connection helps me heal.",
    prompt: "Who can I connect with today?",
    practice:
      "Think of one safe person. Draft a simple message: “Can you talk for 5 minutes?” Send it.",
    action: "Send a text, make a call, or attend a meeting.",
  },
  {
    title: "Gentle persistence",
    reflection:
      "Big change often comes from small, repeated efforts. I don’t need dramatic breakthroughs — steady steps are enough. Consistency builds trust in myself.",
    anchor: "Small steps add up.",
    prompt: "Where can I show up consistently instead of intensely?",
    practice:
      "Choose one habit you can repeat daily in under 2 minutes (water, shower, short walk, prayer, journal line).",
    action: "Do one small recovery-supporting habit today.",
  },
  {
    title: "Pause before reacting",
    reflection:
      "When emotions rise, I don’t have to act immediately. A pause creates space for a healthier response. In the pause, I regain my choice.",
    anchor: "A pause gives me power.",
    prompt: "What might change if I pause before responding?",
    practice:
      "When triggered, silently count to 10 and relax your shoulders before speaking.",
    action: "Take a pause before responding to something difficult today.",
  },
  {
    title: "Courage over comfort",
    reflection:
      "Growth often feels uncomfortable. Choosing courage doesn’t mean being fearless — it means moving forward despite fear. My future is built by brave little choices.",
    anchor: "I can do hard things—gently.",
    prompt: "Where is courage asking to show up in my life?",
    practice:
      "Name one fear and one next step. Keep the step small: one call, one form, one meeting, one honest conversation.",
    action: "Take one small courageous step today.",
  },
  {
    title: "Be where my feet are",
    reflection:
      "My life happens here, not in yesterday’s regrets or tomorrow’s worries. Presence grounds me in what is real and manageable. I return to now.",
    anchor: "Right here is enough.",
    prompt: "Where do I go mentally when I’m not present?",
    practice:
      "Use the 5–4–3–2–1 method: 5 things you see, 4 feel, 3 hear, 2 smell, 1 taste.",
    action: "Bring your attention back to the present moment today.",
  },
  {
    title: "Grace matters",
    reflection:
      "Healing grows where compassion lives. I can extend grace to myself without excusing harm. I can be accountable and still be kind. Shame is not my teacher today.",
    anchor: "I can be kind and honest at once.",
    prompt: "How can I be gentler with myself today?",
    practice:
      "Put a hand on your heart and say: “I’m learning. I’m trying. I’m here.”",
    action: "Practice self-compassion instead of self-criticism today.",
  },
  {
    title: "Hope is practical",
    reflection:
      "Hope isn’t just a feeling — it’s a choice made through action. Even small steps can rebuild trust in the future. Hope grows when I do the next helpful thing.",
    anchor: "Hope lives in my next action.",
    prompt: "What action would support hope today?",
    practice:
      "Make a 2-item list: (1) What I can do now, (2) What I can ask for help with. Do one from list (1).",
    action: "Take one hopeful, practical step today.",
  },
  {
    title: "Rest is allowed",
    reflection:
      "Rest is part of recovery, not a reward for finishing. Slowing down allows healing to happen. I don’t have to earn my right to rest. Rest can be responsible.",
    anchor: "Rest supports my recovery.",
    prompt: "Where am I pushing when I could pause?",
    practice:
      "Set a 10-minute timer. Sit quietly, stretch, or close your eyes. No fixing, no scrolling—just rest.",
    action: "Give yourself permission to rest in one small way today.",
  },

  // --- NEW DEVOTIONS (14 more) ---

  {
    title: "Honesty is my foundation",
    reflection:
      "Honesty doesn’t mean harshness—it means truth with care. When I tell the truth to myself, I stop fighting reality. From there, change becomes possible.",
    anchor: "Truth creates freedom.",
    prompt: "What truth have I been avoiding?",
    practice:
      "Write one honest sentence you’ve been afraid to admit. Keep it private. Just name it.",
    action: "Choose one honest action today (tell the truth, ask for help, show up).",
  },
  {
    title: "Feelings are not facts",
    reflection:
      "Feelings are real, but they aren’t always accurate. I can feel anxious and still be safe. I can feel hopeless and still have options. I can feel cravings and still choose.",
    anchor: "I can feel this and still choose well.",
    prompt: "What feeling is loud right now—and what is actually true?",
    practice:
      "Name the feeling. Then name one fact: “I’m safe.” “I have support.” “This will pass.”",
    action: "When a strong feeling hits, name it and choose one healthy response.",
  },
  {
    title: "Urges rise and fall",
    reflection:
      "Cravings can feel urgent, but they don’t last forever. Like a wave, an urge rises, peaks, and passes. I don’t have to obey it to survive it.",
    anchor: "This urge will pass.",
    prompt: "What do I need in this moment—comfort, connection, or movement?",
    practice:
      "Try “urge surfing”: breathe slowly and notice the urge like a wave. Rate it 1–10. Watch it change for 2 minutes.",
    action: "Delay any impulsive choice by 20 minutes and do something supportive.",
  },
  {
    title: "Boundaries are care",
    reflection:
      "Boundaries are not punishment—they are protection. They help me stay steady and safe. I can say no without explaining myself into exhaustion.",
    anchor: "My limits protect my healing.",
    prompt: "What boundary would support my peace today?",
    practice:
      "Practice one sentence: “I’m not available for that.” Or: “I need to think about it.”",
    action: "Set one small boundary today—time, people, or environments.",
  },
  {
    title: "The next right thing",
    reflection:
      "I don’t have to do everything. I can do the next right thing. Life becomes manageable when I stop demanding instant transformation.",
    anchor: "One right thing is enough.",
    prompt: "What is the next right thing—small, honest, doable?",
    practice:
      "List three tiny next steps. Circle the easiest one and do it first.",
    action: "Do one next-right thing in the next hour.",
  },
  {
    title: "Make room for support",
    reflection:
      "Support isn’t something I earn; it’s something I receive. Letting people help me is part of healing. I don’t have to prove I’m struggling to deserve care.",
    anchor: "I am allowed to be supported.",
    prompt: "Where can I let someone in—just a little?",
    practice:
      "Choose one person or group and make one contact: a message, a meeting, a check-in.",
    action: "Reach out once today—even briefly.",
  },
  {
    title: "Repair is possible",
    reflection:
      "I may not be able to undo the past, but I can show up differently today. Repair is built through consistency, honesty, and changed behavior over time.",
    anchor: "I can build trust through actions.",
    prompt: "What repair can I begin—small and sincere?",
    practice:
      "Write a simple repair sentence: “I’m sorry.” “I’m working on this.” “Here’s what I’ll do differently.”",
    action: "Make one small repairing choice today.",
  },
  {
    title: "Choose your environment",
    reflection:
      "My environment influences my choices. If I keep standing in the same doorway, I keep walking into the same room. Changing my surroundings can change my outcome.",
    anchor: "I can choose safer spaces.",
    prompt: "What place, person, or pattern puts my recovery at risk?",
    practice:
      "Identify one trigger environment and one safer alternative for today.",
    action: "Avoid one high-risk environment today and choose a safer one.",
  },
  {
    title: "Small routines save me",
    reflection:
      "Routine can feel boring, but it builds stability. When life gets messy, simple routines keep me grounded—sleep, food, water, and connection.",
    anchor: "Stability is built, not found.",
    prompt: "Which routine would help me feel steadier today?",
    practice:
      "Pick one routine anchor: drink water, eat something nourishing, take a shower, step outside for 3 minutes.",
    action: "Complete one stabilizing routine today—no matter how small.",
  },
  {
    title: "Speak to yourself kindly",
    reflection:
      "The way I speak to myself matters. Harsh inner talk can push me toward escape. Kindness helps me stay present and willing.",
    anchor: "I deserve kindness—especially from me.",
    prompt: "What would I say to someone I love in my situation?",
    practice:
      "Replace one harsh thought with a kind one: “I’m learning.” “I’m trying.” “I’m not alone.”",
    action: "Catch one self-criticism today and reframe it gently.",
  },
  {
    title: "Gratitude without pressure",
    reflection:
      "Gratitude isn’t denial. It doesn’t erase pain—it balances it. Even in hard seasons, I can notice one small good thing without forcing positivity.",
    anchor: "One small good thing counts.",
    prompt: "What is one thing I can appreciate right now?",
    practice:
      "Name one simple gratitude: warmth, a text, a meal, a breath, a safe place.",
    action: "Write down one gratitude today—just one.",
  },
  {
    title: "When I slip, I return",
    reflection:
      "A setback doesn’t erase progress. Shame tries to convince me to quit, but I can return—quickly, honestly, and with support. The comeback matters.",
    anchor: "I can return to my recovery.",
    prompt: "What does ‘returning’ look like for me today?",
    practice:
      "Create a mini plan: (1) tell someone, (2) get to a meeting, (3) remove the trigger, (4) rest and reset.",
    action: "If you’re struggling, take one “return” step today—immediately.",
  },
  {
    title: "My body is a signal",
    reflection:
      "Sometimes my craving is really hunger, exhaustion, loneliness, or stress. My body speaks before my mind catches up. Caring for my body supports my choices.",
    anchor: "Care for the body, support the mind.",
    prompt: "What might my body be asking for today?",
    practice:
      "HALT check: Am I Hungry, Angry, Lonely, or Tired? Address one of them.",
    action: "Do one body-care action today: food, water, rest, or movement.",
  },
  {
    title: "Forgiveness is a process",
    reflection:
      "Forgiveness doesn’t mean forgetting or excusing harm. It means releasing the grip of resentment and making room for healing. I can forgive in steps.",
    anchor: "I can heal without rewriting the past.",
    prompt: "What do I need in order to soften, even a little?",
    practice:
      "Say quietly: “I release one small piece today.” You don’t have to do it all at once.",
    action: "Choose one step toward peace today—distance, a boundary, or a kind thought.",
  },
];
