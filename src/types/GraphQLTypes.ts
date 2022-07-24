export interface Frontmatter {
  title: string;
  date: string;
  tags: string[];
}

export interface Mdx {
  frontmatter: Frontmatter;
  body: string;
}

export interface RootObject {
  mdx: Mdx;
}
