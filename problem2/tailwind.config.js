/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: " 8px 8px 5px #afafaf, -5px -5px 4px #ffffff;",
        box: "9px 9px 16px rgba(189, 189, 189, 0.6),-9px -9px 16px rgba(255, 255, 255, 0.5)",
        inputIn:
          " inset 10px 10px 15px -10px #c3c3c3, inset -10px -10px 15px -10px #ffffff",
      },
    },
  },
  plugins: [],
};
