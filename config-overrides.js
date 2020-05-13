const {
  override,
  addLessLoader,
  addWebpackAlias,
  useBabelRc,
} = require("customize-cra");
const { addGlobalLess, copyDirectory } = require("./utils");
const aliases = require("./aliases");

const lessFiles = ["global.less", "colors.less", "layout.less", "media.less"];
module.exports = override(
  useBabelRc(),
  addLessLoader({
    javascriptEnabled: true,
    modules: true,
    globalVars: { theme: aliases.theme },
  }),
  addWebpackAlias(aliases),
  addGlobalLess(lessFiles),
  copyDirectory([{ context: ".", from: "public/images", to: "static/images" }])
);
