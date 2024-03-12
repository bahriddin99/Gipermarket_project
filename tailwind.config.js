/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        screens:{
          lg:"1200px",
          md:"768px",
          sm:"640px"
        }
        
      },
      fontFamily:{
        jost:"Jost"
      },
      colors:{
        aksiya:"#FEEE00",
        header:"#FCFCFC",
        footer:"#F5F5F6",
        footer2:"#EAEAEA",
        text:"#333333",
        texts:"#211A1A"
      }
    },
  },
  plugins: [],
}