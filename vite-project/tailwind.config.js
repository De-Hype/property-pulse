/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html", "./src/**/*.{js,ts,jsx,tsx}",

    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    //Or if using src directory
    // "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image':"url('./src/assets/Hero_assets.jpg')"
      }
    },
  },
  plugins: [],
};
