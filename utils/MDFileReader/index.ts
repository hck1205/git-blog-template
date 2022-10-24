import { MD_FILE_DIR } from "@/constpack";
import fs from "fs";
import matter from "gray-matter";

type SingleMDFile = { slug: string; frontmatter: object };
type MdFileContent = {
  [key: string]: SingleMDFile[];
};

export default async () => {
  // Read director files in PATH_TO_MD_FILE_DIR
  const categories = fs.readdirSync(MD_FILE_DIR);

  let mdFileMap: MdFileContent = {};

  categories.forEach((category) => {
    const dirToMDFiles = `${MD_FILE_DIR}/${category}`;

    // Read all markdown files in CATEGORY folder
    const mdFiles = fs.readdirSync(dirToMDFiles);

    const allContentsByCategory = mdFiles.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const pathToFile = `${dirToMDFiles}/${fileName}`;

      // Read markdown file contents
      const readFile = fs.readFileSync(pathToFile, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return { slug, frontmatter };
    });

    mdFileMap[category] = allContentsByCategory;
  });

  return mdFileMap;
};
