# Sanity Gatsby

Gatsby Starter which uses the Headless CMS [Sanity](https://sanity.io/).

## Features

- Gatsby V3
- Sanity as Headless CMS
- gatsby-plugin-image
- SASS with CSS modules
- SEO
  - Sitemap
  - Canonical Tags
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
  - Forced trailing slashes
  - Favicons (light and dark mode)
  - Optional GA, GTM, Segment, Hubspot and HotJar setup
  - Robots.txt generator
  - Redirects generator for Netlify, Vercel, AWS and Gatsby Cloud
- PWA
  - Offline Support
  - - WebApp Manifest Support
- Brotli Compression
- Configurable
  - Use the `website.js` to easily change the most important information
  - Use `.env.template` to generate `.env.development` and `.env.production` files containing ENV variables

## Instructions

### Quick start guide

1. Clone and install the repo
2. Register an account on Sanity
3. Create an API key and store it in an ENV variable
4. Go to your content tab
5. Create new documents for the `Page` type and fill out every input field
6. Your project is ready for development and production

## Setup

You have to know the basics of Sanity's interface in order to be able to make the necessary changes / setup your project accordingly. You can also checkout the document ["Sourcing from Sanity"](https://www.gatsbyjs.com/plugins/gatsby-source-sanity/).

### Create .env files

Use `.env.template` to generate `.env.development` and `.env.production` files containing the following ENV variables

#### SITE_URL

This is the frontend URL of your project, for development it will be http://localhost:8000 or similar

#### SANITY_ENV_VARIABLES

Don't forget to change the default `SANITY_PROJECT_ID`, `SANITY_TOKEN` and `SANITY_DATASET` env variables.

#### IS_STAGING

Specifies whether the site is in staging, setting this variable will ensure the site is not crawlable by search engines. Remove this variable if you are deploying to the production URL and you want the site indexed.

#### HOST

Generates relevant redirect files for your chosen hosting provider, following options are accepted:

- `netlify` - generates a `_redirects` file in the static directory based on contents in `/config/redirects.js` & `/config/rewrites.js`. Adds the `gatsby-plugin-netlify` and `gatsby-plugin-netlify-cache` plugins to the `gatsby-config.js` file.
- `vercel` - generates a `vercel.json` file in the static directory based on contents in `/config/redirects.js` & `/config/rewrites.js`
- `gatsby-cloud` - uses the `createRedirect` function from the `createPages` lifecycle event inside `gatsby-node.js` to create redirects based on contents in `/config/redirects.js` & `/config/rewrites.js`. Adds the `gatsby-plugin-gatsby-cloud` plugins to the `gatsby-config.js` file.
- `other` - uses the `createRedirect` function from the `createPages` lifecycle event inside `gatsby-node.js` to create redirects based on contents in `/config/redirects.js` & `/config/rewrites.js`

By default the redirects manager (`/config/redirectsManager.js`) will create files for all three options if `HOST` is not set.

## Development

**Before running the local development server you'll need to add content to your Sanity repository!**

**Please note**: You have to publish all these documents (not only saving them)!

After that you can run the local server:

```shell
yarn dev
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/plugins/)

### Building your site

```shell
yarn build && yarn serve
```

## Configuration

You can configure your setup in `/config/website`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Sanity', // Default Site Title used for PWA
  description: 'A unopinionated Gatsby Starter which uses the Headless CMS Sanity.',
  siteName: 'Lean Gatsby Sanity starter', // Sitename for Facebook
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/logos/logo-1024.png', // Default OpenGraph image
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Sanity', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Company Name', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '', // Twitter Username
  googleAnalyticsID: '',
}
```

## Typography

This boilerplate is using [NPM Typefaces](https://github.com/KyleAMathews/typefaces) that serves Google (and other) fonts locally to boost performance and allow them to load offline. Out the box it is using [Lato](https://www.npmjs.com/package/typeface-lato) and [Titillium](https://www.npmjs.com/package/typeface-titillium-web) these are imported and can be replaced in `src/components/Layout.jsx`.
