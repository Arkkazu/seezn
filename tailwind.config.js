// import plugin from "tailwindcss/plugin";
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "yu-gothic": ["Yu Gothic", "yuGothic", "游ゴシック", "游ゴシック体", "sans-serif"],
        "yu-mincho": ["游明朝体", "Yu Mincho", "yu-mincho", "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", "serif"],
        notoSans: ["Noto Sans JP", "sans-serif"],
        notoSansVertical: ["Noto Sans JP Vertical", "sans-serif"],
        "noto-serif": ["Noto Serif JP", "serif"],
        cabin: ["Cabin", "serif"],
        roboto: ["Roboto", "serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        border: "#DAE0DA",
        ivory: "#f5f3ec",
        beige: "#E2DAC0",
        white: "#fff",
        "white-hover": "#E1F1E1",
        black: "#282828",
        "pale-green-light": "#E5F1E5",
        "pale-green": "#E1F1E1",
        "soft-green": "#D2E2D1",
        "pale-green-hover": "#D2E2D1",
        "light-green": "#0FAB48",
        green: "#2E6E2C",
        "green-hover": "#245622",
        blue: "#32578e",
        red: "#C00F0C",
        "pale-red": "#fdecea",
        "dark-gray": "#5A5A5A",
        "red-brown": "#9D3E2E",
        olive: "#8B8422",

        "pale-blue": "#F0F4F7",
        "off-white": "#f0f0f0",

        orange: "#EF742E",

        lightOrange: "#FFF4E5",
        paleOrange: "#FFFAF2",

        violet: "#4603C5",
        navy: "#0C3085",
        gray: "#5A5A5A",

        lightBlue: "#749CDB",

        lightOlive: "#D7D8AB",
        lightViolet: "#C4B1EA",
        lightNavy: "#0066FF",
        "light-gray": "#F2F2F2",
        "silver-gray": "#E7E6E6",
        darkBlue: "#022660",
        darkGreen: "#004544",
        darkOlive: "#4B4C0F",
        darkViolet: "#2C027C",
        darkNavy: "#0A2667",
        darkRed: "#800129",
        darkBorder: "#383838",
        paleBlue: "#EAF0F8",
        paleOlive: "#F6F6EC",
        paleViolet: "#F6F3FA",
        paleNavy: "#F4F8FD",
        paleGray: "#F5F5F5",
        mediumBlue: "#DCE7F9",
        mediumGreen: "#CFEDEC",
        mediumOlive: "#F1F1E0",
        mediumViolet: "#F1ECFB",
        mediumGray: "#B3B3B3",
      },
      dropShadow: {
        limePc: "0 calc((100vw / 1920) * 6) calc((100vw / 1920) * 6) rgba(209,223,142,1)",
        lime: "0 calc((100vw / 420) * 6) calc((100vw / 420) * 6) rgba(209,223,142,1)",
        black: "2rem 2rem 0 rgba(0,0,0,1)",
      },
      screens: {
        sp: "480px",
        md: "768px",
        lg: "1016px",
        pc: "1272px",
        "2xl": "1536px",
        "2pc": "1921px",
      },
      fontSize: {
        ...Object.fromEntries(
          Array.from({ length: 160 }, (_, index) => {
            let size = 1 + index;
            return [`${size}`, `${size}rem`];
          })
        ),
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        ...Object.fromEntries(
          Array.from({ length: 120 }, (_, index) => {
            let size = 1 + index;
            return [`${size}`, `${size}rem`];
          })
        ),
      },
      spacing: {
        0: "0rem",
        ...Object.fromEntries(
          Array.from({ length: 2000 }, (_, index) => {
            let size = 1 + index;
            return [`${size}`, `${size}rem`];
          })
        ),
      },
      borderWidth: {
        0: "0px",
        ...Object.fromEntries(
          Array.from({ length: 99 }, (_, index) => {
            let size = 2 + index;
            return [`${size}`, `${size}px`];
          })
        ),
      },
      borderRadius: {
        0: "0rem",
        ...Object.fromEntries(
          Array.from({ length: 200 }, (_, index) => {
            let size = 1 + index;
            return [`${size}`, `${size}rem`];
          })
        ),
      },
      inset: {
        0: "0rem", // `top-0` を復活させる
        // top / left / right / bottom に適用するカスタム値
        ...Object.fromEntries(
          Array.from({ length: 2000 }, (_, index) => {
            let size = 1 + index;
            return [`${size}`, `${size}rem`];
          })
        ),
      },
      scale: {
        0: "0", // `scale-0` を追加
        ...Object.fromEntries(
          Array.from({ length: 500 }, (_, index) => {
            let size = 1 + index;
            return [`${size}`, `${size / 100}`]; // `scale-100` で1倍（デフォルトの100%）
          })
        ),
      },
      backgroundImage: {
        "gradient-green-dark": "linear-gradient(to right, #2E6E2C 0%, #030802 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e, addVariant }) {
      addVariant('hoverable', '@media (hover: hover) and (pointer: fine)');
      const newUtilities = {
        ".vertical-rl": {
          writingMode: "vertical-rl",
          "-webkit-writing-mode": "vertical-rl",
          "text-orientation": "upright",
          "-webkit-text-orientation": "upright",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
          "-webkit-writing-mode": "vertical-lr",
          "text-orientation": "upright",
          "-webkit-text-orientation": "upright",
        },
        ".half-leading": {
          marginBlock: "calc((1em - 1lh) / 2)",
        },
        ".p-noto-sans": {
          paddingBottom: "0.1em",
        },
        ".p-yu-gothic": {
          paddingTop: "0.08em",
        },
        ".abs-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};