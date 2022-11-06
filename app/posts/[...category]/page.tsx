import { use } from 'react';
import { readSingleMDFile, readAllFilePaths } from 'utils/MDFileReader';

const readMDFile = async ({
  category,
  fileName,
}: {
  category: string;
  fileName: string;
}) => await readSingleMDFile({ category, fileName });

const readAllFiles = async () => {
  return await readAllFilePaths();
};

export default function PostPageByCategory({
  params,
}: {
  params: { category: string[] };
}) {
  const [category, fileName] = params.category;

  const file = use(readMDFile({ category, fileName }));
  const allFiles = use(readAllFiles());

  return <p>Category: </p>;
}
