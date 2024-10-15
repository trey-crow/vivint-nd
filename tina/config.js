import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "3da6678b-e9f9-4600-b536-49b2e401fe21", // Get this from tina.io
  token: "c382a7849ec09a80d8be8c74d63bb8fb7cea4777", // Get this from tina.io

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
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.Name
                ?.toLowerCase()
                .replace(/ /g, '-')}`
            },
          },
        },
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
                  name: "phone",
                  label: "Phone",
                  type: "string",
                },
                {
                  name: "email",
                  label: "email",
                  type: "string",
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
                  description: "Integrate Formspark with Zapier for a more hands-on experience. Toggle advanced to use."
                },
                {
                  name: "heroContent",
                  label: "Hero Content",
                  type: "rich-text",
                },
                {
                  name: "heroImage",
                  label: "Image URL",
                  type: "image",
                },
                {
                  name: "heroVideoThumb",
                  label: "Video Thumbnail",
                  type: "image",
                },
                {
                  name: "heroVideoURL",
                  label: "Video URL",
                  type: "string",
                  description: "Make sure to use the embed link for the youtube video"
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
                      label: 'Title',
                    },
                    {
                    type: 'rich-text',
                    name: 'content',
                    label: 'Content',
                    },
                    {
                      type: 'image',
                      name: 'img',
                      label: "Image",
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
                    {
                      type: 'image',
                      name: 'img',
                      label: "Image",
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
                  label: 'Services',
                  name: 'services',
                  type: 'object',
                  list: true,
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      label: 'Title',
                    },
                    {
                    type: 'rich-text',
                    name: 'content',
                    label: 'Content',
                    },
                    {
                      type: 'image',
                      name: 'img',
                      label: "Image",
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
      {
        name: "partners",
        label: "Partners",
        path: "content/partners",
        format: "md",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.Name
                ?.toLowerCase()
                .replace(/ /g, '-')}`
            },
          },
        },
            templates: [
          {
              name: "partner",
              label: "Partner",
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
                  name: "phone",
                  label: "Phone",
                  type: "string",
                },
                {
                  name: "email",
                  label: "email",
                  type: "string",
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
                  description: "Integrate Formspark with Zapier for a more hands-on experience. Toggle advanced to use."
                },
                {
                  name: "heroContent",
                  label: "Hero Content",
                  type: "rich-text",
                },
                {
                  name: "heroImage",
                  label: "Image URL",
                  type: "image",
                },
                {
                  name: "heroVideoThumb",
                  label: "Video Thumbnail",
                  type: "image",
                },
                {
                  name: "heroVideoURL",
                  label: "Video URL",
                  type: "string",
                  description: "Make sure to use the embed link for the youtube video"
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
                      label: 'Title',
                    },
                    {
                    type: 'rich-text',
                    name: 'content',
                    label: 'Content',
                    },
                    {
                      type: 'image',
                      name: 'img',
                      label: "Image",
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
                    {
                      type: 'image',
                      name: 'img',
                      label: "Image",
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
                  label: 'Services',
                  name: 'services',
                  type: 'object',
                  list: true,
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      label: 'Title',
                    },
                    {
                    type: 'rich-text',
                    name: 'content',
                    label: 'Content',
                    },
                    {
                      type: 'image',
                      name: 'img',
                      label: "Image",
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
