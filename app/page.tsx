import { MDFileReader } from "@/utils";

const readMDfiles = async () => await MDFileReader();

export default async function Page() {
  const files = await readMDfiles();

  console.log("files", files);

  return <h1></h1>;
}
