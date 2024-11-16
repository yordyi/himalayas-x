import { createClient } from '@sanity/client'
import type { QueryParams } from '@sanity/client'
import { apiVersion, dataset, projectId } from './env'

const isDevelopment = process.env.NODE_ENV === 'development'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isDevelopment,
  perspective: 'published',
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string
  params?: QueryParams
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params)
}
