/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4620ED",
        secondary: "#ea5716",
        tertiary: "#F2F4FF",
        danger: "#c00",
        warning: "#f2a818",
        success: "#089171",
        info: "#17a2b8",
        light: "#ffffff",
        rust: "#b7410e",
        yellow: "#f4b63e",
        dark: "#21082d",
      },
      boxShadow: {
        "theme-1": "0px 0px 10px #d4d4d475",
        input: "0px 4px 14px #dedede",
      },
    },

    screens: {
      xs: "368px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1280px",
    },
  },
  plugins: [],
};
