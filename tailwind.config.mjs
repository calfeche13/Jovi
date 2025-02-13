/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)', // Start below the viewport
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',   // End at its normal position
            opacity: 1,
          },
        },
        'fall': {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'sway': {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(100px) rotate(60deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' }
        }
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards', // Adjust duration and easing
        'fall': 'fall 10s linear infinite',
        'fall-fast': 'fall 7s linear infinite',
        'fall-fastest': 'fall 5s linear infinite',
        'sway': 'sway 2s linear infinite',
      }
    },
  },
  plugins: [],
};
