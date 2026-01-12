import { useRouter } from "next/router";
import { getAnswers } from "../utils/storage";

export default function Summary() {
  const router = useRouter();
  const answers = getAnswers();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Deine Antworten</h2>
      <pre style={{ textAlign: "left", background: "#f3f3f3", padding: "20px", borderRadius: "10px" }}>
        {JSON.stringify(answers, null, 2)}
      </pre>
      <button
        onClick={() => router.push("/result")}
        style={{
          background: "linear-gradient(90deg, #4f46e5, #6366f1)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "12px 30px",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "30px"
        }}
      >
        KI-Ergebnis anzeigen
      </button>
    </div>
  );
}
