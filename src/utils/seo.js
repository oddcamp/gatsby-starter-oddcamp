export const defaultSeoObject = wp => {
  const { acf } = wp

  const title = acf.page_meta_title || wp.title || wp.name

  const description = acf.page_meta_description || wp.content || wp.description

  const socialImage =
    (acf.page_meta_social_image && acf.page_meta_social_image.localFile
      ? acf.page_meta_social_image.localFile.url
      : undefined) ||
    (wp.featured_media && wp.featured_media.localFile
      ? wp.featured_media.localFile.url
      : undefined) ||
    undefined

  return {
    lang: acf.page_meta_lang,

    title: title,

    titleOverridePattern: acf.page_meta_title_override_pattern,

    description: description,

    socialImage: socialImage,

    robotsNoIndex: acf.page_meta_robots_noindex,

    robotsNoFollow: acf.page_meta_robots_nofollow,

    ogType: acf.page_meta_og_type,

    ogTitle: acf.page_meta_og_title || title,

    ogDescription: acf.page_meta_og_description || description,

    ogImage:
      acf.page_meta_og_image && acf.page_meta_og_image.localFile
        ? acf.page_meta_og_image.localFile.url
        : socialImage,

    twitterTitle: acf.page_meta_twitter_title || title,

    twitterDescription: acf.page_meta_twitter_description || description,

    twitterImage:
      acf.page_meta_twitter_image && acf.page_meta_twitter_image.localFile
        ? acf.page_meta_twitter_image.localFile.url
        : socialImage,

    twitterCreator: acf.page_meta_twitter_creator,
  }
}
