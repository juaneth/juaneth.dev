/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#111111",
          secondary: "#070707",
          accent: "#1f2937",
          neutral: "#1B1B1B",
          "base-100": "#111111",
          info: "#6787e0",
          success: "#16a34a",
          warning: "#ea580c",
          error: "#B44141",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
