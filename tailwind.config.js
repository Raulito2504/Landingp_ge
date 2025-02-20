/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kankun: {
          lightest: '#F6DED8',
          light: '#F2B28C',
          medium: '#D2665A',
          primary: '#B82132',
        }
      },
    },
  },
  plugins: [],
}