"use client";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { ComponentWrapper } from "./styles";

type Props = {
  toggleMenu: () => void;
  isMenuActive: boolean;
};

function Header({ toggleMenu, isMenuActive }: Props) {
  return (
    <ComponentWrapper>
      {isMenuActive ? (
        <MenuFoldOutlined width={2} height={2} onClick={() => toggleMenu()} />
      ) : (
        <MenuUnfoldOutlined width={2} height={2} onClick={() => toggleMenu()} />
      )}
    </ComponentWrapper>
  );
}

export default Header;
