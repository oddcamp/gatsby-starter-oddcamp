# gatsby-starter-kollegorna

Our default starter for GatsbyJS projects at [Kollegorna](https://www.kollegorna.se).

## Online demo

[https://gatsby-starter-kollegorna.netlify.app](https://gatsby-starter-kollegorna.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/88f45bf8-a663-4483-bf7d-a1f47ab251c8/deploy-status)](https://app.netlify.com/sites/gatsby-starter-kollegorna/deploys)

## Development Environment

We provide two ways of developing locally but **we recommend using Docker as the default**.

### Docker

1. Provide your [Github Access Token](https://github.com/settings/tokens) if you use Private Github packages. Otherwise use blank.
Put `GITHUB_ACCESS_TOKEN=<TOKEN>` in `.env`.
2. Run `$ docker-compose build`
3. Run `$ docker-compose up`
4. Visit your development environment on [localhost:8000](http://localhost:8000).

### Locally

1. Install dependencies `$ yarn install`
2. Start development server: `$ yarn develop`: [localhost:8000](http://localhost:8000)

Or `$ yarn develop-n` for sharing the server on your network (`192.168.X.X:8000`)

**Testing**

1. Make a build `$ yarn build`
2. Serve the build `$ yarn serve`: [localhost:9000](http://localhost:9000)

Or `$ yarn serve-n` for sharing the server on your network (`192.168.X.X:9000`)

## Our WordPress setup

There's commented out code for our default WordPress workflow inside this starter. In [`gatsby-config.js`](https://github.com/kollegorna/gatsby-starter-kollegorna/blob/master/gatsby-config.js)
we have the block for config for `gatsby-source-wordpress`. We always use HTTPS and ACF with an Options Page
for global settings, primarily our custom metadata setup.
We limit the `includesRoutes` to gain some speed and use a normalizer to prepare the slugs to be valid.

For the custom meta setup we have 2 GraphQL fragments for ease of use. One for [Post](https://github.com/kollegorna/gatsby-starter-kollegorna/blob/master/src/fragments/meta-wp-post.js) and another for [Page](https://github.com/kollegorna/gatsby-starter-kollegorna/blob/master/src/fragments/meta-wp-page.js).
Generally, we use fragments as much as possible for making it easier to change ACF names etc.

For [`gatsby-node.js`](https://github.com/kollegorna/gatsby-starter-kollegorna/blob/master/gatsby-node.js) we have the `createPage` block where we generate all the pages. We usually map a javascript template file to a WordPress template for our customers to be able to create different style of pages.
