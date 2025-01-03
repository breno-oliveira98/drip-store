import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        background: '#b5b6f221',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',

        darkGray: '#1F1F1F',
        darkGray2: '#474747', 
        darkGray3: '#666666',
        lightGray: '#8F8F8F',
        lightGray2: '#CCCCCC',
        lightGray3: '#F5F5F5',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}