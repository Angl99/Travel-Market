/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0074d9",
          secondary: "#906B7f",
          accent: "#D9CAD3",
          background: "#001f3f"
        },
      },
      backgroundImage: {
        'ombre-text': 'linear-gradient(to right, #001f3f, #0074d9, #906B7F, #D9CAD3)'
      },
      backgroundClip: {
        text: 'text'
      }
    },
  },
  plugins: [],
};
