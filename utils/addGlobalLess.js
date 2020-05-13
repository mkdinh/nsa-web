const src = require("./src");

module.exports = (files) => (config) => {
  const theme = src("theme").replace(/\\/g, "/");

  // generate import statement
  const importStatements = files.reduce((statements, file) => {
    const importStatement = `@import '${theme}/${file}'; \n`;
    statements += importStatement;
    return statements;
  }, "");

  const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf))
    .oneOf;

  // Get module scss loader
  const lessLoaders = loaders.filter(
    (l) => l.test && ".module.less".match(l.test)
  );

  // transform scss content to include import statement
  lessLoaders.forEach((loader) => {
    if (loader.use) {
      loader.use.push({
        loader: "text-transform-loader",
        options: {
          prependText: importStatements,
        },
      });
    }
  });

  return config;
};
