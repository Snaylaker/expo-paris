import { z } from "zod";

export const schema = z.object({
  total_count: z.number(),
  links: z.array(
    z.object({ rel: z.string().nullable(), href: z.string().nullable() })
  ),
  records: z.array(
    z.object({
      links: z.array(
        z.object({ rel: z.string().nullable(), href: z.string().nullable() })
      ),
      record: z.object({
        id: z.string(),
        timestamp: z.string().nullable(),
        size: z.number(),
        fields: z.object({
          id: z.string().nullable(),
          url: z.string().nullable(),
          title: z.string().nullable(),
          lead_text: z.string().nullable(),
          description: z.string().nullable(),
          date_start: z.string().nullable().nullable(),
          date_end: z.string().nullable(),
          occurrences: z.string().nullable(),
          date_description: z.string().nullable(),
          cover_url: z.string().nullable(),
          cover_alt: z.string().nullable(),
          cover_credit: z.string().nullable(),
          tags: z.array(z.string().nullable()).nullable(),
          address_name: z.string().nullable(),
          address_street: z.string().nullable(),
          address_zipcode: z.number().nullable().or(z.string().nullable()),
          address_city: z.string().nullable(),
          lat_lon: z.object({ lon: z.number(), lat: z.number() }).nullable(),
          pmr: z.number().nullable(),
          blind: z.number().nullable(),
          deaf: z.number().nullable(),
          transport: z.string().nullable(),
          contact_url: z.string().nullable(),
          contact_phone: z.string().nullable(),
          contact_mail: z.string().nullable(),
          contact_facebook: z.string().nullable(),
          contact_twitter: z.string().nullable(),
          price_type: z.string().nullable(),
          price_detail: z.string().nullable(),
          access_type: z.string().nullable(),
          access_link: z.string().nullable(),
          access_link_text: z.string().nullable(),
          updated_at: z.string().nullable(),
          image_couverture: z.object({
            thumbnail: z.boolean(),
            filename: z.string().nullable(),
            width: z.number(),
            format: z.string().nullable(),
            etag: z.string().nullable(),
            mimetype: z.string().nullable(),
            id: z.string().nullable(),
            last_synchronized: z.string().nullable(),
            color_summary: z.array(z.string().nullable()),
            height: z.number(),
            url: z.string().nullable(),
          }),
          programs: z.string().nullable(),
          address_url: z.string().nullable(),
          address_url_text: z.string().nullable(),
          address_text: z.string().nullable(),
          title_event: z.string().nullable(),
          audience: z.string().nullable(),
          childrens: z.string().nullable(),
          contributor_group: z.string().nullable(),
        }),
      }),
    })
  ),
});

export type activitiesType = z.infer<typeof schema>;