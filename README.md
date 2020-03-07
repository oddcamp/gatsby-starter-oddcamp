# GatsbyJS boilerplate

This is a template-repo. Clone it with [Use this template](https://github.com/kollegorna/gatsby-boilerplate/generate) button to start a new project.

## Online demo

https://kollegorna-gatsbyjs-starter.netlify.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/88f45bf8-a663-4483-bf7d-a1f47ab251c8/deploy-status)](https://app.netlify.com/sites/kollegorna-gatsbyjs-starter/deploys)

## Developing locally

1. Install Gatsby CLI globally `$ npm install -g gatsby-cli`
2. Switch to the required Node version `$ nvm use`
3. Install dependencies `$ yarn install`
4. Start development server: `$ yarn develop`: [localhost:8000](http://localhost:8000)

Or `$ yarn develop-n` for sharing the server on your network (`192.168.X.X:8000`)

## Testing the build locally

1. Make a build `$ yarn build`
2. Serve the build `$ yarn serve`: [localhost:9000](http://localhost:9000)

Or `$ yarn serve-n` for sharing the server on your network (`192.168.X.X:9000`)

## Features

1. Based on [gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)
2. Implements [sass-boilerplate](https://github.com/kollegorna/sass-boilerplate) and [sass-utils](https://github.com/kollegorna/sass-utils)
3. Implements [styled-components](https://www.styled-components.com) with variable porting from SASS

### Meta icons explanation (`gatsby-config.js`)

Make two 512x512 icons and replace:

- `iconWithBg` — 512x512 with a background color set. For Apple Touch Icon.
- `icon` — icon with a transparent background and works with `iconBgColor`. For MS Tile Image.
- `iconBgColor` — a branded background color for the `icon` you can place underneath. For MS Tile and Apple Status Bar.

## TODO

* Review custom fonts implementation
