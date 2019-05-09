module.exports = {
    siteMetadata: {
      title: 'Website Title',
      siteUrl: 'https://www.your-new-website.com'
    },
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-offline',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-robots-txt',
      'gatsby-plugin-typescript',
      'gatsby-plugin-tslint',
      {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
          lang: 'en'
        }
      }
    ],
  }
