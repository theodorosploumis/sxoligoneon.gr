# Gatsby CMS

This repo contains an online website that is built with [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org).

It is based on this repo: [netlify-templates/gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

### Development
```
$ git clone [GIT-URL]
$ cd [FOLDER]
$ yarn
$ npm run develop
```

To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Live environment

Build the site to "docs" folder.
```
$ npm run build && mv public docs
```