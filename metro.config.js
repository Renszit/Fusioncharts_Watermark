const { getDefaultConfig } = require('@expo/metro-config');
module.exports = (async () => {
    const {
      resolver: { sourceExts, assetExts }
    } = await getDefaultConfig(__dirname)
    return {
      transformer: {
        defaultConfig: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false
          }
        })
      },
      resolver: {
        sourceExts,
        assetExts: [...assetExts, 'fcscript']
      }
    }
  })()