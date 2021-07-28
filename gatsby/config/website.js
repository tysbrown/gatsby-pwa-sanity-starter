module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Example title for SEO', // Default Site Title used for SEO & PWA
  description: 'Example description for SEO', // Default Site Decription used for SEO
  siteName: 'Website Name', // Sitename for Facebook
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/static/open-graph.jpg', // Default OpenGraph image
  ogLanguage: 'en_AU', // Facebook Language

  // JSONLD / Manifest
  icon: 'src/images/icon.png', // Used for manifest favicon, splash screen, and icon generation
  shortName: 'PWA Name', // shortname for manifest. MUST be shorter than 12 characters
  author: 'PWA Author', // Author for schemaORGJSONLD
  themeColor: '#f0ad4e', // PWA Icon background & address bar colour if installed on desktop
  backgroundColor: '#13191E', // PWA colour shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet

  twitter: '', // Twitter Username
};
