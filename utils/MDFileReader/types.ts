export type FrontMatter = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  socialImage: string;
  date: string;
  tags: string[];
};

export type SingleMDFile = { slug: string; frontmatter: FrontMatter };
export type MdFileContent = Record<string, SingleMDFile[]>;
