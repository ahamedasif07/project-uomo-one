/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xm: "320px", // Custom size for extra small
        sm: "520px", // Default small size
        md: "768px", // Default medium size
        lg: "1024px", // Default large size
        xl: "1280px", // Default extra large size
        "2xl": "1536px", // Default 2xl size
      },
    },
  },
  plugins: [],
};
