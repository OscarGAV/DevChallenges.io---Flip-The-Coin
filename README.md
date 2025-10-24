<!-- Please update value in the {}  -->

<h1 align="center">DevChallenges.io---Flip-The-Coin | devChallenges</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/flip-the-coin" target="_blank">Flip The Coin</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://oscargav.github.io/DevChallenges.io---Flip-The-Coin/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/OscarGAV/DevChallenges.io---Flip-The-Coin">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/flip-the-coin">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)

<!-- OVERVIEW -->

## Overview

[![Captura-de-pantalla-2025-10-20-100710.png](https://i.postimg.cc/Hn5yJK7L/Captura-de-pantalla-2025-10-20-100710.png)](https://postimg.cc/K3Gzw0fX)

<!--
Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- What have you learned/improved?
- Your wisdom? :)
-->

### What I learned

During this project, I reinforced and acquired new concepts about frontend web development:

**1. CSS 3D animations**
I implemented the coin flip animation using `rotateY` and `rotateX` in keyframes. This taught me how to create realistic 3D effects without the need for external libraries.

```css
@keyframes flip {
    0% {
        transform: rotateY(0) rotateX(0);
    }
    50% {
        transform: rotateY(180deg) rotateX(10deg);
    }
    100% {
        transform: rotateY(360deg) rotateX(0);
    }
}
```

**2. Event and state management**
I learned how to control the state of the application using variables (isFlipping) to prevent the user from clicking multiple times during the animation, thereby improving the user experience.

**3. Responsive design**
I implemented media queries to adapt the design to mobile devices, adjusting font sizes, coin dimensions, and button padding.


### Useful resources

- [MDN - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - Excelente documentación sobre transformaciones 3D. Me ayudó a entender cómo funcionan `rotateX` y `rotateY` en las animaciones.

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) - Guía completa sobre keyframes y animaciones. Fundamental para crear la animación fluida del coin flip.

- [JavaScript.info - Event listeners](https://javascript.info/introduction-browser-events) - Recurso muy útil para entender cómo funcionan los event listeners y la propagación de eventos en el DOM.

### Built with

- HTML5
- JavaScript
- CSS3

## Features

- Create a web page that allows users to flip a virtual coin.

- Display the result of the coin flip (heads or tails) on the page.

- Add a button that triggers the coin flip when clicked.

- Style the web page according to the design.

- Use JavaScript to handle the logic of the coin flip and update the page accordingly.

- Deploy the website to make it accessible for everyone.

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.

## Author

- Website [https://oscargav.github.io/flipping-coin-simulator/](https://oscargav.github.io/flipping-coin-simulator/)
- GitHub [@OscarGAV](https://github.com/OscarGAV)
