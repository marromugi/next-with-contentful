import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'contentful'
import { getBlog } from 'utils/contentful/blog'

export const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { slug } = req.query
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID ?? '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
    })

    if (typeof slug !== 'string') {
      res.status(404)
    } else {
      const blog = await getBlog(client, slug)
    
      if (blog !== null) {
        res.status(200).json(blog)
      } else {
        res.status(404)
      }
    }
}

export default handler