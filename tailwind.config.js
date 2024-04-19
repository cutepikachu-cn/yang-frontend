/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1989fa",
        success: "#07c160",
        warning: "#ff976a",
        danger: "#ee0a24",
      },
    },
  },
  plugins: [],
  important: true,
};
