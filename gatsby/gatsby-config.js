require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Playing with sanity",
    description: "Site where I play around with sanity.io",
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1v44gocj',
        dataset: 'dev',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_API_KEY,
        // overlayDrafts: true,
        // watchMode: true
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
  ]
}
