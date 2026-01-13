import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Business AI MVP</h1>
      <p style={styles.text}>
        Beantworte ein paar Fragen und erhalte eine erste Einschätzung.
      </p>

      <button style={styles.button} onClick={() => router.push("/step1")}>
        Jetzt starten
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    textAlign: "center" as const,
    padding: "40px",
  },
  title: {
    fontSize: "42px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "40px",
    maxWidth: "500px",
  },
  button: {
    padding: "15px 35px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
  },
};
