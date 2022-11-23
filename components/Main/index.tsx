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

  useEffect(() => {
    console.log("component mount");
    console.log("test", allFrontMatter);
  }, []);

  return (
    <ComponentWrapper isMenuActive={isMenuActive}>
      <SideMenu isActive={isMenuActive} />
      <Header
        toggleMenu={() => setMenuActive(!isMenuActive)}
        isMenuActive={isMenuActive}
      />

      <div className="header">Header</div>
      <div className="body">{children}</div>
      <div className="footer">Footer</div>
    </ComponentWrapper>
  );
}

export default Main;
