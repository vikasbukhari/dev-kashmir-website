// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const withOffline = require("next-offline");
const withPlugins = require("next-compose-plugins");
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

module.exports = withPlugins([[withMdxEnhanced(mdxConfig)], [withOffline]]);
