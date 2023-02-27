/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "design-grey": "#41463D",
        "design-purple": "#9D8DF1",
        "design-blue": "#B8CDF8",
        "design-green": "#95F2D9",
      },
    },
  },
  plugins: [],
};
