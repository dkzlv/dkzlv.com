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

  /**
   * A list of paths relative to `components` folder with components that we
   * attach to the post programmatically
   */
  registerExtraComponents?: string[];
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
  registerExtraComponents: string[];

  imagePreview?: string;
  emailCollectorMessage?: string;
};
export type PreprocessedSeries = Array<
  | {
      lang: string;
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
