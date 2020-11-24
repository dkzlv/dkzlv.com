export type PostMetaFromFile = {
  lang: string;
  title: string;
  description: string;
  date: string;
  published: number;

  imagePreview?: string;
  anounced?: boolean;
  slug?: string;
  emailCollectorMessage?: string;
  /**
   * A string, that looks like a JS array of slugs to other posts
   */
  series?: string[];
};
export type BasePostMeta = {
  lang: string;
  date: Date;
  title: string;
  slug: string;
  description: string;
  published: boolean;
  announced: boolean;
  readTime: number;
  imagePreview?: string;
  emailCollectorMessage?: string;
};
export type PreprocessedSeries = Array<
  | {
      slug: string;
      title: string;
      description: string;
      announced: boolean;
    }
  | undefined
>;

export type UnfinishedPost = {
  content: string;
  meta: BasePostMeta & { series?: string[] };
};
export type Post = {
  content: string;
  meta: BasePostMeta & { series?: PreprocessedSeries };
};
