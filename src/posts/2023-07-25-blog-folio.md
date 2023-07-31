---
title: Switching To A Blog-folio
date: 2023-07-25
tags:
  - dev
  - blog
  - this website
---

I updated my web portfolio to become more blog-orientated.

---

Recently I read an article, ["Why your next Design Portfolio should be a Blog"](https://medium.com/portfolio-principles/why-your-next-design-portfolio-should-be-a-blog-e5d801750b1d) by Martijn van de Broeck, who argued that design portfolios should be a blog because:

1. Blogs focus on the most relevant content.
2. Readers can engage with blogs.
3. Blogs reveal personality.
4. While portfolios are design driven, blogs are content driven.

I was particularly convinced by the notion of recording our imperfect and bumpy journey. While I have been told that portfolios should only present a carefully-curated set of polished projects, I believe that it is the wild messy journey in and out of projects that reveal our individuality and personality. It may also be a form of inspiration to others. Additionally, the commitment to documentation would no doubt aid memory and personal reflection. All of this led me to updating this website again with the aim of it becoming more of a _blog-folio_.

---

# What did I change?

### Using 11ty

I took this opportunity to migrate my website to use [11ty](https://www.11ty.dev/). After my last success in [using 11ty for my blog](/posts/2023-06-30-building-a-blog), I decided I would use 11ty for my blog-folio. This was quite straightforward to do since my blog was already using 11ty.

### Merging projects and blog

Previously, my portfolio had a separate projects and blog section. The projects section contained project pages. Meanwhile, the blog contained blog post pages. The project pages and post pages were separated such that the blog was hosted on a separate website and had a different URL altogether.

![Projects page of Grace Chin's website](/assets/2023-07-25/projects_page.png)

<figcaption>Screenshot of my old projects section taken 25/07/2023</figcaption>

![Grace Chin's Blog](/assets/2023-07-25/blog.png)

<figcaption>Screenshot of my old blog taken 25/07/2023</figcaption>

In making my site more blog-orientated, I converted my project pages into blog posts. To do this, I converted my Jeckyll project markdowns into 11ty blog post markdowns, and stored them all under one "posts" directory (as seen in the [source code](https://github.com/gracechin/gracechin.github.io)). This meant that now the blog posts and projects posts would live together and can be managed conveniently in the same way.

### Categorising posts using tags

To organise the posts, tags were used. This allowed for the homepage to showcase recent posts of selected categories (e.g. projects).

![Home page list of posts in Grace Chin's website](/assets/2023-07-25/categorised_posts.png)

<figcaption>Screenshot of homepage featuring categories of posts using tags taken 25/07/2023</figcaption>

### Other little stuff

Apart from the changes already mentioned, I also changed some minor things here and there (e.g. a hidden surprise ✨). But that's it for now!
