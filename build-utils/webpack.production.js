module.exports = () => {
  return {
    mode: "production",
    output: {
      filename: "tittle.min.js",
      library: "tittle",
      libraryTarget: "window"
    }
  };
};
