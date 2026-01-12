import { useState } from "react";
import { useRouter } from "next/router";
import { saveAnswer } from "../utils/storage";

export default function Step3() {
  const router = useRouter();
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");

  const handleNext = () => {
    saveAnswer("skills", skills);
    saveAnswer("interests", interests);
    router.push("/step4");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Skills & Interessen</h2>
      <label>Welche Fähigkeiten hast du?</label>
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />
      <label>Welche Interessen oder Branchen findest du spannend?</label>
      <input
        type="text"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
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
