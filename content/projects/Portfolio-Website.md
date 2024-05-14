---
title: Portfolio Website
subtitle: Website Creation and Hosting
created: 1999-03-01
cover: portfolio-projects-cover.png

goal: Frontend-only project focused on showcasing my work.
skills:
  - Web Development
  - UI Design
tools:
  - Vue.js
  - Typescript
  - Nuxt
duration: 1 month, still being updated

github: portfolio
---

### What was the workflow?

First, I had rough sketches and ideas that I transformed into a series of greyscale wireframes using Figma. Having this basic idea layed out, but being not yet completely satisfied with it, I moved on to finding a color scheme I found most suitable to represent me as a creator - simple light and grey with a yellow accent color. 

::lightbox-images{:items='["figma-2.png"]'}
::
::lightbox-images{:items='["figma-1.png", "figma-3.png"]'}
::

From there, I started laying out wireframes that, now being colored, felt more like a finished layout and gave me a better understanding of what the final website would look like. Once I refined my vision, I kept duplicating the layouts and making little tweaks and experimenting, at the same time also implementing the codebase.

::lightbox-images{:items='["figma-4.png", "figma-5.png"]'}
::

For this project, I chose Vue.js 3, a Javascript framework that I was already comfortable with, as well as Vuetify with its visual component library, which I also had experience with and that I was certaing will allow me to recreate my vision as closely as possible. After some research, I also chose Nuxt.js with its Nuxt Content plugin, as it allowed me to create a series of articles, each of which contained important information on the project it was presenting. It allowed me to write and save these articles in `.md` files, as well as insert a custom lightbox component that allowed me to insert images into each article anywhere in its text.

During the development, I looked at many portfolios made by other game developers and programmers, so that I know what people usually expect when they open someone's portfolio. I also put a lot of thought into coming up with ways to peek the interest of the person who would potentially look at my project page. The best way to do it that I found was using videos to showcase the results of my work, similar to the portfolio of a game programmer [Tomas Wallin](https://tomaswallin.se/#/). 

Thanks to the research on other people's portfolio, I found a service called Vercel, which allowed me to deploy and host the website.

