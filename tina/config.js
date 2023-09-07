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
                  label: "Name",
                  type: "string",
                  isTitle: true,
                  required: true,
                },
                {
                  name: "advanced",
                  label: "Advanced",
                  type: 'boolean',
                  description: 'Toggle to turn off Amigo and use Zapier',
                  
                },
                {
                  name: "amigoLink",
                  label: "Amigo URL",
                  type: "string",
                },
                {
                  name: "formsparkURL",
                  label: "Formspark URL",
                  type: "string",
                },
               
                {
                  name: "heroContent",
                  label: "Hero Content",
                  type: "rich-text",
                },
                {
                  name: "heroVideoURL",
                  label: "Video URL",
                  type: "string",
                },
                {
                  name: "heroImage",
                  label: "Image URL",
                  type: "image",
                },
               
                {
                  name: 'offerTopTitle',
                  label: 'Offer Top Title',
                  type: "string",
                },
                {
                  name: 'offerTitle',
                  label: 'Offer Title',
                  type: "string",
                },
                {
                  label: 'Automations',
                  name: 'automation',
                  type: 'object',
                  list: true,
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                    },
                    {
                    type: 'rich-text',
                    name: 'content',
                    },
                  ],
                  ui: {
                    itemProps: (item) => {
                      // Field values are accessed by item?.<Field name>
                      return { label: item?.title };
                    },
                  },
                },
                {
                  label: 'Security',
                  name: 'security',
                  type: 'object',
                  list: true,
                  fields: [
                    {
                    name: 'title',
                    type: 'string',
                    },
                    {
                      type: 'rich-text',
                      name: 'content',
                    },
                  ],
                  ui: {
                    itemProps: (item) => {
                      // Field values are accessed by item?.<Field name>
                      return { label: item?.title };
                    },
                  },
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
