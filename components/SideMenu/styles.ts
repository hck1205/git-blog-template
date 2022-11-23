import styled from "@emotion/styled";
import { BG_COLOR_SIDE_MENU } from "@/constpack";

export const ComponentWrapper = styled.div<{ isActive: Boolean }>`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.2s;
  width: ${({ isActive }) => (isActive ? "300px" : 0)};
  background-color: ${BG_COLOR_SIDE_MENU};
`;
