/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // أضف ألوانك المخصصة هنا إذا needed
      },
    },
  },
  plugins: [],
  safelist: [
    "fixed",
    "top-0",
    "left-0",
    "w-5",
    "h-5",
    "rounded-full",
    "pointer-events-none",
    "z-[9999]",
    "bg-indigo-500",
    "opacity-70",
    "transition-transform",
    "duration-150",
    "ease-out",
    "cursor-active",
  ],
};
