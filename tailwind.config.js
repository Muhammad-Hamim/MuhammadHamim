/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        primary: "#1E293B",
        accent: "#3B82F6",
        magenta: "#FF014F",
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 0 20px rgba(0, 0, 0, 0.1)',
        'hover': '0 10px 30px rgba(59, 130, 246, 0.1)'
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms')
  ]
}
