# gracechin.github.io

Source code of my portfolio website, which is created using [Github Pages & Jekyll][gh-pages-and-jekyll].

## Prerequisite

Ensure ruby version is `3.1.2` by running `ruby -v`.

If not, use `chruby` and `ruby-install` with Homebrew to get the desired ruby version as mentioned in [Jeckll's installation docs](https://jekyllrb.com/docs/installation/macos/).

Automatically configure your shell to use ruby version:

```
echo "chruby ruby-3.1.2" >> ~/.zshrc # run 'chruby' to see actual version
```

## To Develop

To serve, open, and live reload the project:

```
bundle exec jekyll serve -l -o
```

## To Deploy

Push to production branch - `main` in Github

## Implementation Notes

- `_includes`, `_layouts`, and `_sass` folders are copies of the bundled gem minima theme folders. The copies are used to overwrite the original built-in files. To find the original files in Mac finder, run `open $(bundle info --path minima)`.
  - `_includes` > template HTML component files
  - `_layouts` > template HTML page files
  - `_sass` > [SASS](https://sass-lang.com/) `.scss` files
- `_projects` folder holds the markdown contents of the showcased projects
- `_projects_archived` folder holds hidden projects
- `_config.yml` is the Jekyll configuration file.
- `index.md` and `projects.md` are the markdown contents of the homepage and projects page
