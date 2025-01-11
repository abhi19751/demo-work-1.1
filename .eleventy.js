const translations = require('./translations.json');

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("translations", translations);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
