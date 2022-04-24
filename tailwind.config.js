module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunrise-img': "url('/src/assets/sunrise.jpg')",
        'clear-img': "url('/src/assets/clear.jpg')",
        'rain-img': "url('/src/assets/rain.jpg')",
        'snow-img': "url('/src/assets/snow.jpg')",
        'clouds-img': "url('/src/assets/clouds.jpg')",
        'overcast-img': "url('/src/assets/overcast.jpg')",
      }
    },
  },
  plugins: [],
}