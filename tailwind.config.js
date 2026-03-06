/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#111111',
        surface: '#1a1a1a',
        border:  '#2a2a2a',
        muted:   '#6b6560',
        text:    '#e8e2d5',
        heading: '#f0ebe0',
        accent:  '#c9a96e',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '680px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e8e2d5',
          },
        },
      },
    },
  },
  plugins: [],
}
