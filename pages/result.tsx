import { getAnswers } from "../utils/storage";

export default function Result() {
  const answers = getAnswers();

  const businessIdea = `Basierend auf deinen Antworten könntest du ein Business starten, das sich auf ${
    answers.interests || "deine Interessen"
  } spezialisiert und deine Skills in ${answers.skills || "deine Fähigkeiten"} einsetzt.`;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Dein KI-Business-Ergebnis</h2>
      <p style={{ fontSize: "1.2rem", background: "#f3f3f3", padding: "20px", borderRadius: "10px" }}>
        {businessIdea}
      </p>
    </div>
  );
}
