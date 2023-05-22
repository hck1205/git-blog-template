import { use } from "react";
import ReactMarkdown from "react-markdown";

import { readSingleMDFile } from "@/utils";

const readMDFile = async ({
  category,
  fileName,
}: {
  category: string;
  fileName: string;
}) => await readSingleMDFile({ category, fileName });

export default function PostPageByCategory({
  params,
}: {
  params: { category: string[] };
}) {
  const [category, fileName] = params.category;

  const mdFile = use(readMDFile({ category, fileName }));

  console.log("mdFile", mdFile);

  if (mdFile) {
    const { data, content } = mdFile;
    console.log("data", data);
    return <div>{<ReactMarkdown children={content}></ReactMarkdown>}</div>;
  } else {
    return null;
  }
}
