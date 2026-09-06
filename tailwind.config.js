/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: '#E2E2EA',
        profilePurple: '#7C6FF7',
        mintCard: '#A7DAD5',
        awardPurple: '#9B7FD4',
        awardYellow: '#FFC368',
        clientGray: '#515151',
        orbBlack: '#050505',
        primaryDark: '#111111',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'board': '0 40px 100px rgba(0,0,0,0.17), 0 8px 24px rgba(0,0,0,0.07)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      }
    },
  },
  plugins: [],
}
