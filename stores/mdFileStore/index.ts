import create from "zustand";
import type { MdFileContent } from "@/utils";

type MDFilesState = {
  allFrontMatter: MdFileContent;
  setAllFrontMatter: (payload: MdFileContent) => void;
};

export const useMDFileStore = create<MDFilesState>((set) => ({
  allFrontMatter: {},
  setAllFrontMatter: (allFrontMatter: MdFileContent) =>
    set(() => ({ allFrontMatter })),
}));
