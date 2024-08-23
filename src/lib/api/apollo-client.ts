
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  uri: "https://cms.mairiesouvertes.org/graphql",
  cache: new InMemoryCache(),
});

export default client;