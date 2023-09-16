/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px"
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-cyan": "hsl(180,44.5%,53.3%)",
        "light-gray": "hsl(179,72.4%,75.9%)",
        "bg-gray": "hsl(208,45.5%,93.5%)"
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      }
    }
  },
  plugins: []
}
