import {
  EleventyRenderPlugin,
  EleventyI18nPlugin,
  EleventyHtmlBasePlugin,
} from '@11ty/eleventy'
import CleanCss from 'clean-css'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  // eleventyConfig.addPlugin(EleventyI18nPlugin)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCss({}).minify(code).styles
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
