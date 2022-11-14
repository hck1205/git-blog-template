import { readAllFilePaths } from "@/utils";
import { use } from "react";

const readMDfiles = async () => await readAllFilePaths();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { allMDFiles, setAllMDFiles } = useMDFileStore((state) => state);
  const allFilePaths = use(readMDfiles());

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
