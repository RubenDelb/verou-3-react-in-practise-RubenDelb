module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunrise-img': "url('/src/assets/sunrise.webp')",
        'clear-img': "url('/src/assets/clear.webp')",
        'rain-img': "url('/src/assets/rain.webp')",
        'snow-img': "url('/src/assets/snow.webp')",
        'clouds-img': "url('/src/assets/clouds.webp')",
        'overcast-img': "url('/src/assets/overcast.webp')",
      }
    },
  },
  plugins: [],
}