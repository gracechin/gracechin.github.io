# gracechin.github.io

This repository contains the source code of my website, which is created using [Github Pages & Jekyll][gh-pages-and-jekyll].

## Prerequisite

Ensure ruby version is `3.1.2` by running `ruby -v`.

If not, use `chruby` and `ruby-install` with Homebrew to get the desired ruby version as mentioned in [Jeckll's installation docs](https://jekyllrb.com/docs/installation/macos/).

Automatically configure your shell to use ruby version:

```
echo "chruby ruby-3.1.2" >> ~/.zshrc # run 'chruby' to see actual version
```

## To develop

To serve, open, and live reload the project:

```
bundle exec jekyll serve -l -o
```
