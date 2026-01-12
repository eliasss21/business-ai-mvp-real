export const saveAnswer = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    const existing = JSON.parse(localStorage.getItem("answers") || "{}");
    existing[key] = value;
    localStorage.setItem("answers", JSON.stringify(existing));
  }
};

export const getAnswers = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("answers") || "{}");
  }
  return {};
};
