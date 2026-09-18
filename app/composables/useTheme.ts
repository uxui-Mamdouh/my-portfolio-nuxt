import { ref, onMounted } from "vue";
import { useState } from "#app";

export function useTheme() {
  const theme = useState<"light" | "dark">("theme", () => "light");

  const apply = (mode: "light" | "dark") => {
    theme.value = mode;
    document.documentElement.classList.toggle("dark", mode === "dark");
    try {
      localStorage.setItem("theme", mode);
    } catch (e) {}
  };

  const setTheme = (mode: "light" | "dark") => apply(mode);
  const toggleTheme = () => apply(theme.value === "dark" ? "light" : "dark");

  onMounted(() => {
    try {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      if (saved === "dark" || saved === "light") {
        apply(saved);
        return;
      }
    } catch (e) {
      /* ignore */
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    apply(prefersDark ? "dark" : "light");
  });

  return { theme, setTheme, toggleTheme };
}
