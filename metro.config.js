const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { assetExts, sourceExts } = config.resolver;

  return {
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
  };
})();
