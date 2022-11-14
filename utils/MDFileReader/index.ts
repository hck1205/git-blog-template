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
  // [key: string]: string[];
};

const readMDFileContent = ({
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

export const readAllFilePaths = async () => {
  // Read director files in PATH_TO_MD_FILE_DIR
  const categories = fs.readdirSync(MD_FILE_DIR);

  let mdFileMap: MdFileContent = {
    noCategory: [],
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
        const singleMDFile = readMDFileContent({
          category: "",
          fileName: category,
        });

        mdFileMap["noCategory"].push(singleMDFile);
      } else {
        const dirToMDFiles = `${MD_FILE_DIR}/${category}`;

        // Read all markdown files in [CATEGORIZED] folder
        const mdFiles = fs
          .readdirSync(dirToMDFiles)
          .filter((fileName) => fileName.indexOf(".md") > -1); // filter files are not markdown files.

        const allContentsByCategory = mdFiles.map((fileName) =>
          readMDFileContent({ category, fileName })
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

    return await fs.readFileSync(pathToFile, "utf8");
  } catch (e) {
    console.error(e);
  }
};
