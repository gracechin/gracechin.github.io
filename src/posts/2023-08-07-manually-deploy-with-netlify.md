---
title: Why I Manually Deploy Using Netlify
date: 2023-08-07
tags:
  - Netlify
  - GitHub
  - dev
---

Recently, I have been manually deploying my projects using [Netlify](https://www.netlify.com/).

---

# Why _Netlify_?

Since I was first introduced to Netlify, I have been a fan of it due to the following:

1. **Amazing user experience** - It is user-friendly and enjoyable to work with. They even have a fun matching game that keeps you entertained while waiting for your project to deploy.
2. **Effortless connection with GitHub** - It can connect with multiple GitHub repositories and can even support continuous deployment. This means that any new code pushed to the main branch can be automatically built and deployed, streamlining the development process.
3. **Allows for customisations** - For instance, you can customise the domain name of your site, as long as it ends with ".netlify.app". This allows you to establish a unique online presence tailored to your needs.
4. **Largely free with generous features** - With the free package, you can deploy up to 500 sites and enjoy 100 GB/month bandwidth, allowing you to accomplish a lot without incurring additional costs.

# Why do I deploy manually?

However, despite the convenience of Netlify's continuous deployment, I have found a limitation with the Starter package that concerns me – the 300 build minutes per month restriction. Similar to [Yan's experience](https://eugeneyan.com/writing/netlify-back-to-github-pages/), as someone who frequently tweaks things, I can imagine that 300 minutes won't last long if every Git `push` triggers a build and deployment. Consequently, to optimise my build minutes, I have chosen to manually deploy instead.

# How I deploy manually?

To manually deploy a Netlify site, I first reconfigure the build settings for the site's build status to **"stopped builds"**. This ensures that Netlify no longer automatically triggers builds and deployments whenever new code is pushed to the main branch.

Next, I use Netlify's command line interface (CLI) to build and deploy my site. To setup Netlify CLI, I followed [Netlify's documentation](https://docs.netlify.com/cli/get-started/).

From the terminal, within my site's repository, I link the local repository and the configured Netlify site:

```shell
netlify link
```

To **build** the site locally:

```shell
netlify build
```

To **deploy and preview** the site via a website draft URL:

```shell
netlify deploy
```

To **deploy the site on production**:

```shell
netlify deploy --prod
```

And that's it!

Following these steps, I can manually control the build and deployment process of my Netlify sites.

# Reference

Yan, Ziyou. (Oct 2020). _Why I switched from Netlify back to GitHub Pages._ eugeneyan.com. [https://eugeneyan.com/writing/netlify-back-to-github-pages/](https://eugeneyan.com/writing/netlify-back-to-github-pages/).
