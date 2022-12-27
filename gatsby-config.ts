import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
   siteMetadata: {
      title: `todo-app-gatsby`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
   // If you use VSCode you can also use the GraphQL plugin
   // Learn more at: https://gatsby.dev/graphql-typegen
   graphqlTypegen: true,
   plugins: [
      {
         resolve: "gatsby-plugin-minify-html",
         options: {
            debug: false, // debug optional, default false
            config: {
               collapseWhitespace: true,
               minifyCSS: true,
               minifyJS: false,
               removeComments: true,
               removeScriptTypeAttributes: false,
               removeStyleLinkTypeAttributes: false,
               sortAttributes: false,
               useShortDoctype: false,
            },
         },
      },
      "gatsby-plugin-postcss",
   ],
};

export default config;
