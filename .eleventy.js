const translations = require('./translations.json');

module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "lang",
      output: "_site"
    }
  };
};

