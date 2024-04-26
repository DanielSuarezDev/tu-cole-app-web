import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#3D3D3D",
        secondary: "#000",
        disabled: "#D0CECE",
        grey: {
          50: "#F5F5F5",
          100: "#EEEEEE",
          200: "#CCCCCC",
          300: "#D0CECE",
          400: "#B5B5B5",
          500: "#9F9F9F",
          600: "#7A7A7A",
          700: "#666666",
          800: "#525252",
          900: "#3D3D3D",
          A100: "#292929",
        },
        error: {
          50: "#FBEEF0",
          100: "#F2C6CE",
          200: "#F0A8B8",
          300: "#DF768B",
          400: "#D54E69",
          500: "#CC2647",
          600: "#B82240",
          700: "#A31E39",
          800: "#8F1B32",
          900: "#7A172B",
          A100: "#661324",
          main: "#CC462B",
        },
        success: "#2E9E5E",
        warning: "#DFBC3F",
        info: "#2191FB",
        link: "#1976D2",
      },
      fontFamily: {
        DMSansRegular: ["DMSans-Regular", "sans-serif"],
        DMSansMedium: ["DMSans-Medium", "sans-serif"],
        DMSansBold: ["DMSans-Bold", "sans-serif"],
        LoraMedium: ["Lora-Medium", "serif"],
        LoraSemiBold: ["Lora-SemiBold", "serif"],
      },
      boxShadow: {
        custom:
          "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);",
        button: "0px 4px 6px 0px rgba(0, 0, 0, 0.10)",
      },
      borderRadius: {
        small: "6px",
        medium: "8px",
        large: "12px",
        xlarge: "16px",
      },
      padding: {
        small: "6px",
        medium: "8px",
        large: "12px",
        xlarge: "16px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'image-large': "url('/images/login-lhs.png')",
      },
    },
  },
  plugins: [],
};
export default config;
