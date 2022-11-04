import { MD_FILE_DIR } from "@/constpack";
import fs from "fs";
import matter from "gray-matter";

export type FrontMatter = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  socialImage: string;
  date: string;
  tags: string[];
};
export type SingleMDFile = { slug: string; frontmatter: FrontMatter };
export type MdFileContent = {
  [key: string]: SingleMDFile[];
};

export const readAllMDFiles = async () => {
  // Read director files in PATH_TO_MD_FILE_DIR
  const categories = fs.readdirSync(MD_FILE_DIR);

  let mdFileMap: MdFileContent = {};

  categories
    .filter((file) => fs.lstatSync(`${MD_FILE_DIR}/${file}`).isDirectory()) // filter files are not directory.
    .forEach((category) => {
      const dirToMDFiles = `${MD_FILE_DIR}/${category}`;

      // Read all markdown files in CATEGORY folder
      const mdFiles = fs
        .readdirSync(dirToMDFiles)
        .filter((fileName) => fileName.indexOf(".md") > -1); // filter files are not markdown files.

      const allContentsByCategory = mdFiles.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const pathToFile = `${dirToMDFiles}/${fileName}`;

        // Read markdown file contents
        const readFile = fs.readFileSync(pathToFile, "utf-8");
        const { data } = matter(readFile);

        return { slug, frontmatter: data as FrontMatter };
      });

      mdFileMap[category] = allContentsByCategory;
    });

  return mdFileMap;
};
