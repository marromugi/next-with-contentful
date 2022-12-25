import { IBlogFields } from "@types/generated/contentful";
import { ContentfulClientApi } from "contentful";

export const getAllBlogs = async (client: ContentfulClientApi) => {
    const entries = await client.getEntries<IBlogFields>({
        content_type: "blog",
        order: "-fields.release",
    });
    return entries.items
}

export const getBlog = async (client: ContentfulClientApi, slug: string) => {
    const entries = await client.getEntries<IBlogFields>({
        content_type: "blog",
        limit: 1,
        "fields.slug[in]": slug,
      });
      if (entries.items) {
        return entries.items.length > 0 
            ? entries.items[0]
            : null
      } else {
        return null
      }
}