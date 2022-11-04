import { useMDFileStore } from "stores";
import { readAllMDFiles } from "@/utils";

const readMDfiles = async () => await readAllMDFiles();

export default async function Page() {
  const { setAllMDFiles } = useMDFileStore((state) => state);
  const files = await readMDfiles();

  // setAllMDFiles(files);

  return <h1></h1>;
}
