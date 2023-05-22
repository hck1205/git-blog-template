import { CATEGORY_TITLE, MD_FILE_DIR } from "@/constpack";
import fs from "fs";
import matter from "gray-matter";

import type { FrontMatter, MdFileContent } from "./types";

const { EMPTY_CATEGORY } = CATEGORY_TITLE;

const getFrontMatter = ({
  category = "",
  fileName,
}: {
  category: string;
  fileName: string;
}) => {
  const pathToFile = category
    ? `${MD_FILE_DIR}/${category}/${fileName}`
    : `${MD_FILE_DIR}/${fileName}`;

  const slug = fileName.replace(".md", "");

  // Read markdown file contents
  const readFile = fs.readFileSync(pathToFile, "utf-8");
  const { data } = matter(readFile);

  return { slug, frontmatter: data as FrontMatter };
};

export const fetchAllMDFilesFrontMatter = async () => {
  // Read director files in PATH_TO_MD_FILE_DIR
  const categories = fs.readdirSync(MD_FILE_DIR);

  let mdFileMap: MdFileContent = {
    [EMPTY_CATEGORY]: [],
  };

  categories
    .filter((file) => {
      // filter files are not directory.
      const isMDFile = file.endsWith(".md");
      const isDirectory = fs.lstatSync(`${MD_FILE_DIR}/${file}`).isDirectory();

      return isDirectory || isMDFile;
    })
    .forEach((category) => {
      const isMDFile = category.endsWith(".md");

      if (isMDFile) {
        // if isMDFile, category is the fileName
        const singleMDFile = getFrontMatter({
          category: "",
          fileName: category,
        });

        mdFileMap[EMPTY_CATEGORY].push(singleMDFile);
      } else {
        const dirToMDFiles = `${MD_FILE_DIR}/${category}`;

        // Read all markdown files in [CATEGORIZED] folder
        const mdFiles = fs
          .readdirSync(dirToMDFiles)
          .filter((fileName) => fileName.indexOf(".md") > -1); // filter files are not markdown files.

        const allContentsByCategory = mdFiles.map((fileName) =>
          getFrontMatter({ category, fileName })
        );

        mdFileMap[category] = allContentsByCategory;
      }
    });

  return mdFileMap;
};

export const readSingleMDFile = async ({
  category,
  fileName,
}: {
  category: string;
  fileName: string;
}) => {
  try {
    const pathToFile = fileName
      ? `${MD_FILE_DIR}/${category}/${fileName}.md`
      : `${MD_FILE_DIR}/${category}.md`;

    const readFile = await fs.readFileSync(pathToFile, "utf-8");
    const { data, content } = matter(readFile);

    return { data, content };
  } catch (e) {
    console.error(e);
  }
};
