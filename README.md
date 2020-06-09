# gatsby-starter-kollegorna

Our default starter for GatsbyJS projects at [Kollegorna](https://www.kollegorna.se).

## Online demo

[https://gatsby-starter-kollegorna.netlify.app](https://gatsby-starter-kollegorna.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/88f45bf8-a663-4483-bf7d-a1f47ab251c8/deploy-status)](https://app.netlify.com/sites/gatsby-starter-kollegorna/deploys)

## Private packages

**Note: This is only needed if it's using packages from Github Packages**

If a project is using a private package (such as a `components` package), you can do a change where you put your token in the `.env` file instead of having it globally on the shell. For that to work you need to put `GITHUB_ACCESS_TOKEN=<YOUR TOKEN>` in the `.env` and uncomment the `- .env` file in `docker-compose.yml` and rebuild by running `docker-compose build --force --no-cache`

**To get your Token and set the project up:**

1. Get your [Github Access Token here](https://github.com/settings/tokens).
2. Put `GITHUB_ACCESS_TOKEN=<TOKEN>` in the `.env` file.
3. Add `"preinstall": "node ./scripts/append-gha.js",` to the `scripts` hash in `package.json`.
   This makes sure that the keys are set before running yarn.
4. Add our `k-deployer` token in the Netlify (or whatever system you use) in the `GITHUB_ACCESS_TOKEN` environment variable.

## Development Environment

We provide two ways of developing locally but **we recommend using Docker as the default**.

### Docker

1. Provide your [Github Access Token](https://github.com/settings/tokens) if you use Private Github packages. Otherwise use blank.
   Put `GITHUB_ACCESS_TOKEN=<TOKEN>` in `.env`.
2. Run `$ docker-compose build`
3. Run `$ docker-compose up`
   (this starts a `yarn install` and `yarn develop-n`)
4. Visit your development environment on [localhost:8000](http://localhost:8000).

**Testing**

1. Create a build and serve it by running
   `$ docker-compose run --rm app ./scripts/build.sh`
2. Visit the build on [localhost:9000](http://localhost:9000)

### Locally (outside of Docker)

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
