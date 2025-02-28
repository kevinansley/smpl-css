# SMPL CSS

A Simple alternative to Material that allows you to code native html again!

- **No Bloat!** It's very lightweight
- **No Frameworks!** Use with React, Angular, Svelte, Vue, etc.
- **No Learning Curve!** It's just css classes, and we provide tons of examples.
- **Designer Friendly!** Yes, design tokens are included, and can easily be updated.
- **Completely Customizable!** Use this to jumpstart your design system!

Finally, a UX framework that simply is _just UX!_

## Getting Started

1. Import the css into your app.
2. Import your preferred Material Icon Theme and set the `--icon-font`
3. Apply your design tokens.

### Example:

#### Importing JS/CSS Modules before your own stylesheets.

```js
// React Example (main.tsx)
import "@smpl-css/design";
import "@smpl-css/design/index.css";
import "@smpl-css/design/utilities.css"; // optional
...
import "index.css"
```

#### Customizing by applying overrides in your own stylesheets:

```css
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Round");

:root {
  --icon-font: "Material Icons Round";

  /* any overrides */
}
```

### Optional Flex/Grid Utility classes

To get lightweight utility classes for flex and grid, import the following module as well:

```css
@import url ("../node_modules/smpl-css/utilities.css");
```

## A Trivial Amount of Javascript

You can opt-in to use a very small amount (&lt; 0.4kb) of javascript to have:

- the ripple effect starting from click location
- viewport-aware menu contexts.

## Table Of Contents

### Surfaces

| Name              | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| [AppBar](#appBar) | Surface to contain relevant information, such as navigation    |
| [Paper](#paper)   | Element That denotes a section by visually containing it       |
| [Card](#card)     | Small, Visually contained sections that contain a single topic |

### Components

| Name                           | Description                                |
| ------------------------------ | ------------------------------------------ |
| [Accordions](#accordions)      | A collapsible panel                        |
| [Alerts](#alerts)              | Ways to notify users                       |
| [Buttons](#buttons)            | Interactive, clickable elements            |
| [Chips](#chips)                | Textual element representing a user choice |
| [Checkboxes](#checkboxes)      | A way to represent a yes/no option         |
| [File Uploads](#file-uploads)  | A way to upload files                      |
| [Icons](#icons)                | Visually significant symbols               |
| [Menus](#menus)                | Element with popover behavior on focus     |
| [Radio Button](#radio-buttons) | A way to select a single option            |
| [Tabs](#tabs)                  | Organizing related groups of content       |
| [Text Field](#text-fields)     | A text input for user interaction          |
| [Toggle](#toggles)             | A way to represent on/off                  |

### Utilities

| Name          | Description                                 |
| ------------- | ------------------------------------------- |
| [Flex](#Flex) | lightweight utility classes for CSS FlexBox |
| [Grid](#Grid) | lightweight utility classes for CSS Grid    |

### Customization

| Name                                | Description                                         |
| ----------------------------------- | --------------------------------------------------- |
| [Theming](#customize-design-tokens) | Creating your own theme by overriding design tokens |
| [Dark Mode](#dark-mode)             | How to implement dark mode                          |

## Surface Examples

### AppBar

Base Example:

```html
<div class="appbar">
  <p data-icon="menu" />
  <p class="flex-1 my-custom-font">My App</p>
  <p data-icon="contrast"></p>
</div>
```

| Options         | Usage                                  |
| --------------- | -------------------------------------- |
| Appear Floating | `<div class="appbar floating">`        |
| Floating/Mobile | `<div class="appbar floating mobile">` |

> [!NOTE]
> AppBar has `display: flex` on it. the example above uses utility classes, but it should be self explanatory.

### Paper

Base Example

```html
<section class="paper">...</section>
```

> [!NOTE]
> Elevation options should be used sparingly. If you are applying this everywhere, consider updating your --paper-shadow css variable.

| Options     | Usage                             |
| ----------- | --------------------------------- |
| Elevation 0 | `<div class="paper elevation-0">` |
| Elevation 1 | `<div class="paper elevation-1">` |
| Elevation 2 | `<div class="paper elevation-2">` |
| Elevation 3 | `<div class="paper elevation-3">` |
| Bordered    | `<div class="paper border">`      |

### Card

Base Example

```html
<article class="card">...</article>
```

> [!NOTE]
> Elevation options should be used sparingly. If you are applying this everywhere, consider updating your --paper-shadow css variable.

| Options     | Usage                            |
| ----------- | -------------------------------- |
| Elevation 0 | `<div class="card elevation-0">` |
| Elevation 1 | `<div class="card elevation-1">` |
| Elevation 2 | `<div class="card elevation-2">` |
| Elevation 3 | `<div class="card elevation-3">` |
| Bordered    | `<div class="card border">`      |

## Component Examples

### Accordions

Base Example:

```html
<div class="accordion-group">
  <details>
    <summary>My First Accordion</summary>
    <div>Contents</div>
  </details>
  <details>
    <summary>My Second Accordion</summary>
    <div>Contents</div>
  </details>
</div>
```

| Options       | Usage                                                           |
| ------------- | --------------------------------------------------------------- |
| Caret on left | `<div class="accordion-group left-marker">`                     |
| Divider style | Add class `divider` to `details`                                |
| Paper style   | Add class `paper` to `details`, (suggestion: add margin-bottom) |

### Alerts

Base Example:

```html
<div class="alert (error|info|warning|success)">My Alert information</div>
```

| Options       | Usage                                  |
| ------------- | -------------------------------------- |
| Error Alert   | `<div class="alert error">...</div>`   |
| Warning Alert | `<div class="alert warning">...</div>` |
| Info Alert    | `<div class="alert info">...</div>`    |
| Success Alert | `<div class="alert success">...</div>` |

### Buttons

- Buttons are natively styled, but also the class `btn` can be applied to any element.
- Buttons have ripple effects.

Base Example:

```html
<button>My Button</button>

<a href="#" class="btn">button-like</a>
```

| Options                | Usage                                                |
| ---------------------- | ---------------------------------------------------- |
| Contained Button       | `<element class="btn" />`                            |
| Outlined Button        | `<element class="btn outlined" />`                   |
| Icon Button            | `<element class="btn icon" data-icon="some_icon" />` |
| Floating Action Button | `<element class="fab"  />`                           |

### Chips

Base Example:

```html
<span class="chip">Chip</span>
```

> [!NOTE]
> Chips are color-mode agnostic, so when creating your own classes that reflect your palette, set background and color accordingly. utilize `var(--text-light)` and `var(--text-dark)` to appropriate backgrounds.

| Options                         |                   |
| ------------------------------- | ----------------- |
| Overriding background and color | see _Note_ above. |

### Checkboxes

Base Example:

```html
<label><input type="checkbox" class="checkbox" />My Checkbox</label>
```

| Options |     |
| ------- | --- |
| None    |     |

### File Uploads

Base Example:

```html
<label class="file-upload" style="width: 400px; text-align:center;">
  <input type="file" />
  <span data-icon="upload" />
  <p>File Upload</p>
</label>
```

| Options   |                                   |
| --------- | --------------------------------- |
| Customize | Add any elements within the label |

### Icons

Base Example:

```html
<span data-icon="plus" />
<!--No text-->
<span data-icon="folder">Icon Appears Before Text</span>
<span data-icon-after="file">Icon Appears After Text</span>
```

> [!NOTE]
>
> - The `[data-icon]` and `[data-icon-after]` attributes can be applied to (almost) any element.
> - If using material icon fonts, icon names can be found here: https://fonts.google.com/icons?icon.set=Material+Icons

| Options          |                                           |
| ---------------- | ----------------------------------------- |
| Just the Icon    | `<span data-icon="icon_name" />`          |
| Icon Before Text | `<span data-icon="icon_name">Text</span>` |
| Icon After Text  | `<span data-icon="icon_name">Text</span>` |

### Radio Buttons

Base Example:

```html
<label><input type="checkbox" class="checkbox" />My Checkbox</label>
```

| Options |     |
| ------- | --- |
| None    |     |

### Tabs

Base Example:

```html
<div className="tabs">
  <label>Tab 1<input type="radio" name="tab" /></label>
  <label>Tab 2<input type="radio" name="tab" /></label>
  <label>Tab 3<input type="radio" name="tab" /></label>
</div>
```

- Note: If you have too many tabs, they will auto-scroll x.

| Options |     |
| ------- | --- |
| None    |     |

### Text Field

Base Examples:

```html
<fieldset class="text-field (outlined|standard|simple)">
  <legend>Title</legend>
  <input type="text" placeholder="" />
</fieldset>
```

> [!NOTE] > `placeholder=""` is required for transform effects to work properly.

| Options  |                                                                                |
| -------- | ------------------------------------------------------------------------------ |
| Outlined | input is outlined: `<fieldset class="text-field outlined">...`                 |
| Standard | input is underlined `<fieldset class="text-field outlined">...`                |
| Simple   | legend is static, above the input: `<fieldset class="text-field outlined">...` |

### Toggle

```html
<label><input type="checkbox" class="toggle" />My Toggle</label>
```

| Options |     |
| ------- | --- |
| None    |     |

## Utility Examples

### Flex

Flex Utility classes allow simple use of the flexbox system without needing to develop your own styles, or include other design systems.

some classes leverage a common breakpoint for large screens.

| Class               | Explanation                                       |
| ------------------- | ------------------------------------------------- |
| `flex`              | display: flex                                     |
| `flex col`          | flex-direction: column                            |
| `flex col rev`      | flex-direction: column-reverse                    |
| `flex row`          | flex-direction: row                               |
| `flex row rev`      | flex-direction: row-reverse                       |
| `flex items-center` | align-items: center                               |
| `flex items-end`    | align-items: flex-end                             |
| `flex items-start`  | align-items: flex-start                           |
| `flex center`       | justify-content: center                           |
| `flex end`          | justify-content: flex-end                         |
| `flex start`        | justify-content: flex-start                       |
| `flex space`        | justify-content: space-between                    |
| `flex wrap`         | flex-wrap: wrap                                   |
| `flex lg:row`       | flex-direction: row (min-width: 769px)            |
| `flex lg:row rev`   | flex-direction: row-reverse (min-width: 769px)    |
| `flex lg:col`       | flex-direction: column (min-width: 769px)         |
| `flex lg:col rev`   | flex-direction: column-reverse (min-width: 769px) |
| `flex-1`            | flex: 1                                           |
| `flex-0`            | flex: 0                                           |
| `self-center`       | align-self: center                                |

### Grid

Utilizes a 12-column grid with common columns spans.

some classes leverage a common breakpoint for large screens.

| Class       | Explanation                                                        |
| ----------- | ------------------------------------------------------------------ |
| `grid`      | display: grid; grid-template-columns: repeat(12, 1fr); gap: 0.5rem |
| `gap-sm`    | gap: 0.25rem                                                       |
| `gap-md`    | gap: 0.5rem                                                        |
| `gap-lg`    | gap: 1rem                                                          |
| `gap-xl`    | gap: 2rem                                                          |
| `col-12`    | grid-column: span 12                                               |
| `col-6`     | grid-column: span 6                                                |
| `col-4`     | grid-column: span 4                                                |
| `col-3`     | grid-column: span 3                                                |
| `lg:col-12` | grid-column: span 12 (min-width: 769px)                            |
| `lg:col-6`  | grid-column: span 6 (min-width: 769px)                             |
| `lg:col-4`  | grid-column: span 4 (min-width: 769px)                             |
| `lg:col-3`  | grid-column: span 3 (min-width: 769px)                             |

## Customize Design Tokens

A full list of overridable design tokens, with default values included.

Just place this into your application's initial css file, and the tokens are available anywhere.

```css
:root {
  /** Backgrounds **/
  --bg-main: #fafafa;
  --bg-surface: #ffffff;
  --bg-surface-hover: #e2e2e2;
  --bg-light: #fff;

  --border-primary: #d2d2d2;
  --text-primary: #000;
  --text-contrast: #fff;
  --text-light: #fff;
  --text-dark: #000;

  --hover-grow-scale: 1.01;
  --transition-interaction: 0.15s;
  --transition-standard: 0.35s;
  --transition-ripple: 0.75s;

  --elevation-0: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  --elevation-1: 0px 2px 5px -1px rgba(0, 0, 0, 0.25);
  --elevation-2: 0px 4px 10px -2px rgba(0, 0, 0, 0.35);
  --elevation-3: 0px 6px 15px -5px rgba(0, 0, 0, 0.45);

  /* Surfaces */
  --section-radius: 8px;
  --section-border-width: 0;
  --section-padding-x: 16px;
  --section-padding-y: 16px;

  --paper-shadow: var(--elevation-1);
  --paper-margin-bottom: 8px;

  --appbar-floating-margin-x: 0.5rem;
  --appbar-floating-margin-y: 0.5rem;

  /** Tab Specific **/
  --tab-padding-x: 24px;
  --tab-padding-y: 8px;
  --tab-border-width: 2px;
  --tab-border-color: var(--border-primary);

  /* Elements are inputs, buttons, checkboxes, tabs, etc.*/
  --element-radius: 8px;
  --element-elevation: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  --element-primary: #3030ce;
  --element-hover: #2020a0;
  --element-highlight: #e9e9e9;
  --element-inactive: #888;
  --element-shadow: var(--elevation-1);
  --element-font-size: 1rem;

  /* Chips */
  --chip-radius: 16px;
  --chip-padding-x: 8px;
  --chip-padding-y: 4px;
  --chip-border: #888;

  /** Fab **/
  --fab-border-radius: 50rem;
  --fab-padding-x: 16px;
  --fab-padding-y: 16px;

  /* Text Field Specific */
  --input-container-padding-x: 0;
  --input-container-padding-y: 8px;
  --input-padding-x: 8px;
  --input-padding-y: 4px;
  --input-border: #888;

  /* Icons */
  --icon-font: "Material Icons";
  --icon: #888;

  /* Emphasis Colors */
  --emphasis-info: blue;
  --emphasis-positive: green;
  --emphasis-negative: red;
  --emphasis-warning: orange;
}
```

### Dark Mode

Although SMPL-CSS doesn't come packaged with a dark mode, you can create your own Dark Mode by overriding current design tokens:

```css
[data-theme="dark"] {
  /* color-specific design tokens */
}
```
