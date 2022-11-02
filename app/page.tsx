import { MDFileReader } from '@/utils';

const readMDfiles = async () => {
  const files = await MDFileReader();

  return files;
};

export default async function Page() {
  const files = await readMDfiles();

  console.log('files', files.algorithm[0].frontmatter);

  return <h1>Hello, Next.js!</h1>;
}
