# 🍽️ Odin Recipes

A small, animated recipe website built as part of **The Odin Project — Foundations** course. What started as a basic HTML/CSS exercise has grown into a full mini design system: a warm "kitchen notebook" look, complete with taped-in photos, stamped stat cards, and scroll-triggered animations.

**[View the recipes →](index.html)**

## Recipes included

- 🍝 Classic Lasagna
- 🍕 Homemade Pizza
- 🥞 Fluffy Pancakes

## Features

- **Cookbook-inspired design** — cream paper background, serif display type (Fraunces), and a rust/olive/gold accent palette instead of a generic template look
- **"Taped photo" treatment** — recipe images look pinned into the page with washi-tape corners
- **Stamped stat cards** — prep time, cook time, servings, and difficulty for each recipe
- **Scroll animations** — sections, ingredients, and steps fade in as you scroll, with staggered timing
- **Count-up numbers** — stat values animate up from 0 when they come into view
- **Accessible by default** — visible keyboard focus states, and all animation respects `prefers-reduced-motion`
- **Fully responsive** — works down to mobile screen sizes

## Folder structure

```
odin-recipes/
├── index.html
├── style.css
├── script.js
├── README.md
└── recipes/
    ├── lasagna.html
    ├── pizza.html
    └── pancakes.html
```

## Skills demonstrated

- Semantic HTML structure (headings, lists, sections, links between pages)
- CSS custom properties, gradients, and a reusable design token system
- CSS animations and transitions (keyframes, staggered delays, hover states)
- Vanilla JavaScript (`IntersectionObserver` for scroll reveals and count-up counters)
- Responsive design with media queries
- Git and GitHub for version control

## Built with

- HTML5 & CSS3
- Vanilla JavaScript (no frameworks)
- [Google Fonts](https://fonts.google.com/): Fraunces, Work Sans, Space Mono

## Author

Made with ❤️ by **Sayan Banerjee**

© 2026 Odin Recipes. All Rights Reserved.