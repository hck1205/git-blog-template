import { use } from "react";

import { MainComponent } from "@/components";

import {
  fetchAllMDFilesFrontMatter,
  // SingleMDFile,
  // capitalizeFirstLetter,
} from "@/utils";

import "../designs/globals.css";

const getAllMDFilesFrontMatter = async () => await fetchAllMDFilesFrontMatter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allMDFilesFrontMatter = use(getAllMDFilesFrontMatter());

  return (
    <html>
      <head>
        <title>Git book like blog</title>
        <meta name="description" content="Git Blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <main>
          <MainComponent allFrontMatter={allMDFilesFrontMatter}>
            {children}
          </MainComponent>
        </main>
      </body>
    </html>
  );
}
