# Kollegorna GatsbyJS Starter

## Online demo

[https://kollegorna-gatsbyjs-starter.netlify.com](https://kollegorna-gatsbyjs-starter.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/88f45bf8-a663-4483-bf7d-a1f47ab251c8/deploy-status)](https://app.netlify.com/sites/kollegorna-gatsbyjs-starter/deploys)

## Developing locally

1. Install Gatsby CLI globally `$ yarn global add gatsby-cli`
2. Install dependencies `$ yarn install`
3. Start development server: `$ yarn develop`: [localhost:8000](http://localhost:8000)

Or `$ yarn develop-n` for sharing the server on your network (`192.168.X.X:8000`)

## Testing the build locally

1. Make a build `$ yarn build`
2. Serve the build `$ yarn serve`: [localhost:9000](http://localhost:9000)

Or `$ yarn serve-n` for sharing the server on your network (`192.168.X.X:9000`)

## Features

1. Based on [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)
2. Implements [sass-boilerplate](https://github.com/kollegorna/sass-boilerplate) and [sass-utils](https://github.com/kollegorna/sass-utils)
3. Implements [styled-components](https://www.styled-components.com) with variable porting from SASS

## Our Wordpress setup

There's commented out code for our default Wordpress workflow inside this starter. In [`gatsby-config.js`](https://github.com/kollegorna/gatsbyjs-boilerplate/blob/master/gatsby-config.js)
we have the block for config for `gatsby-source-wordpress`. We always use HTTPS and ACF with an Option page
for global settings (mostly our custom Meta setup).
We limit the includesRoutes to gain some speed and use a normalizer to prepare the slugs to be valid.

For the custom meta setup we have 2 GraphQL fragments for ease of use. One for [Post](https://github.com/kollegorna/gatsbyjs-boilerplate/blob/master/src/fragments/meta-wp-post.js) and another for [Page](https://github.com/kollegorna/gatsbyjs-boilerplate/blob/master/src/fragments/meta-wp-page.js).
Generally we use fragments as much as possible for making it easier to change ACF names etc.

For [`gatsby-node.js`](https://github.com/kollegorna/gatsbyjs-boilerplate/blob/master/gatsby-node.js) we have the `createPage` block where we generate all the pages. We usually map a javascript
template file to an wordpress template for our customers to be able to create different style of pages.

## TODO

- [ ] Improve the use of `react-modal`
- [ ] Add an example `pure-react-carousel`
- [ ] Remove SCSS setup and transfer stuff to `styled-components` theme
- [ ] Review custom fonts implementation
