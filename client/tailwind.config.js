/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
import scrollBar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), scrollBar],
};
