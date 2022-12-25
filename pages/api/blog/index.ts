import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'contentful'
import { getAllBlogs } from 'utils/contentful/blog'

export const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID ?? '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
    })

    const blogs = await getAllBlogs(client)
    
    res.status(200).json(blogs.map(b => b.fields))
}

export default handler