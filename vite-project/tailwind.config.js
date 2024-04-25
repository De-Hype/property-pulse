/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    //Or if using src directory
    // "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./src/assets/Hero_assets.jpg')",
      },
      screens: {
        vsphones: "360px",
        phones: "580px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        'smphone':{'max':'310px'},
        'mobile':{'max':'390px'},
        'sm':{'max':'520px'},
        "tab":{'max':'768px'},
        "lap":{'max':'1280px'},
      },
    },
  },
  plugins: [],
};
