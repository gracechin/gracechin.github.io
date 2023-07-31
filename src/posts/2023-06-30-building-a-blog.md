---
title: Building A Blog With Eleventy
date: 2023-06-30
tags:
  - dev
  - blog
  - 11ty
---

Yay! I have finally deployed my blog using [11ty](https://www.11ty.dev/).

---

After [my previous attempt on creating a blog using WordPress](/posts/2023-06-26-to-wordpress-or-not-to-wordpress/), I retreated back to my comfort zone of using [Jekyll](https://jekyllrb.com/). It was great to gain back flexibility without having to worry about paying. Half-way into recreating my blog in Jekyll, I remembered Lynn mentioning 11ty (_Eleventy_) in one of her posts and decided to look it up. After seeing such positive reviews from her and others, I decided to give 11ty a try.

[11ty](https://www.11ty.dev/) is impressively created and maintained by [Zach Leatherman](https://www.zachleat.com/). Like Jekyll, it is a static site generator. While Jekyll was released in 2008, 11ty was released in 2018. Unlike Jekyll, which is built with Ruby (a language that I don't know), 11ty is built with JavaScript (a language I am more familiar with).

Building a blog with 11ty was quite straightforward. I followed their [6-minute video tutorial on YouTube](https://www.youtube.com/watch?v=kzf9A9tkkl4&ab_channel=Eleventy). Unlike Jekyll, there was no default structure that I had to start with when starting a new project. The structure was much more customisable and can be built from scratch. This made it easier to piece out the blog from my Jeckyll blog. Also, since I only have four blog posts, I didn't need to implement any automation for migrating from Jeckyll.

Here are somethings I learnt about developing with 11ty:

### Debugging

Probably one of the most useful things is how to debug parsed frontmatter objects. There were many scenarios where things were not showing up because my referencing of frontmatter data was just wrong. Adding a `debug` filter in the config file (`.eleventy.js`) certainly helped!

```js
// .eleventy.js
const inspect = require("util").inspect;
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", (content) => {
    return `<pre>${inspect(content)}</pre>`;
  });
};
```

### Syntax Highlighting

To support syntax highlighting, I installed a [syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/), which has a number of [supported languages](https://prismjs.com/#supported-languages).

```shell
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

I added it to the config file,

```js
//.eleventy.js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```

then selected and added a [PrismJS](https://prismjs.com/) theme CSS.

```html
<link
  href="https://unpkg.com/prismjs@1.20.0/themes/prism-solarizedlight.css"
  rel="stylesheet"
/>
```

### Excerpts

To give a mini preview of blog posts, I wanted to provide excerpts for each post. The excerpts were defined by:

1. Setting the front matter parsing option so that `excerpt` is `true`, and

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });
};
```

2. Adding a divider (`---`) to the each post's markdown, where the content above the divider becomes the excerpt.

```yaml
title: This is the title of the blog
date: Date of blog

---
This is going to be the excerpt. Below is the added divider to define the excerpt.
---
This is a continuation of the blog post and is not going to be in the excerpt.
```

To parse the excerpt such that markdown tags are rendered, I followed this [Github issue's comment](https://github.com/11ty/eleventy/issues/1380#issuecomment-698457560) (Much thanks to @jonathanyeong for reporting the issue, @revelt for providing a solution, and everyone else who gave their input!).

I added another filter,

```js
// .eleventy.js
const markdownIt = require("markdown-it");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ html: true }).render(content);
  });
};
```

and changed the template.

```html
post.data.page.excerpt | md
```

### Tags

Following [11ty's documentation](https://www.11ty.dev/docs/quicktips/tag-pages/), implementing tags was reasonably straightforward. Tags for each post were added to the front matter.

```yaml
---
title: Building A Blog With Eleventy
date: 2023-06-30
tags:
  - dev
---
```

A sample pagination template (`tags.njk`) in the documentation was used to generate tag pages that showed relevant posts for each tag. It was my first time using [Nunjucks](https://mozilla.github.io/nunjucks/), "_a rich and powerful templating language for JavaScript_". While it's new to me, interestingly the [UK government uses Nunjucks](https://frontend.design-system.service.gov.uk/use-nunjucks/) (the more you know!).

### What's next?

Now that I have a separate site for my blog, I will need to update my portfolio website to reference it. There's definitely still more that I want to add and learn (e.g. RSS subscription option, eventually a search function as I accumulate more posts, maybe some sort of analytics...), but for now, I am happy with what I have done so far.
