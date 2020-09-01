# `gatsby-source-zendesk`

A plugin to source data from Zendesk, particularly [Zendesk Knowledge Base](https://www.zendesk.com/guide/).

## Install

```shell
npm i gatsby-source-zendesk
```

## Usage

1. Add to `gatsby-config.js` like so:
    ```js
    module.exports = {
      plugins: [
        {
          resolve: `gatsby-source-zendesk`,
          options: {
            domain: `https://your-domain.zendesk.com`
          }
        }
      ]
    }
    ```
1. Run `gatsby develop`
1. Open up `http://localhost:8000/___graphql` and inspect the schema for `ZendeskPost` and `ZendeskArticle` types
