// import { SanityClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url";

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


// export const client = sanityClient({
//   projectID: "lo2xrys0",
//   dataset: "production",
//   apiVersion: "2022-08-07",
//   useCdn: true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

export const client = sanityClient({
  projectId: "lo2xrys0",
  dataset: "production",
  apiVersion: "2022-08-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);