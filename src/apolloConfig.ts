import { InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const uploadLink = createUploadLink({
  uri: `${import.meta.env.VITE_GRAPHQL_SERVER}/graphqlg`,
});
const config = {
  cache: new InMemoryCache(),
  link: uploadLink,
};

export { config };
