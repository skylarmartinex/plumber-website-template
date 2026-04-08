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
        primary: '#1b3554',
        'primary-dark': '#0f2035',
        secondary: '#407ec9',
        gold: '#f5c200',
        accent: '#dc2626',
        'accent-orange': '#ea580c',
      },
    },
  },
  plugins: [],
}

export default config
