# Ayush Raj - Personal Website

My personal site built with [Gatsby](https://www.gatsbyjs.org/) and hosted with [Netlify](https://www.netlify.com/).

## π Quick Start

1. **Install the Gatsby CLI**

   ```sh
   npm install -g gatsby-cli
   ```

2. **Install and switch to the correct version of Node using NVM**

   ```sh
   nvm install
   ```

3. **Install dependencies**

   ```sh
   yarn install
   ```

4. **Start the development server**

   ```sh
   yarn start
   ```

## Building and Running for Production

In addition to the development server started with `yarn start`, you can also generate a full static production build and serve that to preview the site as it will appear once deployed:

```sh
yarn build
```

```sh
yarn serve
```

## π§ What's inside

A quick look at the top-level files and directories in this project.

    .
    βββ node_modules
    βββ src
    βββ .gitignore
    βββ .prettierrc
    βββ gatsby-browser.js
    βββ gatsby-config.js
    βββ gatsby-node.js
    βββ gatsby-ssr.js
    βββ LICENSE
    βββ package-lock.json
    βββ package.json
    βββ README.md
    βββ yarn.lock

1. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. βSrcβ is a convention for βsource codeβ.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins youβd like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You wonβt change this file directly).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the projectβs name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## Troubleshooting

If you encounter authentication problems while deploying with deploying, then you might have not setup ssh authentication yet.

## Credits

This project was forked from Brittany Chiang's repository. You can check out her website at https://brittanychiang.com/
