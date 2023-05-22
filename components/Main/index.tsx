"use client";

import { ReactNode, useEffect, useState } from "react";
import { MdFileContent } from "@/utils";
import { SideMenu, Header } from "@/components";

import { ComponentWrapper } from "./styles";

type Props = {
  children: ReactNode;
  allFrontMatter: MdFileContent;
};

function Main({ children, allFrontMatter }: Props) {
  const [isMenuActive, setMenuActive] = useState<boolean>(true);

  return (
    <ComponentWrapper isMenuActive={isMenuActive}>
      <SideMenu isActive={isMenuActive} allFrontMatter={allFrontMatter} />
      <Header
        toggleMenu={() => setMenuActive(!isMenuActive)}
        isMenuActive={isMenuActive}
      />

      <div className="header"></div>
      <div className="body">{children}</div>
      <div className="footer"></div>
    </ComponentWrapper>
  );
}

export default Main;
