import { Author } from "./author"

export type Blog = {
    title: string,
    release: Date
    author: Author
    slug: string
    content: string
}