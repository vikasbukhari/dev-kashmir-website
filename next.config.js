// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const optimizedImages = require("next-optimized-images");

const mdxConfig = {
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
};

module.exports = withPlugins([
  [withMdxEnhanced(mdxConfig)],
  [
    withPWA,
    {
      pwa: {
        dest: "public",
      },
    },
  ],
  [
    optimizedImages,
    {
      optimizedImagesInDev: true,
    },
  ],
]);
