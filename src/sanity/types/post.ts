import { DocumentIcon } from '@heroicons/react/16/solid'
import type { Rule, StringRule, ValidationBuilder } from '@sanity/types'
import { defineField, defineType } from 'sanity'
import { apiVersion } from '../env'
import { groq } from 'next-sanity'
import type { PreviewValue } from '@/types/sanity'

interface SanityClient {
  fetch: <T>(query: string) => Promise<T>
  withConfig: (config: { perspective: string }) => SanityClient
}

interface ValidationContext {
  getClient: (config: { apiVersion: string }) => SanityClient
}

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) =>
        Rule.required().error('A slug is required for the post URL.'),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().error(
          'A publication date is required for ordering posts.',
        ),
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) =>
        Rule.custom(async (isFeatured, { getClient }) => {
          if (isFeatured !== true) {
            return true
          }

          let featuredPosts = await getClient({ apiVersion })
            .withConfig({ perspective: 'previewDrafts' })
            .fetch<number>(
              groq`count(*[_type == 'post' && isFeatured == true])`,
            )

          return featuredPosts > 3
            ? 'Only 3 posts can be featured at a time.'
            : true
        }),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      isFeatured: 'isFeatured',
    },
    prepare(selection: Record<string, any>) {
      const { title, author, media, isFeatured } = selection

      const subtitle = [
        isFeatured && 'Featured',
        author && `By ${author}`,
      ].filter(Boolean).join(' | ')

      return {
        title: title || '',
        subtitle: subtitle || undefined,
        media: media || DocumentIcon,
      }
    },
  },
  orderings: [
    {
      name: 'isFeaturedAndPublishedAtDesc',
      title: 'Featured & Latest Published',
      by: [
        { field: 'isFeatured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
})
