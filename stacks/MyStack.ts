import { StackContext, Api, NextjsSite } from "@serverless-stack/resources";

export function MyStack({ stack, app }: StackContext) {
  // Create a Next.js site
const site = new NextjsSite(stack, "Site", {
  path: "frontend",
  environment: {
    // Pass the table details to our app
    REGION: app.region,
  },
});

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda/main.go",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteUrl: site.url
  });
}
