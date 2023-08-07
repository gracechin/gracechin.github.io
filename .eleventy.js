const sass = require("sass");
const inspect = require("util").inspect;
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Copy files to output directory
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy("src/assets/");

  // Support SASS styling: https://www.11ty.dev/docs/languages/custom/#example-add-sass-support-to-eleventy
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent);
      return async (_data) => result.css;
    },
  });

  // Formatting
  eleventyConfig.addFilter("formatTags", (tags) => {
    return tags.slice(1).map((t) => " #" + t);
  });
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // For debugging
  eleventyConfig.addFilter("debug", (content) => {
    return `<pre>${inspect(content)}</pre>`;
  });

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Parse front matter for post excerpts
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

  // Parse to markdown
  eleventyConfig.addFilter("md", (content = "") => {
    return markdownIt({ html: true }).render(content);
  });

  // Strip HTML paragraph tags
  eleventyConfig.addFilter("stripPara", (content = "") => {
    return content.replace("<p>", "").replace("</p>", "");
  });

  // RSS feed
  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
    },
  };
};
