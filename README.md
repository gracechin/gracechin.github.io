# Grace Space

## To Setup

Install the packages required.

```shell
npm install
```

## To Develop

```shell
npm start
```

## To Deploy

This website is hosted using [Github Pages](https://pages.github.com/). The changes pushed to `master` branch are automatically built and deployed using `.github/workflows/eleventy_build.yml` as [instructed](https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/). A deployment SSH key (a.k.a [deploy key](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-create-ssh-deploy-key)) was used for authentication. `gh-pages` branch is used to deploy built source code.

## Implementation notes

- Output directory by default is `_site`.
- Code snippets are styled using [PrismJS](https://prismjs.com/) syntax highlighting solarised light theme. Here are the [languages supported by PrismJS](https://prismjs.com/#supported-languages). To stop liquid from rendering when showing a code block or snippet use `{% raw %} ... {% endraw}` tags.
- `.nojekyll` is used to tell Github that this is not a Jekyll project.
- RSS feeder is implemented using `@11ty/eleventy-plugin-rss`, and `feed.njk` as instructed in [a blog post](https://conr.dev/posts/2022/07/rss-for-11ty/).
