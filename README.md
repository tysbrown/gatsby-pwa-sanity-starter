<img alt="Gatsby" src="./gatsby/src/images/gatsby.svg" width="60" />&nbsp;<img alt="Sanity" src="./gatsby/src/images/sanity.svg" width="60" />

# Gatsby PWA & Sanity Starter &nbsp;⚛️&nbsp;🛠
Gatsby front-end with [Sanity.io](https://sanity.io/) headless CMS.

## Features 🌟
#### Sanity
  - Page Builder
  - Routing Schema
  - Web Previews
  - Customized Portable Text Editor
  
#### Gatsby
  - PWA
    - Offline Support
    - Web App Manifest Support
  - SEO
    - Perfect 100 Lighthouse Scores
    - Schema.org JSON-LD Markup
    - Sitemap
    - Canonical Tags
    - OpenGraph Tags
    - Twitter Tags
    - Facebook Tags
    - Forced Trailing Slashes
    - Favicons
    - Robots.txt Generator
    - Redirects Generator
  - Brotli Compression
  
  ## Getting Up and Running 🌟
  
  ### Get Fresh Project ID, API Token, and Dataset
  1. If you don't already have an account at [Sanity.io](https://sanity.io/), create one.
  2. Open a terminal and run `yarn global add @sanity/cli`
  3. Login to your Sanity account by running `sanity login`
  4. Generate a fresh Sanity Studio by running `sanity init` in any directory, choose 'clean project with no defined schemas'-- you're going to delete it afterwards as we already have a Studio installed, therefore we only need the new projectID, dataset, and token.
  5. Once completed, you can delete the newly created Studio from your machine.
  6. Go to your [Sanity.io/manage](https://sanity.io/manage/) dashboard and navigate to the project you just generated.
  7. Copy the Project ID.
  8. Go to Settings, scroll down to 'Tokens' and you'll see a token already made. Delete it, then click `Add API Token` and give it 'Deploy Studio' permissions.
  9. Copy the API Token. Note that you won't be able to view it again later.
  10. Finally, take note of the name of the Dataset, it should be `production` if you followed these steps.
  
  ### Spin Up New Project
  1. Click 'Use this template' to generate a fresh project repo
  2. Clone the new repo
  3. Run `yarn install` in both /gastby and /sanity
  4. Create a new file in /gatsby called `.env.development`
  5. Open `.env.template` and copy its contents to `.env.development`
  6. Paste your new Project ID, API Token, and Dataset into the corresponding fields. Choose gatsby-cloud or netlify for HOST.
  7. In /sanity open `sanity.json` and paste your new Project ID and Dataset inside the 'api' object.
  8. Run `sanity deploy` in /sanity
  9. Run `sanity graphql deploy` in /sanity to deploy the GraphQL API
  10. To start the Gatsby dev server, run `yarn dev` in /gatsby (will run at https://localhost:8000)
  11. To start the Sanity dev server, run `sanity start` in /sanity (will run at https://localhost:3333)
  12. In the new Sanity Studio, create a new document in 'Pages' called Home with slug `home` (this will be the homepage).
  
  ### Deploy to Staging or Production
  1. Make sure your preferred host for Gatsby is reflected in the HOST .env variable. The corresponding plugin will be loaded in gatsby-config based on the HOST variable's value.
  2. You can host the Sanity Studio on Sanity.io or elsewhere. I personally prefer to host mine on Netlify. Simply spin up a new Netlify instance and point it to the /sanity directory in your project repo.
  3. Make sure you update the CORS origins at [Sanity.io/manage](https://sanity.io/manage/) with the domain you're hosting the Studio at.
  4. Deploy the Gatsby front-end to Netlify or Gatsby Cloud in the same manner, simply spin up a new Netlify instance and point it to the /gatsby directory of the project repo. Don't forget to update CORS origins and add a build webhook to [Sanity.io/manage](https://sanity.io/manage/).
  5. To build locally, run `gatsby build` in the /gatsby directory.
  
  ## Using the Starter 🌟
  
  ### Create New Sections
  Sections are Gatsby components that can be used in the page builder in Sanity
  1. Write a schema for the section in `/sanity/schemas/sections`.
  2. Add the new section to the `sections` array in `/sanity/schemas/documents/page.js`.
  3. Add a new directory for the section in `/gatsby/src/sections`.
  4. Add `index.jsx`, `styles.module.scss`, and `queries.gql.js` files in the new section directory.
  5. Refer to the existing sections for setting up these new files.
  6. The section's data is fetched from a fragment inside `queries.gql.js`, make sure you add the fragment to the page query at `/gatsby/src/templates/page.jsx`.
  
  ### Routing Schema
  The routing schema is all set up in Sanity inside the `Routing` tab. The header navigation data is fetched from the `Header` component and consumed by the `Navigation` component. A similar setup can be used for the footer navigation data and `Footer` component.
  
  Inside the `Routing` tab of the Sanity Studio you have the ability to add both singleton and dropdown items to the header and singletons and social media items to the footer. Header items can be toggled to be external addresses and/or toggled to be styled as a button (the color of which you can select from a list).
 
