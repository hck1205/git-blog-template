import styled from "@emotion/styled";
import { BG_COLOR_SIDE_MENU } from "@/constpack";
import { PURPLE } from "@/designs";

export const ComponentWrapper = styled.div<{ isActive: Boolean }>`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.2s;
  width: ${({ isActive }) => (isActive ? "300px" : 0)};
  background-color: ${BG_COLOR_SIDE_MENU};

  .ant-menu-item {
    color: #f4f4f5 !important;
    font-weight: 600 !important;

    &:not(.ant-menu-item-selected):active,
    &:not(.ant-menu-submenu-selected):active {
      background-color: ${PURPLE(50)} !important;
      color: #f4f4f5 !important;
    }

    &:hover {
      color: #f4f4f5 !important;
    }
  }

  .ant-menu-submenu-title {
    color: #f4f4f5 !important;
    font-weight: 600 !important;

    &:active {
      background-color: ${PURPLE(50)} !important;
    }
  }

  .ant-menu-item-selected {
    background-color: ${PURPLE(50)} !important;
  }
`;
