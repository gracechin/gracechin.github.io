---
layout: page
title: 2023 Website revamp for a new start - Part 1
date: 2023-05-01
---

Since I am switching jobs and countries, it's probably a good time to revamp my website.

After looking at several inspiring websites, I decided that for this revamp, I wanted to express more of my personality as well as make it fun! I was mainly inspired by [lynnandtonic's website](https://lynnandtonic.com/), and have been fangirling about it ever since finding it. Not only does it showcase really cool and fun projects, but it also impressively showcases annual iterations of the website in the Archive](https://lynnandtonic.com/archive/) page, which I find motivating and encouraging. I am especially wowed by the wild and imaginative digital easter eggs on the websites (e.g., re-sizing the window to show animations, dragging and dropping icons to change the theme of components).

Without further ado, here is how I revamped my website.

### The illustrated cover

Highly inspired by [lynnandtonic's 2018 website](https://lynnandtonic.com/archive/2018/), which features a Bob's burger-styled illustration of lynn in her room, I decided to sketch myself in our (Dan + my) HK home in the style of [LittleDigits' illustration](https://twitter.com/little_digits/status/1326339039197360128) of Hilda from the Netflix TV Series _Hilda_. I really liked the idea of paying homage to our humble home in HK seeing as we would be moving away to the UK soon.

Since I do not have a drawing tablet/pad, the illustrations were drawn using my mousepad in Figma. I roughly traced a photo of our home and a sketch of myself.

![2023-website-sketches.jpg](/assets/posties/2023-website-sketches.jpg)
_Sketches of myself using pen, pencil, and paper_

### Home page fun elements

To welcome visitors, I thought it would be cute to have a little animation of myself saying hello. The animation was created by using `@keyframes` CSS to run through the six SVG images that make up the frames of the animation. To prevent lagging in the animation, I had to preloaded the images.

![2023-website animation frames of me](/assets/posties/2023-website-drawings-of-me
.png)
_Animation frames of myself created using Figma variants_

For the digital easter egg, my plan was to use the light switch of our HK home to toggle the light/dark mode of the website. It was very satisfying to create the light switch using CSS ([see my CodePen](https://codepen.io/gracechin/pen/abaamgJ)), since I am new to drawing with CSS. As it was my first time implementing dark mode, to toggle the theme of the website, I followed [Dmitry Borody's post about theming web applications with SASS](https://medium.com/@dmitriy.borodiy/easy-color-theming-with-scss-bc38fd5734d1), which I found rather clever!

<div class="video-container">
    <iframe src="/assets/posties/2023-website-light-switch.mp4" frameborder="0" allowfullscreen></iframe>
</div>

_Me saying hello and the toggling of the light/dark mode using the light switch_

### See you next time!

That's pretty much all for this time's revamp! I will probably incrementally add more fun interactions to this website later on, but for now, this is a great start. See you for the part 2!
