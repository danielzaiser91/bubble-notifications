# bubble-notifications

Nice customizable notifications with a simple animation. Zero dependencies, ~1 KB of JS, ESM & CommonJS.

## 🫧 Live demo

**➡️ https://danielzaiser91.github.io/bubble-notifications/**

The demo page shows the bubbles in action (themes, durations, stacking) and walks through installation and usage — try it before you install.

## 📦 Install

```sh
npm install @danielzaiser91/bubble-notifications
```

npm package: https://www.npmjs.com/package/@danielzaiser91/bubble-notifications

## 🚀 How to use

1. Include the stylesheet:

   ```html
   <link rel="stylesheet" href="node_modules/@danielzaiser91/bubble-notifications/bubble-notifications.css">
   ```

   (or `import "@danielzaiser91/bubble-notifications/bubble-notifications.css"` via your bundler)

2. Import the `BN` class and initialize it once the DOM is ready. The notification container is created automatically — if you want to control its placement, add your own `<div id="infoBubbleContainer"></div>` before calling `init()`:

   ```js
   // ES modules
   import { BN } from "@danielzaiser91/bubble-notifications";

   // or CommonJS
   const BN = require("@danielzaiser91/bubble-notifications");

   BN.init();
   ```

3. Call `BN.info(text)` whenever you want a notification. The bubble pops in, floats for 2.5 seconds and removes itself — multiple bubbles stack automatically. Pass a duration in milliseconds as the second argument to keep it around longer (or shorter):

   ```js
   BN.info("Hello from a bubble!");
   BN.info("I stay longer…", 6000);
   ```

### No build step? Use a CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@danielzaiser91/bubble-notifications/bubble-notifications.css">

<script type="module">
  import { BN } from "https://unpkg.com/@danielzaiser91/bubble-notifications/bubble-notifications.js";
  BN.init();
  BN.info("Ready to go!");
</script>
```

## 🎨 Customizing

The bubbles read their look from CSS custom properties — set them on the container:

```css
#infoBubbleContainer {
  --bn-background: #23283f;   /* any background, gradients included */
  --bn-color: #ffd400;        /* text color */
  --bn-padding: 12px 20px;
  --bn-radius: 8px;
}
```

| Variable | Default | Controls |
|---|---|---|
| `--bn-background` | `yellow` | bubble background (colors, gradients, …) |
| `--bn-color` | `#1a1a1a` | text color |
| `--bn-padding` | `10px` | inner spacing |
| `--bn-radius` | `25px` | corner rounding |

For anything beyond that, override `.infoBubble` or `#infoBubbleContainer` (position) directly in your own stylesheet.

## License

[MIT](LICENSE) © Daniel Zaiser
