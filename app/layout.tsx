import { use } from "react";

import {
  fetchAllMDFilesFrontMatter,
  // SingleMDFile,
  // capitalizeFirstLetter,
} from "@/utils";

const getAllMDFilesFrontMatter = async () => await fetchAllMDFilesFrontMatter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allMDFilesFrontMatter = use(getAllMDFilesFrontMatter());
  // setAllFrontMatter(allMDFilesFrontMatter);

  // console.log("allFrontMatter", allFrontMatter);

  // const getListOfTitles = () => {
  //   Object.entries(allMDFiles).forEach(
  //     ([key, value]: [key: string, value: SingleMDFile[]]) => {
  //       const category = CATEGORY_TITLE[key] || capitalizeFirstLetter(key);

  //       console.log("category", category);
  //     }
  //   );
  // };
  // getListOfTitles();

  return (
    <html>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Git Blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
