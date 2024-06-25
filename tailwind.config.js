import { transform } from "typescript";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out   both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      // rotate: {
      //   'rotate-y--180': {
      //     transform: 'rotateY(-180deg)',
      //   },
      //   'rotate-y-180': {
      //     transform: 'rotateY(180deg)'
      //   },
      //   'rotate-y-0': {
      //     transform: 'rotateY(0)'
      //   }
      // }

      screens: {
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1536px'}
      },
    },
  plugins: [],
  }
}
