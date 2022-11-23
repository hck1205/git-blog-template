"use client";

import { ComponentWrapper } from "./styles";

type Props = {
  isActive: boolean;
};

function SlideMenu({ isActive }: Props) {
  return <ComponentWrapper isActive={isActive}></ComponentWrapper>;
}

export default SlideMenu;
