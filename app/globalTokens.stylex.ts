import stylex from "@stylexjs/stylex";

/*
:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;

  --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  );
  --secondary-glow: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  --tile-start-rgb: 239, 245, 249;
  --tile-end-rgb: 228, 232, 233;
  --tile-border: conic-gradient(
    #00000080,
    #00000040,
    #00000030,
    #00000020,
    #00000010,
    #00000010,
    #00000080
  );

  --callout-rgb: 238, 240, 241;
  --callout-border-rgb: 172, 175, 176;
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;
}'

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;

    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    --secondary-glow: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );

    --tile-start-rgb: 2, 13, 46;
    --tile-end-rgb: 2, 5, 19;
    --tile-border: conic-gradient(
      #ffffff80,
      #ffffff40,
      #ffffff30,
      #ffffff20,
      #ffffff10,
      #ffffff10,
      #ffffff80
    );

    --callout-rgb: 20, 20, 20;
    --callout-border-rgb: 108, 108, 108;
    --card-rgb: 100, 100, 100;
    --card-border-rgb: 200, 200, 200;
  }
}
*/

const DARK_MODE = "@media (prefers-color-scheme: dark)";

export const globalTokens = stylex.unstable_createVars({
  maxWidth: "1100px",
  borderRadius: "12px",
  fontMono:
    'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',

  foregroundR: { default: "0", [DARK_MODE]: "255" },
  foregroundG: { default: "0", [DARK_MODE]: "255" },
  foregroundB: { default: "0", [DARK_MODE]: "255" },

  bgStartRGB: { default: "rgb(214, 219, 220)", [DARK_MODE]: "rgb(0, 0, 0)" },

  bgEndR: { default: "255", [DARK_MODE]: "0" },
  bgEndG: { default: "255", [DARK_MODE]: "0" },
  bgEndB: { default: "255", [DARK_MODE]: "0" },

  calloutRGB: { default: "rgb(238, 240, 241)", [DARK_MODE]: "rgb(20, 20, 20)" },
  calloutRGB50: {
    default: "rgba(238, 240, 241, 0.5)",
    [DARK_MODE]: "rgba(20, 20, 20, 0.5)",
  },

  calloutBorderR: { default: "172", [DARK_MODE]: "108" },
  calloutBorderG: { default: "175", [DARK_MODE]: "108" },
  calloutBorderB: { default: "176", [DARK_MODE]: "108" },

  cardR: { default: "180", [DARK_MODE]: "100" },
  cardG: { default: "185", [DARK_MODE]: "100" },
  cardB: { default: "188", [DARK_MODE]: "100" },

  cardBorderR: { default: "131", [DARK_MODE]: "200" },
  cardBorderG: { default: "134", [DARK_MODE]: "200" },
  cardBorderB: { default: "135", [DARK_MODE]: "200" },

  primaryGlow: {
    default:
      "conic-gradient(from 180deg at 50% 50%, #16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg)",
    [DARK_MODE]: "radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))",
  },
  secondaryGlow: {
    default: "radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
    [DARK_MODE]: `linear-gradient(to bottom right, rgba(1, 65, 255, 0), rgba(1, 65, 255, 0), rgba(1, 65, 255, 0.3))`,
  },
});
