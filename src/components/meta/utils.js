const normalizeWpSiteMeta = (data) => {
  const meta = { ...data.options } // deep-copy

  meta.socialImage =
    meta.socialImage && meta.socialImage.localFile
      ? meta.socialImage.localFile.url
      : undefined

  meta.ogImage =
    meta.ogImage && meta.ogImage.localFile
      ? meta.ogImage.localFile.url
      : undefined

  meta.twitterImage =
    meta.twitterImage && meta.twitterImage.localFile
      ? meta.twitterImage.localFile.url
      : undefined

  return meta
}

const normalizeWpPageMeta = (data) => {
  const acf = data.acf || {}

  const lang = acf.lang || undefined
  const title = acf.title || data.title || data.name || undefined
  const titleOverridePattern = acf.titleOverridePattern || undefined
  const description =
    acf.description || data.content || data.description || undefined
  const socialImage =
    (acf.socialImage && acf.socialImage.localFile
      ? acf.socialImage.localFile.url
      : undefined) ||
    (data.featured_media && data.featured_media.localFile
      ? data.featured_media.localFile.url
      : undefined) ||
    undefined

  const robotsNoIndex = acf.robotsNoIndex || undefined
  const robotsNoFollow = acf.robotsNoFollow || undefined

  const ogType = acf.ogType || undefined
  const ogTitle = acf.ogTitle || title || undefined
  const ogDescription = acf.ogDescription || description || undefined
  const ogImage =
    acf.ogImage && acf.ogImage.localFile
      ? acf.ogImage.localFile.url
      : socialImage

  const twitterTitle = acf.twitterTitle || title || undefined
  const twitterDescription = acf.twitterDescription || description || undefined
  const twitterCreator = acf.twitterCreator || undefined
  const twitterImage =
    acf.twitterImage && acf.twitterImage.localFile
      ? acf.twitterImage.localFile.url
      : socialImage

  const meta = {
    lang,
    title,
    titleOverridePattern,
    description,
    socialImage,
    robotsNoIndex,
    robotsNoFollow,
    ogType,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterCreator,
  }

  Object.keys(meta).forEach(
    (key) => meta[key] === undefined && delete meta[key]
  )

  return meta
}

export { normalizeWpSiteMeta, normalizeWpPageMeta }
