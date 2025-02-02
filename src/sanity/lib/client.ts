import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:
    "skWQO9DpjIrXltUGeahYEIy8jN47naqZC1eshPWz9lzdgQFct5UzbW0yN9lDHCUroxeS27udLKdVn75ydceJVDcwrpgaWALOAXqTVrJbv4VykddlUhfme6PxlNqzqltypnx3O4WEIzfublt4coFfCe9OSGshYjhNEMosxbVCfnJxfhzoDq3z",
});
