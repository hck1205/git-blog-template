import create from "zustand";
import type { MdFileContent } from "@/utils";
import { readAllMDFiles } from "@/utils";

type MDFilesState = {
  allMDFiles: MdFileContent;
  setAllMDFiles: (payload: MdFileContent) => void;
};

export const useMDFileStore = create<MDFilesState>((set) => ({
  allMDFiles: {},
  setAllMDFiles: (allMDFiles: MdFileContent) => set({ allMDFiles }),
}));
