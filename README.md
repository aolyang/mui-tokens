# Mui Tokens

I'm so excited [mui v6 is out!!!](https://mui.com/blog/material-ui-v6-is-out)

The most exciting feature I love is 
the official [#css-theme-variables](https://mui.com/blog/material-ui-v6-is-out/#css-theme-variables)
support

As a big fan of tailwindcss, I'm trying to make mui work with tailwindcss better.

Now, theme `color channel` is coming, I can say goodbye to my hard-code GlobalStylesVars provider.

Here is my general purpose: `mui-tokens` packages

1. first goal is to provide a compacted mui theme config to work with
   tailwindcss alpha channel.
    ```json
    {
        "palette": {
            "primary-main": "rgba(var(--mui-primary-mainChannel, <alpha-value>))"
        }     
    }
    ```
2. provide `tokens` plugin to override tailwind defaults
3. a simple preview page to customize theme config

## Usage(WIP, Change anytime)

theme creator & tailwind config compacted

+ for tailwind config
```js
// tailwind.config.mjs
import { muiTheme } from "mui-tokens/tailwind"

export default {
   theme: {
      extend: muiTheme
   }
}
```

+ use in component (planning)

```jsx
import { typogrphy, space, palette } from "mui-tokens"
import { style } from "@vanilla-extract/css"

export const cardClasses = style([
    "text-xl text-mui-primary-main",
   {
      color: palette.text.primary,
      backgroundColor: palette.background.paper
   }
])
```

## Mui & Tailwind Table

| tokens  | Mui   | Tailwind | Supported? |
|---------|-------|----------|------------|
| palette | color | colors   |            |
