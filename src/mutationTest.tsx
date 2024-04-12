import { ApolloClient } from "@apollo/client";
import { config } from "./apolloConfig";
import { UploadFileDocument } from "dicty-graphql-schema";
import samplePicture from "./assets/tree_frog_3.jpg";

const client = new ApolloClient(config);
console.log(import.meta.env.VITE_GRAPHQL_SERVER);
client
  .mutate({
    mutation: UploadFileDocument,
    variables: { file: samplePicture },
  })
  .then((result) => console.log(result));
