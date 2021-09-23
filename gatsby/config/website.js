module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'GatsbySanitySassPWA', // Default Site Title used for SEO & PWA
  description: 'Site description placeholder', // Default Site Decription used for SEO
  siteName: 'GatsbySanitySassPWA', // Sitename for Facebook
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/static/open-graph.jpg', // Default OpenGraph image
  ogLanguage: 'en', // Facebook Language

  // JSONLD / Manifest
  icon: 'src/images/logo.svg', // Used for manifest favicon, splash screen, and icon generation
  shortName: 'PWA Name', // shortname for manifest. MUST be shorter than 12 characters
  author: 'PWA Author', // Author for schemaORGJSONLD
  themeColor: '#20a4f3', // PWA Icon background & address bar colour if installed on desktop
  backgroundColor: '#ffffff', // PWA colour shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet

  twitter: '', // Twitter Username
};
