import { useState } from "react";
import { useRouter } from "next/router";
import { saveAnswer } from "../utils/storage";

export default function Step1() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const [motivation, setMotivation] = useState("");

  const handleNext = () => {
    saveAnswer("goal", goal);
    saveAnswer("motivation", motivation);
    router.push("/step2");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Deine Ziele & Motivation</h2>
      <label>Was ist dein Hauptziel? </label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />
      <label>Warum willst du dieses Business starten?</label>
      <input
        type="text"
        value={motivation}
        onChange={(e) => setMotivation(e.target.value)}
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
        Weiter
      </button>
    </div>
  );
}
