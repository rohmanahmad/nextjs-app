const { createThemes } = require('tw-colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.ts",
    "./app/**/*.tsx",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      orange: {
        100: "#FFECEC",
        500: "#F53855",
        600: "rgba(248, 113, 113)",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#2FAB73",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        50: "#f9fafb",
        100: "#EEEFF2",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#AFB5C0",
        500: "#DDDDDD",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [
    createThemes({
      'defaultTheme': {},
      dashboard: {
        fontFamily: {
          sans: ['cairo', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          light: colors.light,
          dark: colors.dark,
          darker: colors.darker,
          primary: {
            DEFAULT: colors.primary,
            // 50: colors.primary[50],
            // 100: colors.primary[100],
            light: colors['primary-light'],
            lighter: colors['primary-lighter'],
            dark: colors['primary-dark'],
            darker: colors['primary-darker'],
          },
          secondary: {
            DEFAULT: colors.fuchsia[600],
            50: colors.fuchsia[50],
            100: colors.fuchsia[100],
            light: colors.fuchsia[500],
            lighter: colors.fuchsia[400],
            dark: colors.fuchsia[700],
            darker: colors.fuchsia[800],
          },
          success: {
            DEFAULT: colors.green[600],
            50: colors.green[50],
            100: colors.green[100],
            light: colors.green[500],
            lighter: colors.green[400],
            dark: colors.green[700],
            darker: colors.green[800],
          },
          warning: {
            DEFAULT: colors.orange[600],
            50: colors.orange[50],
            100: colors.orange[100],
            light: colors.orange[500],
            lighter: colors.orange[400],
            dark: colors.orange[700],
            darker: colors.orange[800],
          },
          danger: {
            DEFAULT: colors.red[600],
            50: colors.red[50],
            100: colors.red[100],
            light: colors.red[500],
            lighter: colors.red[400],
            dark: colors.red[700],
            darker: colors.red[800],
          },
          info: {
            DEFAULT: colors.cyan[600],
            50: colors.cyan[50],
            100: colors.cyan[100],
            light: colors.cyan[500],
            lighter: colors.cyan[400],
            dark: colors.cyan[700],
            darker: colors.cyan[800],
          },
        },
      },
      accounts: {},
      landingpage: {}
    })
  ],
};
