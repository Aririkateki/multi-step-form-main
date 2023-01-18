module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mainbg: "#eef5ff",
      white: "#ffffff",
      DarkBlue: "#09264f",
      lightGray: "#bcbcbd",
      LightBlue: "#184b8e",
    },

    // Responsive

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideFromRight: "wiggle 1s ease-in ",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      // strategy: 'class', // only generate classes
    }),
  ],
};
