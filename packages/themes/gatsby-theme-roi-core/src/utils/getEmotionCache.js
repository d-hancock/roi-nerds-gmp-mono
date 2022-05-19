import createCache from "@emotion/cache"

function getEmotionCache() {
  return createCache({ key: "css" })
}

export default getEmotionCache
