# SMPL CSS

A Simple alternative to Material that allows you to code native html again!

- **No Bloat!** It's very lightweight
- **No Frameworks!** Use with React, Angular, Svelte, Vue, etc.
- **No Learning Curve!** It's just css classes, and we provide tons of examples.
- **Designer Friendly!** Yes, design tokens are included, and can easily be updated.
- **Completely Customizable!** Use this to jumpstart your design system!

Finally, a UX framework that simply is _just UX!_

## Getting Started

1. Import the css into your app.css file.
2. Import your preferred Material Icon Theme and set the `--icon-font`
3. Apply your design tokens.

### Example:

```css
@import url ("../node_modules/smpl-css/index.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Round");

:root {
  --icon-font: "Material Icons Round";

  /* any overrides */
}
```

## Want a slightly better ripple?

Do you want the ripple effect on button clicks to originating from the click-point?

just put this code before any other javascript. It does not interfere with anything:

```js
document.addEventListener("click", function (e) {
  const style = window.getComputedStyle(e.target);
  const x = style.getPropertyValue("--ripple-x");
  const y = style.getPropertyValue("--ripple-y");
  if (x !== undefined && y !== undefined) {
    const targetPos = e.target.getBoundingClientRect();
    e.target.style.setProperty(
      "--ripple-x",
      `calc(${e.clientX - targetPos.left}px - 5%)`
    );
    e.target.style.setProperty(
      "--ripple-y",
      `calc(${e.clientY - targetPos.top}px - 50%)`
    );
  }
});
```
