import { createUploadLink } from "apollo-upload-client/createUploadLink"

const uploadLink = createUploadLink(import.meta.env.VITE_APP_GRAPHQL_SERVER)
