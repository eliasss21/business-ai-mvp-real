import { useState } from "react";
import { useRouter } from "next/router";
import { saveAnswer } from "../utils/storage";

export default function Step4() {
  const router = useRouter();
  const [risk, setRisk] = useState("");
  const [style, setStyle] = useState("");

  const handleNext = () => {
    saveAnswer("risk", risk);
    saveAnswer("style", style);
    router.push("/summary");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Risiko & Stil</h2>
      <label>Wie hoch ist dein Risikolevel?</label>
      <input
        type="text"
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />
      <label>Welchen Business-Stil bevorzugst du? (z.B. innovativ, klassisch, digital)</label>
      <input
        type="text"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "40px" }}
      />
      <button
        onClick={handleNext}
        style={{
          background: "linear-gradient(90deg, #4f46e5, #6366f1)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "12px 30px",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Zusammenfassung
      </button>
    </div>
  );
}
