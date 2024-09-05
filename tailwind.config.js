/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#14000E",
        secondary:"#220066",
        violet:"#F38EF5",
        phlox:"#D43CF6",
        lavender:"#B388EB",
        vividblue:"#18C6F2",


      },
      container:{
        center: true,
        padding:{
           DEFAULT: "1rem",
           sm:"3rem",
        },
      },

    },

  },
  plugins: [],
}