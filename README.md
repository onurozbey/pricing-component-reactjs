# Frontend Mentor - Pricing Component with Toogle /w React.js

This is a solution to the ["Pricing Component with Toggle" challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC).

<img src="./src/images/screenshots/desktop-hover.png" width="720" />.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

### Screenshot

#### Desktop (annually toogle)

<img src="./src/images/screenshots/desktop-annually.png" width="720" />

#### Desktop (monthly toogle)

<img src="./src/images/screenshots/desktop-monthly.png" width="720" />

#### Mobile (annually toogle)

<img src="./src/images/screenshots/mobile-annually.png"/>

#### Mobile (monthly toogle)

<img src="./src/images/screenshots/mobile-monthly.png"/>

### Links

- Solution URL: [GitHub](https://github.com/onurozbey/pricing-component-reactjs)
- Live Site URL: [Vercel](https://pricing-component-reactjs-bice.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS preprocessor TailwindCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/).js library

### What I learned

I had no idea about how to create a "toggle" component. And now, with the code below, I can create and manipulate one.

```jsx
const [annually, setAnnually] = useState(false);

<div className="toggle lg:mb-10">
  <label className="name">Annually</label>
  <input
    type="checkbox"
    className="checkbox"
    id="checkbox"
    checked={annually}
    onChange={() => setAnnually(!annually)}
  />

  <label htmlFor="checkbox" className="label">
    <div className="ball"></div>
  </label>

  <label className="name">Monthly</label>
</div>;
```

### Useful resources

- [TailwindCSS](https://tailwindcss.com/docs/) - This helped me for styling flexible.

## Author

- GitHub - [onurozbey](https://github.com/onurozbey/)
- Frontend Mentor - [@onurozbey](https://www.frontendmentor.io/profile/onurozbey)
