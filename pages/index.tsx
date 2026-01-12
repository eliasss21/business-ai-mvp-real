import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Willkommen zu Business AI MVP</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Dein digitaler Mitgründer hilft dir, die perfekte Business-Idee zu finden und direkt einen Plan zu erstellen.
      </p>
      <Link href="/step1">
        <button style={{
          background: "linear-gradient(90deg, #4f46e5, #6366f1)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "15px 40px",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          Jetzt starten
        </button>
      </Link>
    </div>
  );
}
