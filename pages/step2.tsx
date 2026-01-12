import { useState } from "react";
import { useRouter } from "next/router";
import { saveAnswer } from "../utils/storage";

export default function Step2() {
  const router = useRouter();
  const [capital, setCapital] = useState("");
  const [time, setTime] = useState("");

  const handleNext = () => {
    saveAnswer("capital", capital);
    saveAnswer("time", time);
    router.push("/step3");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Kapital & Zeit</h2>
      <label>Wie viel Kapital kannst du investieren?</label>
      <input
        type="text"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />
      <label>Wie viel Zeit pro Woche kannst du investieren?</label>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
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
