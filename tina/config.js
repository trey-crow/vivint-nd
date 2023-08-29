import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "cfbbbbcc-2bbe-4c4a-9903-dcd846aa130c", // Get this from tina.io
  token: "04a94c9da95ebd0be936199f64519742ca715767", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "techs",
        label: "Technicians",
        path: "content/techs",
        format: "md",
            templates: [
              {
              name: "tech",
              label: "Technician",
              format: "md",
              fields: [
                {
                  name: "Name",
                  lable: "Name",
                  type: "string",
                },
                {
                  name: "heroTitle",
                  lable: "Hero Title",
                  type: "string",
                },
                {
                  name: "heroContent",
                  lable: "Hero Content",
                  type: "rich-text",
                },
                {
                  name: "heroVideoURL",
                  lable: "Video URL",
                  type: "string",
                },
                {
                  name: "heroImage",
                  lable: "Image URL",
                  type: "image",
                },
              ],
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: 'aef0d6bb6ffa9aad6fe3b26466322130b088f4fa',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
