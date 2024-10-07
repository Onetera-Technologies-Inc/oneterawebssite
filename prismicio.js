import * as prismic from "@prismicio/client";

export const repositoryName = "onetera-site";

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: "Tzz10iIRDWHlS0SEUe3V3Ysi",
    routes: [
      { type: 'home', path: '/' },
      { type: 'home',uid:"home", path: '/:uid' },
    ],
    ...config,
  });

  return client;
};
