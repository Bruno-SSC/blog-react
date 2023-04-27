const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
      /* components */
      "@components": path.resolve(__dirname, "src/components/"),
      "@headerCP": path.resolve(__dirname, "src/components/header"),
      "@mainCP": path.resolve(__dirname, "src/components/main"),
      /* assets */
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@headerST": path.resolve(__dirname, "src/assets/styles/header"),
      "@mainST": path.resolve(__dirname, "src/assets/styles/main"),
    },
  },
};
