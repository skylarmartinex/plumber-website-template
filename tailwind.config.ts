import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#407ec9',       // Mr. Rooter blue
        'primary-dark': '#2d598f', // darker blue for hover/accents
        'primary-deeper': '#1b3554', // dark navy for footer/overlays
        gold: '#f5c200',           // Mr. Rooter gold
        'gold-dark': '#e8b52e',
        accent: '#dc2626',
        'accent-orange': '#ea580c',
      },
    },
  },
  plugins: [],
}

export default config
