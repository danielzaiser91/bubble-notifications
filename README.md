# bubble-notifications

Nice customizable notifications with a simple animation. Zero dependencies, ~600 bytes of JS, ESM & CommonJS.

## 🫧 Live demo

**➡️ https://danielzaiser91.github.io/bubble-notifications/**

The demo page shows the bubbles in action and walks through installation and usage — try it before you install.

## 📦 Install

```sh
npm install @danielzaiser91/bubble-notifications
```

npm package: https://www.npmjs.com/package/@danielzaiser91/bubble-notifications

## 🚀 How to use

1. Add an empty container element with the id `infoBubbleContainer` anywhere on your page, and include the stylesheet:

   ```html
   <link rel="stylesheet" href="node_modules/@danielzaiser91/bubble-notifications/bubble-notifications.css">
   <div id="infoBubbleContainer"></div>
   ```

2. Import the `BN` class and initialize it once the DOM is ready:

   ```js
   // ES modules
   import { BN } from "@danielzaiser91/bubble-notifications";

   // or CommonJS
   const BN = require("@danielzaiser91/bubble-notifications");

   BN.init();
   ```

3. Call `BN.info(text)` whenever you want a notification. The bubble pops in, floats for 2.5 seconds and removes itself — multiple bubbles stack automatically:

   ```js
   BN.info("Hello from a bubble!");
   ```

### No build step? Use a CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@danielzaiser91/bubble-notifications/bubble-notifications.css">
<div id="infoBubbleContainer"></div>

<script type="module">
  import { BN } from "https://unpkg.com/@danielzaiser91/bubble-notifications/bubble-notifications.js";
  BN.init();
  BN.info("Ready to go!");
</script>
```

## 🎨 Customizing

The look is plain CSS — override `.infoBubble` (colors, padding, radius) or `#infoBubbleContainer` (position) in your own stylesheet to match your design.

## License

MIT © Daniel Zaiser
