export interface IPostMeta {
  lang: string
  title: string
  description: string
  date: string
  imagePreview: string

  emailCollectorMessage?: string
  slug?: string
  published?: string
  readTime?: any
}

export interface IPost {
  meta: IPostMeta
  content: string | string[]
}
